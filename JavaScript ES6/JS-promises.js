const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You So !!");
  }, 3100);
});

myPromise.then(function (value) {
  console.log(value)
});
