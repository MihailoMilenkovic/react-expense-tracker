//object destructuring

const person={
    name:"Andrew",
    age:27,
    location:{
        city:"Phil", 
        temperature:28
    }
};

// const{name:firstName="Anonymous",age}=person;
// console.log(`${firstName} is ${age}.`);

// const {temperature:temp,city}=person.location;
// if(city&&temp){
//     console.log(`it's ${temp} in ${city}`);
// }

// const book={
//     title:"Ego is the enemy",
//     author:"Ryan Holiday",
//     publisher:{
//         name:"Penguin"
//     }
// };
// const {name:publisherName="self-published"}=book.publisher;
// console.log(publisherName);

//array destructuring
//
const address=["1299 S Juniper Street","Philadelphia","Pensylvania","19147"];
const [,city,state="New York"]=address;
console.log(`You are in ${city}, ${state}.`);

const item=["coffee (hot)","$2.00","$2.50","$2.75"];
const [itemName="no item",,medCost="$0.00"]=item;
console.log(`A medium ${itemName} costs ${medCost}`);



