let arrOfString: Array<string> = ["hello", "your", "above", "year", "alone", "friendly", "crazy"];
arrOfString.sort((a, b) => a.length - b.length);
console.log(`new array = ${arrOfString}`);
