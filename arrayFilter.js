const Animals = [    
	{name: “Fluffykins” , species: “rabbit” },
	{name: “Caro” , species: “dog” },
	{name: “Hamilton” , species: “dog”},
	{name: “Harold”, species: “fish”},
	{name: “Ursula” , species: “cat”},
	{name: “Jimmy”, species: “fish”}
];


const animalsFilter = function (arr) {
    for(let i=0; i < arr.length; i++) {
        if (arr[i].species === "dog"){
            return arr[i].name;
        }
    }
};

const dogs = animalsFilter(Animals);
console.log(dogs);
