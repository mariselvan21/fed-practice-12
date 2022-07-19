const animals=["lion","tiger","cat","dog"];
console.log("animals of array:"+animals);
animals.fill("human");
console.log("animals of array all elements filled in human:"+animals)
animals.fill("goat",2,4);
console.log("animals of array goat filled in index value 2,3:"+animals);

