//write a for cycle that shows the numbers
// 0 until your age

// for (let i = 0; i <= 25; i++) {
//     console.log(`the number is ${i}`);
// }

//Now let's put it in a function

function ShowNumbers() {

    let year = Number(prompt('Type a number: '));
    for (i = 0; i <= year; i++) {
        console.log(`the number is ${i}`)
    }


}
let referentes = [
    "@wesbox",
    "@dan_abramov",
    "@stolinkski",
    "@ryanflorence",
    "@kentcdodds",
    "@sophiebits",
    "@acdlite",
    "@sebmarkbage"
];

//show at the array at the console
// console.log(referentes)
//     //add some user name using "unsfhift" & push
// referentes.unshift("@obamita");
// console.log(referentes);
// referentes.push("@kyloRen")
// console.log(referentes);

// 1. Crea una función que tome una lista de nombres (un array), y un nombre (un string). 
// La función deberá RETORNAR un nuevo array con los mismos nombres del array
// junto al nuevo nombre insertado dentro del array.

function NewNames(UserNames) {
    let newUserName = prompt('type an user name');
    newUserName = `@${newUserName}`;
    console.log(UserNames);
    UserNames.unshift(newUserName);
    console.log(UserNames);
    let nunmberOfUsers = Number(prompt('type the amount of user to register'));

    if (typeof nunmberOfUsers === 'string' || isNaN(nunmberOfUsers) || nunmberOfUsers === 0) {
        alert('type a number ');

    } else {
        alert(`the number of users is ${nunmberOfUsers}`)
        for (let i = 0; i < nunmberOfUsers; i++) {
            let newUserName = prompt('type an user name');
            newUserName = `@${newUserName}`;
            UserNames.push(newUserName);

        }
        console.log(UserNames);


    }
    return (UserNames)
}
//NewNames(referentes);

//Desarrolla una función que verifique si un string está dentro de un array.
// Puedes darle el nombre que quieras, sugerimos verificarUsername()

function verifyUsername(UserNames) {
    let UserVerify = prompt('Type the user to verify without the @')
    UserVerify = `@${UserVerify}`;
    if (UserNames[UserNames.indexOf(UserVerify)] === UserVerify) {
        console.log(`congrats, we found the user: ${UserVerify} at the position ${UserNames.indexOf(UserVerify)}.`)
        return UserNames;
    } else {
        console.log(`the user is not registered`)
    }

}
/*Desarrolla una función que tome un username, y un array de users, 
y que retorne el array sin el username dentro de sus elementos*/

function DeleteUser(UserNames) {
    let UserToDelete = prompt('Type the user to delete without the @')
    UserToDelete = `@${UserToDelete}`; //here I concatenate the string 
    let UserID = UserNames.indexOf(UserToDelete); //With indexOf, UserId will return me the position of the user to delete at the array of userLsit
    if (UserNames[UserID] === UserToDelete) { //I compare if  the user to delete is at the array of the user list
        console.log(`congrats, we found the user: ${UserToDelete} at the position ${UserID}.`);
        UserNames.splice(UserID, 1); //Th user id will tell me the position were I wil delete the user requested
        console.log(`the user deleted was: ${UserToDelete}`);
        return UserNames;
    } else {
        console.log(`the user were not deleted`)
    }

}

function UserSystem1(userList) {
    NewNames(userList);
    verifyUsername(userList);
    alert('End of the program');

}

/* Desarrolla una función que retorne el promedio de una lista de números.
 La función deberá recibir como argumentos un array de números.*/
let listaNumeros = [4, 50, 30, 21, 10, 55, 66, 20, 90];


function promedio(arrayOfNumbers) {
    let acumulador = 0;
    let VarAverage;
    for (let j = 0; j < arrayOfNumbers.length; j++) {

        acumulador = acumulador + arrayOfNumbers[j];
    }
    VarAverage = acumulador / arrayOfNumbers.length;
    return VarAverage;
}

let numbersitos = [10, 20, 30, 30, 60, 98, 1000];

function EscandalotronV4(decibels) {
    let decibelios = promedio(decibels);
    if (decibelios <= 30) {
        console.log('People are whispering');
    }
    if (decibelios < 60 && decibelios > 30) {
        console.log('The sound level is normal')
    }
    if (decibelios > 90) {
        console.log('Pople are making an scandal');
    }

}