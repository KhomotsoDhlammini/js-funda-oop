function Person (name , age)
{
    this.name =name;
    this.age = age;
}

//Create two operson objects

let John = new Person("John", 23);
let Jane = new Person("Jane", 29)

console.log(John);
console.log(Jane);

let Johny =  //inheritance
{
    'name': 'Johny',
    'age': 25,
}

function Students (name, age, course) // polymorphism
{
    this.name= name;
    this.age = age;
    this.course = course;
}

let nkosana = new Students(Johny, 24, "Full srack");
console.log(nkosana)