let staff = {
    pers1 : {
        nome :"Wayne Barnett",
        ruolo : "Founder & CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg"
    },
    pers2 : {
        nome :"Angela Caroll",
        ruolo : "Chief Editor",
        immagine : "img/angela-caroll-chief-editor.jpg"
    },
    pers3 : {
        nome :"Walter Gordon",
        ruolo : "Office Manager",
        immagine : "img/walter-gordon-office-manager.jpg"
    },
    pers4: {
        nome :"Angela Lopez",
        ruolo : "Social Media Manager",
        immagine : "img/angela-lopez-social-media-manager.jpg"
    },
    pers5: {
        nome :"Scott Estrada",
        ruolo : "Developer",
        immagine : "img/scott-estrada-developer.jpg"
    },
    pers6 : {
        nome :"Barbara Ramos",
        ruolo : "Graphic Designer",
        immagine : "img/barbara-ramos-graphic-designer.jpg"
    }
};

let allName = []
let allRole = []
let allImg = []

for(let i in staff){
    allName.push(staff[i].nome)
}

for(let i in staff){
    allRole.push(staff[i].ruolo)
}

for(let i in staff){
    allImg.push(staff[i].immagine)
}

console.log(allName);
console.log(allRole);
console.log(allImg);

for(let n=1; n<=6; n++){
    let img = document.querySelector(`.col-4:nth-child(${n}) img`);
    let name = document.querySelector(`.col-4:nth-child(${n}) .name`);
    let role = document.querySelector(`.col-4:nth-child(${n}) .role`);
    img.src = allImg[n-1];
    name.innerHTML = allName[n-1];
    role.innerHTML = allRole[n-1];
}
