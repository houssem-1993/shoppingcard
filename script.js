/* 
getElementById , querySelector ==> element
getEmenetsByClassName , querySelectorAll ==> Node List or Html Collection 
 (convert to Array with Array.from(obj))

*/

const somme = document.getElementById("somme");
const btnsMinus = Array.from(document.querySelectorAll(".minus-btn")); // [ element1 , element2 ,...]
const btnsPlus = Array.from(document.querySelectorAll(".plus-btn"));
const unitPrice = Array.from(document.querySelectorAll(".unit-price"));
const btnsLike = Array.from(document.querySelectorAll(".like-btn"));
const btnsRemove = Array.from(document.querySelectorAll(".remove-btn"));
const quantite = Array.from(document.querySelectorAll(".quantite"));

for (let btn of btnsMinus) {
  btn.addEventListener("click", function(event) {
    //event.target = btn

    //only if quantity is > 0
    btn.nextElementSibling.innerText > 0
      ? (btn.nextElementSibling.innerText =
          Number(btn.nextElementSibling.innerText) - 1)
      : (btn.nextElementSibling.innerText = 0);
    // somme=(unitprice*(document.getElementById('quantite').innerHTML))
    updateTotal();
  });
}

for (let btn of btnsPlus) {
  btn.addEventListener("click", function(event) {
    btn.previousElementSibling.innerText =
      Number(btn.previousElementSibling.innerText) + 1;
    updateTotal();
  });
}


// for( let btn of btnsRemove){
//     let i = btnsRemove.indexOf(btn)
//     btn.addEventListener('click',function(e){
//         btn.parentElement.remove()
//         quantite[i].innerText = 0;
//         updateTotal()

// })
// }



for (let i = 0; i < btnsRemove.length; i++) {
  btnsRemove[i].addEventListener("click", function(e) {
    btnsRemove[i].parentElement.remove();
    quantite[i].innerText = 0;
    updateTotal();
  });
}

/// function updateTotal(){
//     somme=0
//     for(let i=0;i<unitPrice.length;i++){
//         somme=unitPrice[i].innerHTML*quantite[i].innerHTML;
//     }
//     return somme;

// }
function updateTotal() {
  let sum = 0;
  for (let i = 0; i < unitPrice.length; i++) {
    sum += unitPrice[i].innerText * quantite[i].innerText;
    console.log(i);
  }

  console.log(sum);
  somme.innerText = sum;
}

for(let btnlike of btnsLike) {
    btnlike.addEventListener("click",function(){
        
        btnlike.style.color!=="red"?btnlike.style.color="red":btnlike.style.color="black";
    })
}



// statement ?  true : false
























// for( let likeBtn of btnsLike){
//   likeBtn.addEventListener("click" , (event)=>{
//       console.log(event.target.innerText)
//       likeBtn.style.color !== "red"?likeBtn.style.color = "red": likeBtn.style.color = "black"
//   })
     
// }







//Parcourir un Tableau  ===> via map , for , for of
//array.map((element , i) => element with modification )  // return a new Array
// let tab = ["one" , "two" ,"three" , "four" ]

//for loop
// for(let i = 0 ; i<tab.length ; i++){
//   console.log(tab[i])
// }

//for of
// for(let element of tab ){
//   console.log(element.toUpperCase())
// }

//map return a newwwww array
// const newTab =tab.map(element => element + " map")
// console.log(newTab)
