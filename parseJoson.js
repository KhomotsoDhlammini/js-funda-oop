const myDetails =
`
{
    "name": "Tamara",
    "surname": "Dhlamini",
    "courses": "Computer Science"
}
`


const Data =JSON.parse(myDetails);
console.log(Data);

const results = JSON.stringify(Data);
console.log(results.toUpperCase());

