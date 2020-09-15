
const Account = (() => {

  // let userFirstName;
  // let userLastName;
  // let userEmail;
  // let userPasswd;
 

  function randomCharSequence(numChars) {
    const allChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let seq = "";
  
    for (let count = 0; count < numChars; count += 1) {
      let nextChar = allChars[Math.floor(Math.random() * allChars.length)];
      seq = seq.concat(nextChar);
    }
  
    return seq;
  }

  function isValidPasswd(testPass) {
    return testPass === userPasswd;
  }

  return {
    init(emailAddress, passwd, first, last) {
      // userFirstName = first;
      // userLastName = last;
      // userPasswd = passwd;
      // userEmail = emailAddress;
      let 

      this.reanonymize(passwd);
      return this;
    },

    reanonymize(passwd) {
      if (isValidPasswd(passwd)) {
        this.displayName = randomCharSequence(16);
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(passwd, newPass) {
      if (isValidPasswd(passwd)) {
        userPasswd = newPass;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(passwd) {
      return isValidPasswd(passwd) ? userFirstName : 'Invalid Password';
    },

    lastName(passwd) {
      return isValidPasswd(passwd) ? userLastName : 'Invalid Password';
    },

    email(passwd) {
      return isValidPasswd(passwd) ? userEmail : 'Invalid Password';
    },
  };
})();


const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false