const student ={

    firstName: 'Khomotso',
    surname: "Dhlamini",
    age: 25,
    contact: "0765258987",

//accessor property(getter)

get getName()
{
    return this.firstName;
},
get getDetails()
{
    return [this.firstName, this.surname, this.age, this.contact];
},

// assocer property (setter)
set changeName(newName)
{
   // this.firstName= newName; //for singular return
  this.firstName=newName;//multiple return
},

}

console.log(student.firstName);

console.log(student.getName);

student.changeName ="Khomotso";
console.log(student.firstName);

console.log(student.getDetails);



    