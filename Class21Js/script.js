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
    return (referentes)
}
//NewNames(referentes);

//Desarrolla una función que verifique si un string está dentro de un array.
// Puedes darle el nombre que quieras, sugerimos verificarUsername()

function verifyUsername(UserNames) {
    let UserVerify = prompt('Type the user to verify without the @')
    UserVerify = `@${UserVerify}`;
    if (UserNames[UserNames.indexOf(UserVerify)] === UserVerify) {
        console.log(`congrats, we found the user: ${UserVerify} at the position ${UserNames.indexOf(UserVerify)}.`)

    } else {
        console.log(`the user is not registered`)
    }

}

function UserSystem1(userList) {
    NewNames(userList);
    verifyUsername(userList);
    alert('End of the program');

}