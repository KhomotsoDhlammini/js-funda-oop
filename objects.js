let school =
{
    name: "Secunda Secondary School",
    location: "Mpuamalanga",
    established: "1982",
    20:1000,

    displayInfo: function()
    {
        console.log(`Welcome to ${school.name} 
        located at ${school.location} 
        which was established ${school.established},
         the school has a rating of ${school[20]}`);
    }
} 
school.displayInfo();
console.log(school.name);