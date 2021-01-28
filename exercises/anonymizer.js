let Account = (function () {
  let userEmail;
  let userPW;
  let userFirstName;
  let userLastName;

  function isValidPW(testPW) {
    return userPW === testPW;
  }

  function getRandomAlphaNumber() {
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  }

  function anonymize() {
    let result = "";

    for (let index = 0; index < 16; index += 1) {
      result += getRandomAlphaNumber();
    }

    return result;
  }

  return {
    init(email, pw, firstName, lastName) {
      userEmail = email;
      userPW = pw;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },
    reanonymize(pw) {
      if (isValidPW(pw)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },

    resetPassword(currPW, newPW) {
      if (isValidPW(currPW)) {
        userPW = newPW;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName(pw) {
      if (isValidPW(pw)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName(pw) {
      if (isValidPW(pw)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email(pw) {
      if (isValidPW(pw)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    },
  };
})();

let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize("abc"); // returns true
console.log(displayName === fooBar.displayName); // logs false
