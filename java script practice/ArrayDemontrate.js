let origDogs = ["Bulldog","Beagle", "Labrador"];
let cats = new Array("Americal Curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

// Array Copy Elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//stack Fucnction(LIFO) Push and Pop 
let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.shift();
dogs[dogs.length] = "Poodie";

// Add and remove from First 
let addFirst = dogs.unshift("Golden Retriver");
let shiftDog = dogs.shift();

// Atomic add and remove elemerns (where, how many to remove, elemet list)
dogs.splice(2,1,"Pug", "Boxer");

// Array Function -Concat, Slice and Sort 
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDogs = dogs.slice(0).sort();
function scanArray([first,second]){ console.log("Scan:" +first+ " " +second);}
scanArray(animals);
let joinAnimals = animals.join("");
let allAnimals = " ";
for (let  animal of animals) allAnimals += animal + ""
console.log("animals" +allAnimals);

