var arrOfString = ["hello", "your", "above", "year", "alone", "friendly", "crazy"];
arrOfString.sort(function (a, b) { return a.length - b.length; });
console.log("new array = ".concat(arrOfString));
