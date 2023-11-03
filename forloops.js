const courses = ["Software Developer", "Software Engineering", "Database" , "Computer Literacy"];
let i = 0; // counter
let len = courses.length; // Correct the capitalization of "length"
let devops = "";

for (; i < len;) {
devops += courses[i + ''] + '\n'; // Correct the line break character ('\n' instead of '/n')
i++;
}
console.log(devops);