'use strict';


const goToAbout = document.getElementById('about');

goToAbout.onclick = function () {
    location.assign(`${location.origin}${location.pathname === "/"?"./pages/about.html":"/"}`);
};


