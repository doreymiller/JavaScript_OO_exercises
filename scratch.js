// "use strict";

function whatIsThis() {
  console.log(this);
}

let boat = {
  log() {
    whatIsThis();
  }
}

boat.log();