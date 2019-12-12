'use strict';
/*

const user = {
    name:"jhgfd",
    surname:"surname"

};


const userString = JSON.stringify(user);
localStorage.setItem("myUser", userString);

const deleteButton = document.getElementById("mybutton");




deleteButton.addEventListener("click", function () {
    localStorage.removeItem("myUser");
} , false);

onload = function (e) {
    console.log(JSON.parse(localStorage.getItem("myUser")));

};

*/

/*
const nameInput = document.querySelector("input[name='name']");
const surnameInput = document.querySelector("input[name='surname']");
const emailInput = document.querySelector("input[name='email']");
const buttonLogin = document.querySelector("#loginButton");


function User(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;

}

buttonLogin.onclick = function (e) {
    const user = new User(nameInput.value, surnameInput.value, emailInput.value);
    sessionStorage.setItem("user", JSON.stringify(user));
};*/

const locationPropsList = document.getElementById('location');


for(let prop in location){


    if(typeof location[prop]==="string"){


        const listItem = document.createElement('li');
      listItem.innerText = `${prop} = "${location[prop]}"`;
      /* locationPropsList.appendChild(listItem);*/

    }
}



const  reloadButton = document.createElement('reload');

reloadButton.addEventListener('click',function () {
    location.reload();

});



const goToAbout = document.getElementById('about');

goToAbout.onclick = function () {
    location.assign('./pages/about.html');
};


