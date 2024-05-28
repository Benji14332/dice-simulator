const butEL = document.getElementById("roll-button")
const diceEL = document.getElementById("dice")
const hisEL = document.getElementById("rollhis")
const frontEL = document.getElementById("front")
const org = diceEL.innerHTML;
let hislist = [];
let isrunning = false;




function updatehis() {

    hisEL.innerHTML = "";
    for (let i = 0; i < hislist.length; i++) {
        const listitem = document.createElement("li");
        if (getdf(hislist[i]) == 1) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${1}</span>`;
        }
        if (getdf(hislist[i]) == 2) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${2}</span>`;
        }
        if (getdf(hislist[i]) == 3) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${3}</span>`;
        }
        if (getdf(hislist[i]) == 4) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${4}</span>`;
        }
        if (getdf(hislist[i]) == 5) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${5}</span>`;
        }
        if (getdf(hislist[i]) == 6) {
            listitem.innerHTML = `Roll ${i + 1} Points:<span>${6}</span>`;
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



butEL.addEventListener("click", () => {
    if (isrunning || diceEL.innerHTML != org) {
        return;
    }

    isrunning = true;
    /*  console.log("clicked"); */
    diceEL.classList.add("roll-animation");
    setTimeout(() => {

        diceEL.classList.remove("roll-animation");
        changedice();

    }, 700);

})

function changedice() {

    const rollres = Math.floor(Math.random() * 6) + 1;
    /* console.log(rollres); */
    const diceFace = getdf(rollres);
    /* console.log(diceFace); */
    diceEL.innerHTML = diceFace;
    setTimeout(function () {
        hislist.push(rollres);
        updatehis();
    }, 750)


}