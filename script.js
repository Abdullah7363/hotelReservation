
let nums=document.querySelectorAll(".whyUs .box");
let section=document.getElementById("whyUs");
let counter=document.getElementById("Btnn");
let started=false;
let bookBtn=document.getElementById("BookBtn");
let roomType=document.querySelector("[name ='checout']");
let pass=document.getElementById("pass");
let checkOut=document.getElementById("check-out");
let guestNumber=document.getElementById("guestNumber");
let bookcart=document.querySelector("bookcart");

let conformContainer=document.querySelector("conformContainer");


let guestnum=document.getElementById("guestNumber").value;
let roomnums=document.querySelectorAll('.roomType')[0];

let closbox=document.getElementById("closbox");

let cancelbookingbox=document.getElementById("cancelbookingbox");
let yesBtn=document.getElementById("yes");
let noBtn=document.getElementById("no");







// booking form search-----------------------booking----------------------
let checkIn=document.getElementById("check-In");
let checOut=document.getElementById("check-out");
let btnpop=document.getElementById("BookBtn");
let cardcon=document.getElementById("cardcon");
let loadami=document.querySelector('.loadingnimation');
let checkform=document.querySelector('.check-form');
let  cancel=document.getElementById("cancel");
let  coform=document.getElementById("coform");




btnpop.onclick=function(){
    loadami.style.display='flex';
    checkform.style.display='flex';
    window.localStorage.setItem('checkinday',JSON.stringify(checkIn.value));
    window.localStorage.setItem('checkoutday',JSON.stringify(checkOut.value));

    checOut.value='';
    checkIn.value='';

}
cancel.onclick=function (){
    checkform.style.display='none';
    



}

 








// add items to local storge--------------------add------------------------


  // get items to from  local storge--------------------get------------------------









        // show numbers when scrolling

        window.onscroll=function (){
            // check if the scrolled reatched to the main section selected
            if (window.scrollY >= section.offsetTop){
                if (!started){
                    nums.forEach((num) => {
                        startcounter(num);
                    
                    });
                    
                }
                started=true;
        
             
                
        
            }
        
        
        }
        
        function startcounter(ele){
            let gaol=ele.dataset.goal;
            let count=setInterval(()=>{
                ele.textContent++;
                if (ele.textContent ==gaol ){
                    clearInterval(count);
                }
        
        
            } ,2000/gaol);
        
        
        }
        
















// ---------------------------end------------------------------------







// sliderimagestest----------------------------start--------------

// var sliderImages=Array.from(document.querySelectorAll('.slider-Container img'));
// var slidernumber=document.getElementById("slider-number");
// var previous=document.getElementById("previous");
// var next=document.getElementById('next');
// var indicators=document.querySelector('.indicators');
// var newcreatedUL=document.getElementById('#buletsId');

// assen avalue to new created bulets
// var pagenationliitems=Array.from(document.querySelectorAll('#buletsId li'));

// loop in pagenationbullet 

// for (let i=0 ; i<pagenationliitems.length; i++){
//     pagenationliitems[i].onclick=function (){
//         currentSlide= parseInt( this.getAttribute('data-index'));

//     }
//     checker();
    
// }

// var imagecount=sliderImages.length;
// var currentSlide=1;
// var pagenationbulets=document.createElement('ul');
// pagenationbulets.setAttribute('id','buletsId');

// for (var i=1 ; i<= imagecount ; i++){
//   var buletsItems=document.createElement('li');
// buletsItems.setAttribute('data-index',i);
// buletsItems.appendChild(document.createTextNode(i));
// pagenationbulets.appendChild(buletsItems);

// }

// indicators.appendChild(pagenationbulets);

// next.onclick=nextSlide;

// previous.onclick=previousSlide;
//  checker();
// function checker(){
//     removeActiveformimagesAndBuletsList();
//     sliderImages[currentSlide-1].classList.add('active');
//     pagenationbulets.children[currentSlide -1].classList.add('active');


// }

// function removeActiveformimagesAndBuletsList(){
//     sliderImages.forEach(function (image){
//         image.classList.remove('active');


//     });

//     pagenationliitems.forEach(function (bulet){
//         bulet.classList.remove('active');
//     });
    

  









// galary box images---------------------------start-------------------------


