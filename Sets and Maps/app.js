
// --------------SETS--------------------------------

// const ids = new Set(['hi','from ','set']);
// ids.add(2);
// if(ids.has('hi')){
//     ids.delete('hi');  //by this method we can delete elemnts from Set
// }
// // console.log(ids.has(1)); //it return true if enter element is in Set

// for( const entry of ids.entries()){
//     console.log(entry[0]);       //this how we can read value from Set
// }

// ----------------MAPS-----------------------------------

const person1 = {name: 'Anoop'};
const person2 = {name: 'Pixie'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date : 'two week ago', price: 100}]);

console.log(personData);
console.log(personData.get(person1));

 for (const [key ,value] of personData.entries()){
     console.log(key ,value);
 }

 // This is how we can access all keys in Maps
for( const key of personData.keys()){
    console.log(key);
}

 // This is how we can access all values in Maps
 for( const value of personData.values()){
    console.log(value);
}

// personData.clear(); // it will clear alll data

console.log(personData.size);  //it will tell us the size of Map


// -----------weak SET----------------

let person = {
    name: 'max'
};

const persons = new WeakSet();
persons.add(person);
   

console.log(persons);