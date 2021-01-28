let ItemCreator = (function () {
  function generateSkuCode(itemName, category) {}

  function isValidItemName(itemName) {}

  function isValidCategory(category) {}

  function isQuantityProvided(quantity) {}

  return function (itemName, category, quantity) {
    if (
      isValidItemName(itemName) &&
      isValidCategory(category) &&
      isQuantityProvided(quantity)
    ) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  getItem(skuCode) {},
  create(itemName, category, quantity) {
    // creates a new item. Returns false if creation is not successful.
  },
  update(skuCode, itemInfo) {
    // accepts an SKU Code and an object as an argument and updates any of the
    // information on an item. You may assume valid values will be provided.
  },
  delete(skuCode) {
    // accepts an SKU Code and deletes the item from the list. assume a valid SKU
    // code is provided.
  },
  list() {},
  inStock() {
    //  list all the items that have a quantity greater than 0.
  },
  itemsInCategory(category) {
    // list all the items for a given category
  },
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    // accepts an SKU code as an argument and returns an object
    // returned object has one method, itemInfo. logs to the console all the properties of an
    // object as "key:value" pairs (one pair per line).
    // There are no other properties or methods on the returned object
    // (except for properties/methods inherited from Object.prototype).
  },
  reportInStock() {
    // Logs the item names of all the items that are in stock as a comma separated values.
  },
};

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update("SOCSP", { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory("sports");

ItemManager.delete("SOCSP");
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
