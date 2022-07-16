const person = {
  talk() {
    //  var self=this;
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};
person.talk();
