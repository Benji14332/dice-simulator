const butEL = document.getElementById("roll-button")
const diceEL = document.getElementById("dice")
const hisEL = document.getElementById("rollhis")
const frontEL = document.getElementById("front")
const org = diceEL.innerHTML;
let hislist = [];
let isrunning = false;


butEL.addEventListener("click", () => {
    if (isrunning || diceEL.innerHTML != org) {
        return;
    }

    isrunning = true;
    /*  console.log("clicked"); */

    changedice();


})

function updatehis() {

    hisEL.innerHTML = "";
    for (let i = 0; i < hislist.length; i++) {
        const listitem = document.createElement("li");
        if (getdf(hislist[i]) == 1) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9856"}</span>`;
        }
        if (getdf(hislist[i]) == 2) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9857"}</span>`;
        }
        if (getdf(hislist[i]) == 3) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9858"}</span>`;
        }
        if (getdf(hislist[i]) == 4) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9859"}</span>`;
        }
        if (getdf(hislist[i]) == 5) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9860"}</span>`;
        }
        if (getdf(hislist[i]) == 6) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${"&#9861"}</span>`;
        }

        hisEL.appendChild(listitem);
        isrunning = false;
        diceEL.innerHTML = org;

    }
}

function getdf(rollres) {
    if (rollres == 1) {
        return 1
    } else if (rollres == 2) {
        return 2
    } else if (rollres == 3) {
        return 3
    } else if (rollres == 4) {
        return 4
    } else if (rollres == 5) {
        return 5
    } else {
        return 6
    }

}

/* setTimeout(() => {
    diceEL.classList.remove("roll-animation1");
}, 700); */

function changedice() {
    var d = new Date();
    var ran1 = d.getSeconds();
    var ran2 = d.getMinutes();
    var ran3 = d.getHours();

    const rollres = ((ran1 + ran2) * ran3) % 7;
    /* console.log(rollres); */
    const diceFace = getdf(rollres);
    /* console.log(diceFace); */

    if (diceFace == 1) {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 180 + 360;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 540;
        document.documentElement.style.setProperty('--angle1', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle1', randomAnglex + 'deg');

        diceEL.classList.add("roll-animation1")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation1");
        }, 2000);
    } else if (diceFace == 2) {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 630;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 270 + 360;
        document.documentElement.style.setProperty('--angle2', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle2', randomAnglex + 'deg');

        diceEL.classList.add("roll-animation2")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation2");
        }, 2000);
    } else if (diceFace == 3) {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 180 + 360;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 450;
        document.documentElement.style.setProperty('--angle3', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle3', randomAnglex + 'deg');

        diceEL.classList.add("roll-animation3")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation3");
        }, 2000);
    } else if (diceFace == 4) {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 180 + 360;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 270 + 360;
        document.documentElement.style.setProperty('--angle4', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle4', randomAnglex + 'deg');

        diceEL.classList.add("roll-animation4")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation4");
        }, 2000);
    } else if (diceFace == 5) {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 450;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 360;
        document.documentElement.style.setProperty('--angle5', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle5', randomAnglex + 'deg');


        diceEL.classList.add("roll-animation5")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation5");
        }, 2000);
    } else {
        var randomAngley = Math.floor(Math.random() * 6) * 360 + 360;
        var randomAnglex = Math.floor(Math.random() * 6) * 360 + 180 + 360;
        document.documentElement.style.setProperty('--angle6', randomAngley + 'deg');
        document.documentElement.style.setProperty('---angle6', randomAnglex + 'deg');

        diceEL.classList.add("roll-animation6")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation6");
        }, 2000);
    }

    setTimeout(function () {
        hislist.push(rollres);
        updatehis();
    }, 2000)


}
