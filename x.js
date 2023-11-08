//import fs from 'fs';

const Student1 =
{
 name: "Khomotso",
 age: 5,
 course: "Full-stack",
 department: "Science"

};

const Student2=
{
    name: "Andy",
    age: 10,
    course: "computer Science",
    department: "Engineering"
}

const fs = require('fs');



function writeData(obj) {
    fs.writeFile('./students.json', JSON.stringify(obj), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Data has been written to students.json');
      }
    });
  }
  

  function readData() {
    fs.readFile('./students.json', 'utf-8', (err, jsonString) => {
      if (err) {
        console.log(err);
      } else {
        try {
          const data = JSON.parse(jsonString);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
  writeData(Student1);
  readData();