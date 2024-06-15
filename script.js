
let nums=document.querySelectorAll(".whyUs .box");
let section=document.getElementById("whyUs");
let counter=document.getElementById("Btnn");
let started=false;

let bookcart=document.querySelector("bookcart");
let conformContainer=document.querySelector("conformContainer");
let guestnum=document.getElementById("guestNumber").value;
let roomnums=document.querySelectorAll('.roomType')[0];
let closbox=document.getElementById("closbox");
let cancelbookingbox=document.getElementById("cancelbookingbox");


// booking form search-----------------------booking----------------------

// window.localStorage.setItem('checkinday',JSON.stringify(checkIn.value));
// window.localStorage.setItem('checkoutday',JSON.stringify(checkOut.value));



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


});



});


let leftslideBtn=document.getElementById('leftslideBtn');

let rightslideBtn=document.getElementById('rightslideBtn');

let hotelCards=Array.from(document.querySelectorAll('.hotelContainer .box'));

let currentCard=1;
let cardCount=hotelCards.length;

function moving (){
hotelCards.forEach((box)=>{

box.classList.add('active');


});
for (let i=1 ;i<cardCount;i++){
hotelCards[currentCard-1].classList.remove("active");

}




}










// testimonial section

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        margin:10,
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



// when users clicks book btn

    $(document).ready(function () { 
      
        $('.addBnt').click(function(){
            $('.bookingcard').css('display','flex')

        })

        $('.closebtn').click(function(){
            $('.bookingcard').css('display','none')


        })



    }); 


    // datapicker form 

let  newdate=document.getElementById('newdate');
let  checkout_dat=document.getElementById('checkout_dat');
let closeform=document.getElementById('closeform');
let room_card=document.querySelector('.room_card');
let Book_Btn=document.getElementById("Book_Btn");







// roomNums.innerHTML=room_card.value;
$(document).ready(function () {
    
    $('#cart').click(function(){
        $('.my_booking').css('display','flex');

    })
    $(closeform).click(function(){
        $('.my_booking').css('display','none');

    })


$(function () {

$("#my_date_picker").datepicker({

    onSelect: function() { 
        let dateObject = $(this).datepicker('getDate'); 
        let newdtaformat=($.datepicker.formatDate("yy-mm-dd", dateObject));
                newdate.innerHTML=newdtaformat;

    }
  })

});

$("#date_picker_chekOut").datepicker({

onSelect: function() { 
    let checkoutdata = $(this).datepicker('getDate'); 
    let checkoutdataformat=($.datepicker.formatDate("yy-mm-dd", checkoutdata));
            checkout_date.innerHTML=checkoutdataformat;

}
})

});



// let BookBtn=document.getElementById('BookBtn');

let my_date_picker=document.getElementById('my_date_picker');

let date_picker_chekOut=document.getElementById('date_picker_chekOut');


$('#BookBtn').click(function(e){
    if (my_date_picker.value==='' || date_picker_chekOut.value===''){
        alert('Enter chekin date and chekOut data !')
        e.preventDefault();

    }

    my_date_picker.value='';
    date_picker_chekOut.value='';
    // alert('rr');


})





  $('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });



  $(document).ready(function() {
    $('.slider').slick({
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows:true,
  slidesToShow: 4,
  centerPadding: '40px',


  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]














//   fade: true,


  


    
    
    });
  });


// inslizing AOS Animation
    AOS.init();