let tablinks=document.querySelectorAll('.tablinks li');
let tablarray=Array.from(tablinks);


let content=document.querySelectorAll('.content > div');
let arrcontent=Array.from(content);


tablarray.forEach((tab) =>{
    tab.addEventListener('click',(e)=>{

        tablarray.forEach(function(el){
            el.classList.remove("active");

        });
        e.currentTarget.classList.add('active');

        arrcontent.forEach((con) =>{
            con.classList.remove('active');
        });
        document.querySelector( e.currentTarget.dataset.show).classList.add('active');

        // e.currentTarget.classList.add('active');
        // console.log(       
        //     );

        });
        


    });
    


// galary box images---------------------------end-------------------------










// what customers are saying ---------------------------saying-----------------

let customersContainer= Array.from(document.querySelectorAll('.customersContainer >div'));
let lefttslidbtn=document.getElementById('lefttslidbtn');
let currentactive=1;
let countdiv=customersContainer.length;

lefttslidbtn.onclick=function(){
    currentactive++;
    slidtestimonis();
}
rightslidbtn.onclick=function(){
    currentactive--;
    slidtestimonis();
    console.log("down");    




}

function slidtestimonis(){
    customersContainer.forEach((div)=>{
        div.classList.remove('active');
          });

          
    for (let i=1 ;i<countdiv;i++){
        customersContainer[currentactive-1].classList.add("active");
        console.log(customersContainer);

    }

}






// what customers are saying ---------------------------saying-----------------




// hotel rooms cards-----------------------------------------


let leftslideBtn=document.getElementById('leftslideBtn');

let rightslideBtn=document.getElementById('rightslideBtn');

let hotelCards=Array.from(document.querySelectorAll('.hotelContainer .box'));

let currentCard=1;
let cardCount=hotelCards.length;





// leftslideBtn.onclick=function(){
//     currentCard+=1;
//     moving();    
// }
// rightslideBtn.onclick=function(){
//     currentCard--;
//     moving();



// }


function moving (){
    hotelCards.forEach((box)=>{

            box.classList.add('active');


    });
    for (let i=1 ;i<cardCount;i++){
        hotelCards[currentCard-1].classList.remove("active");

    }




}









// loading animation

// Bookbtn.onclick=function(){
    // loadingnimation.classList.add('active');

    // setInterval(()=>{
        
    //     console.log('nnnnnn');


    // },3000)


// }






// rooms container-----------------------------------



















let moreboxes=document.getElementById('moreboxes');

let morebox=document.getElementById('morebox');


morebox.onclick=function(){
    moreboxes.style.opacity=1;
    morebox.style.display='none';


}





// animation hart effect



let hart=document.getElementById('hart');
let moreBtn=document.getElementById('moreBtn');

let numberinc=document.getElementById('numberinc');
let defaultnum=1;
console.log(numberinc);

hart.onclick=changenumber;
function changenumber(){
    defaultnum++;
    numberinc.innerHTML=defaultnum;

}


















// popout images -----------------------------------------pop------------------



let popoutimageslist= Array.from(document.querySelectorAll('.popimages img '));
let left=document.getElementById('ll');
let right=document.getElementById('rr');

let hotelRooms=document.querySelector('.hotelRooms');
let current=1;
let allimage=popoutimageslist.length;
let morebtn=document.querySelectorAll('.moreBtn');
let arrowslides=document.querySelector('.arrowslides');
 
let firbox=document.getElementById('firstbox');
console.log(hotelRooms);


morebtn.forEach((btn)=> {
    btn.onclick=function(){
        chaimage(); 
    }


});

firbox.onclick=function(){
    arrowslides.style.display='none';
    popoutimageslist.forEach((div)=>{
        div.classList.remove('active');
          });  
}



right.onclick=function(){
    current++;
    chaimage();
}

left.onclick=function(){
    current--;
    chaimage();
}


function chaimage(){
    arrowslides.style.display='block';
    // hotelRooms.style.opacity=0.8;



    popoutimageslist.forEach((div)=>{
        div.classList.remove('active');
          });  
    for (let i=1 ;i<allimage;i++){
        popoutimageslist[current-1].classList.add("active");
        


    }

}

// popout images -----------------------------------------end------------------













































































