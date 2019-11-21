'use strict';

(function () {
    function select(selector) {
        return document.querySelector(selector);
    }

    const colorChangeElement = select(".container");
    const divCount = 16;
    function generateDivs (count) {
        for (let i = 0; i < count; i++ ) {
            const divEl = document.createElement('div');
            divEl.textContent = (i+1).toString() +  '-asis Divas';
            colorChangeElement.appendChild(divEl);
        }
    }

    generateDivs(divCount);

    let divs = document.querySelectorAll('.container div');

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    console.log(Math.random()*Math.floor(10))

    function randomBgColor(r, g, b) {
        return 'rgb('+ r + ', ' + g + ', ' + b + ')';

    }

    for(let i = 0; i < divCount; i++) {
        divs[i].onclick = function (e) {
            e.target.style.backgroundColor = randomBgColor(
                                                                                    getRandomInt(255),
                                                                                    getRandomInt(255),
                                                                                    getRandomInt(255)
                                                                                   );
        }
    }




}) ();