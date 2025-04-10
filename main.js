// 1 FUNCIONES FLECHA

// 1.
const greetings = () => 'Hola'

// 2.
const division = (a, b) => a / b

// 3.
const myName = (name) => `Mi nombre es ${name}`

// 4.
const test2 = () => 'Función test2 ejecutada.'
const test1 = (callback) => callback()


// 2 FOREACH

let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
   ]

// 1.
people.forEach((person) => {
    if(person.age >= 25) {
        console.log(person);
    }
})


// 2.
people.forEach((person) => {
    if(person.name.startsWith('J')) {
        console.log(person)
    }
})


// 3 MAP

// 1.
const people25 = people.map((person) => {
    if(person.age >= 25) {
        return person
    }
})
console.log(people25)

// 2.
const peopleJ = people.map((person) => {
    if(person.name.startsWith('J')) {
        return person
    }
})
console.log(peopleJ)

// 3.
const numbers = [ 4, 5, 6, 7, 8, 9, 10]

const numbersSquare = numbers.map((number) => number * number)
console.log(numbersSquare)


// 4 FILTER

// 1.
const listnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddNumbers = listnumbers.filter((number) => number % 2 !== 0)
console.log(oddNumbers)

// 2. 
const foodList = [
	{ name: 'Tempeh', isVeggie: true },
	{ name: 'Cheesbacon burguer', isVeggie: false },
	{ name: 'Tofu burguer', isVeggie: true },
	{ name: 'Entrecot', isVeggie: false }
]

const veggieFood = foodList.filter((food) => food.isVeggie === true)
console.log(veggieFood)


// 5 REDUCE

// 1.
const listOfNumbers = [39, 2, 4, 25, 62]

const multiplySum = listOfNumbers.reduce((a, b) => a * b, 1)
console.log(multiplySum)


// EXTRAS

// MAP

// 1.
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    }
]

const newArray = staff.map((person) => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`
})
console.log(newArray);

// 2.
const listFood = ["Pizza", "Ramen", "Paella", "Entrecot"]

const newFoodList = listFood.map((food, index) => {
    switch(index) {
        case 0:
            return `Como soy de Italia, amo comer ${food}`
        case 1:
            return `Como soy de Japón, amo comer ${food}`
        case 2:
            return `Como soy de Valencia, amo comer ${food}`
        case 3:
            return `Aunque no como carne, el ${food} es sabroso`
    }
})

console.log(newFoodList);


// FILTER

// 1.
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
];

const newInventory = inventory.filter((item) => item.price > 300)
console.log(newInventory);


// REDUCE

// 1.
const sentenceElements = [
    'Me',
    'llamo',
    'Iker',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const newSentence = sentenceElements.reduce((element, nextElement) => element + ' ' + nextElement)
console.log(newSentence);