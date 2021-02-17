"use strict";

/*
// UNDERSTANDING THE PROBLEM
goal: inventory mgmt system
 - item creator: checks that all info is present and valid
 - items manager: creates items, updates iteem info, deletes items, + queries item info
 - reports manager: generates reports for specific item or all items

item info (object properties):
- sku code
- item name (min 5 chars)
- category (min 5 chars, 1 word)
- quantity (can't be blank, assume valid number is provided)

// EXAMPLES/EDGE CASES:
- don't validate uniqueness of sku code (duplicates ok)
- if any of required info isn't valid, item creator returns an obj w/ notValid prop set to true

// DATA STRUCTURE(S):
- strings, numbers, collections

// ALGORITHM:
ItemCreator:
- generateSkuCode method:
 - accepts 2 args: item name, category
 - first 3 letters of item and first 2 letters of category
  - if item name has 2 words and first word is two letters only, next letter taken from next word
 - declare an skucode variable
 - eliminate spaces from itemName
 - get first 3 letters from item name and save to sku code variable
 - then get first 2 letters of category and concat to sku code variable
 - uppercase sku code 
 - return sku code

- isValidItemName method
 - checks that item name is a minimum of 5 chars, not counting spaces

- isValidCategory method:
 - checks that item category is at least 5 chars and only 1 word (no spaces)

ItemManager:
create method:
    // creates a new item. Returns false if creation is not successful.
    // uses ItemCreator to make new item object

update method:
  // accepts an SKU Code and an object as an argument and updates any of the
  // information on an item. You may assume valid values will be provided.

ReportManager:
- createReporter method:
  // accepts an SKU code as an argument and returns an object
  // returned object has one method, itemInfo. logs to the console all the properties of an
  // object as "key:value" pairs (one pair per line).
  // There are no other properties or methods on the returned object
  // (except for properties/methods inherited from Object.prototype).
*/

let ItemCreator = (function () {
  function generateSkuCode(itemName, category) {
    let skuCode = "";
    let skuName = itemName.split(" ").join("").slice(0, 3);
    let skuCat = category.slice(0, 2);
    skuCode += `${skuName}${skuCat}`.toUpperCase();
    return skuCode;
  }

  function isValidItemName(itemName) {
    return itemName.split(" ").join("").length >= 5;
  }

  function isValidCategory(category) {
    return isValidItemName(category) && category.split(" ").length === 1;
  }

  function isQuantityProvided(quantity) {
    return typeof quantity === "number" && quantity >= 0;
  }

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
  getItem(skuCode) {
    return this.items.filter((item) => item.skuCode === skuCode)[0];
  },
  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },
  update(skuCode, itemInfo) {
    Object.assign(this.getItem(skuCode), itemInfo);
  },
  delete(skuCode) {
    return this.items.filter((item) => item.skuCode !== skuCode);
  },
  list() {
    return this.items;
  },
  inStock() {
    return this.items.filter((item) => {
      return item.quantity > 0;
    });
  },
  itemsInCategory(category) {
    return this.items.filter((item) => item.category === category);
  },
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
    return this.items.list();
  },

  createReporter(skuCode) {
    return function () {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo() {
          for (let property in item) {
            console.log(`${property}: ${item[property]}`);
          }
        },
      };
    }.bind(this)();
  },

  reportInStock() {
    console.log(
      this.items
        .inStock()
        .map((item) => {
          return item.itemName;
        })
        .join(",")
    );
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
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update("SOCSP", { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
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
