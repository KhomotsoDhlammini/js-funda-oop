//let names = "McCool";
//names = "Rashford";

//console.log(names);
let globalVar = "Global Variables";

function fun()
{
    var localVar = "Locatl Variables"
    console.log("acessing local in its scope:" + localVar);
    console.log("Access global in scope: " + globalVar)
}
fun();

let results = 0;

if (results >= 85)
{
    console.log("Dinstiction");
}

else if(results >= 75 && results < 85)
{
    console.log("Excemption");
}

else if(results >= 50 && results < 75)
{
    console.log("achieved");
}
else if(results < 50 && results > 0)
{
    console.log(" not achieved");
}

else{
    console.log("Didn't write");
}

let result = 0;

while(result < 10)
{
    console.log(result);
    result +=2;
}
