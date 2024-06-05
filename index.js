const butEL = document.getElementById("roll-button")
const diceEL = document.getElementById("dice")
const hisEL = document.getElementById("rollhis")
const reEL = document.getElementById("reset-button")
const frontEL = document.getElementById("front")
let prev = -1;
let hislist = [];
let isrunning = false;
document.documentElement.style.setProperty('--style', 'none');

butEL.addEventListener("click", () => {
    if (isrunning) {
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

        if (hisEL.scrollHeight > hisEL.clientHeight) {
            hisEL.scrollTop = hisEL.scrollHeight - hisEL.clientHeight;
        }

        setTimeout(() => {
            isrunning = false;
            document.documentElement.style.setProperty('--style', 'flex');
        }, 800);

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

    var rollres = (ran1 * ran1 * Math.floor(Math.random() * ran2)) % 7;
    while (rollres == 0) {
        rollres = Math.floor(Math.random() * 6);
    }

    if (prev == rollres) {
        rollres = (rollres * Math.floor(Math.random() * 6)) % 7;
    }
    /* console.log(rollres); */
    const diceFace = getdf(rollres);
    /* console.log(diceFace); */

    if (diceFace == 1) {
        var randomAngleX = Math.floor(Math.random() * 6) * 360 + 60 + 1440;
        var randomAngleZ = Math.floor(Math.random() * 6) * 360 + 60 + 1440;
        document.documentElement.style.setProperty('--angle1', randomAngleX + 'deg');
        document.documentElement.style.setProperty('---angle1', randomAngleZ + 'deg');

        diceEL.classList.add("roll-animation1")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation1");
        }, 2600);
        diceEL.style.transform = 'rotateX(60deg) rotateY(0deg) rotateZ(60deg)';
    } else if (diceFace == 2) {
        var randomAngleX = Math.floor(Math.random() * 6) * 360 + 150 + 1440;
        var randomAngleZ = Math.floor(Math.random() * 6) * 360 + 90 + 1440;
        document.documentElement.style.setProperty('--angle2', randomAngleX + 'deg');
        document.documentElement.style.setProperty('----angle2', randomAngleZ + 'deg');

        diceEL.classList.add("roll-animation2")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation2");
        }, 2600);
        diceEL.style.transform = 'rotateX(150deg) rotateY(60deg) rotateZ(90deg)';
    } else if (diceFace == 3) {
        var randomAngleX = Math.floor(Math.random() * 6) * 360 - 30 + 1440;
        var randomAngleY = Math.floor(Math.random() * 6) * 360 + 30 + 1440;
        document.documentElement.style.setProperty('--angle3', randomAngleX + 'deg');
        document.documentElement.style.setProperty('---angle3', randomAngleY + 'deg');

        diceEL.classList.add("roll-animation3")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation3");
        }, 2600);
        diceEL.style.transform = 'rotateX(-30deg) rotateY(30deg) rotateZ(0deg)';
    } else if (diceFace == 4) {
        var randomAngleX = Math.floor(Math.random() * 6) * 360 + -30 + 1440;
        var randomAngleY = Math.floor(Math.random() * 6) * 360 + 30 + 1440;
        document.documentElement.style.setProperty('--angle4', randomAngleX + 'deg');
        document.documentElement.style.setProperty('---angle4', randomAngleY + 'deg');

        diceEL.classList.add("roll-animation4")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation4");
        }, 2600);
        diceEL.style.transform = 'rotateX(-30deg) rotateY(30deg) rotateZ(180deg)';
    } else if (diceFace == 5) {
        var randomAngleX = Math.floor(Math.random() * 6) * 360 + -30 + 1440;
        var randomAngleY = Math.floor(Math.random() * 6) * 360 + 30 + 1440;
        document.documentElement.style.setProperty('--angle5', randomAngleX + 'deg');
        document.documentElement.style.setProperty('---angle5', randomAngleY + 'deg');


        diceEL.classList.add("roll-animation5")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation5");
        }, 2600);
        diceEL.style.transform = 'rotateX(-30deg) rotateY(30deg) rotateZ(90deg)';
    } else {
        var randomAngleY = Math.floor(Math.random() * 6) * 360 + 180 + 1440;
        var randomAngleZ = Math.floor(Math.random() * 6) * 360 + 120 + 1440;
        document.documentElement.style.setProperty('---angle6', randomAngleY + 'deg');
        document.documentElement.style.setProperty('----angle6', randomAngleZ + 'deg');

        diceEL.classList.add("roll-animation6")
        setTimeout(() => {
            diceEL.classList.remove("roll-animation6");
        }, 2600);
        diceEL.style.transform = 'rotateX(60deg) rotateY(180deg) rotateZ(120deg)';
    }

    prev = rollres;

    setTimeout(function () {
        hislist.push(rollres);
        updatehis();
    }, 1800)


}

reEL.addEventListener("click", () => {
    while (hisEL.firstChild) {
        hisEL.removeChild(hisEL.firstChild);
        hislist.pop();
    }
    document.documentElement.style.setProperty('--style', 'none');
})
