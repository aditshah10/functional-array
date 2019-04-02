const Animals = [    
	{name: "Fluffykins" , species: "rabbit" },
	{name: "Caro" , species: "dog" },
	{name: "Hamilton" , species: "dog"},
	{name: "Harold", species: "fish"},
	{name: "Ursula" , species: "cat"},
	{name: "Jimmy", species: "fish"}
];

const names = function(arr) {
    let animalNames = [ ]
    for(let i = 0; i < arr.length; i++){
        
        animalNames.push(arr[i].name)
       
    } return animalNames
    
}

const namesAnimals = names(Animals)
console.log(namesAnimals)

const namesOfAnimals = Animals.map(x => x.name)
console.log(namesOfAnimals);