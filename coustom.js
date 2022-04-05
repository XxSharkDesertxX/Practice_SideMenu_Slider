const container = document.querySelector(".container");
const conteint_title = document.querySelectorAll(".container_title");
const text_contaienr_title = document.querySelector(".container_title p");
const icon = document.querySelectorAll(".container_icon span");
console.log(icon);

console.log(conteint_title);

let data = true;
container.addEventListener("click",function () {
    if (data == true) {

        for(let i of icon){
            i.style.color="#000";
        }

        container.style.background="linear-gradient(to right , #fff , orange)";

        for(let i of conteint_title){
            i.style.width="5rem";
        }
        data=false;

    } else {

        for(let i of icon){
            i.style.color="orange";
        }

        container.style.background="#fff";

        for(let i of conteint_title){
            i.style.width="0";
        }
        data=true;
    }
});



const box_image = document.querySelectorAll(".box_slider img");
const slider = document.querySelector(".slider");


for(let i of box_image){
    i.addEventListener("click",function () {
        slider.innerHTML=`<img src="${i.src}"></img>`;
    });
}

