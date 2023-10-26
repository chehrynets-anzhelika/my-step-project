'use strict'
let servicesItems = document.querySelectorAll(".our_services_item");
const servicesText = document.querySelectorAll(".our_services");

servicesItems.forEach(onItemClick);

function onItemClick(item) {
  item.addEventListener("click", function () {
    let currentItem = item;
    let textId = currentItem.getAttribute("data-name");

    let currentText = document.getElementById(textId);
    console.log(currentText);

    if (!currentItem.classList.contains("our_services_item_click")) {
      servicesItems.forEach(function (item) {
        item.classList.remove("our_services_item_click");
      });

      servicesText.forEach(function (item) {
        item.classList.remove("active");
      })
      currentItem.classList.add("our_services_item_click");
      currentText.classList.add("active");
    }
  })
}


let liParent = document.querySelector(".amazing_work_foto");

function toggleFunc() {
  let el = this;
  return [
    function(){
      createBlockPhoto(a);
      $('#load_more_btn').hide();
    },
    function(){
      createBlockPhoto(b);
    }
  ][el.tog ^= 1]();
}

$("#load_more_btn").click(toggleFunc);


let loader = $(`<div class="middle">         
<div class="bar bar1"></div>
<div class="bar bar2"></div>
<div class="bar bar3"></div>
<div class="bar bar4"></div>
<div class="bar bar5"></div>
<div class="bar bar6"></div>
<div class="bar bar7"></div>
<div class="bar bar8"></div>
</div>`
  )

let a = 2;
let b ='';

function createBlockPhoto(a) {
 setTimeout(function () {
    for (let i = 1; i <= 12; i++) {

      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("web_des");
      liParent.append(li); 
      li.innerHTML = `<img
      src='./images/graphic_design_2/graphic-design_hidden${a}_${i}.jpg'
      alt="photos"
      width="290"
      height="211"
    />
    <div class="amazing_hidden_block">
      <div class="hidden_text_wrap">
        <div class="circle_wrap">
          <input class="circle_btn circle_left" type="button" />
          <input class="circle_btn circle_right" type="button" />
        </div>
        <p class="hidden_block_logo">creative design</p>
        <p class="hidden_block_category">Web Design</p>
      </div>
    </div>`;
        if(i == 3 || i == 7 || i == 11){
            li.classList.remove("web_des");
            li.classList.add("land_page");
            li.innerHTML = li.innerHTML.replace("Web Design", "Landing Pages");
        }
      else if(i == 2 || i == 6 || i == 10){
        li.classList.remove("web_des");
            li.classList.add("wordpress");
            li.innerHTML = li.innerHTML.replace("Web Design", "Wordpress");
      }
      else if(i == 4 || i == 8 || i == 12){
            li.classList.remove("web_des");
            li.classList.add("graphic_des");
            li.innerHTML = li.innerHTML.replace("Web Design", "Graphic Design");
      }
    }
    let hiddenPhoto = document.querySelectorAll(".amazing_foto_item_hidden");
    hiddenPhoto.forEach((item) => {
      item.classList.remove("amazing_foto_item_hidden");
      item.classList.add("active");
      
    });

    const categories = [...document.querySelector(".amazing_work_list").children];
    const selectedCategory = categories.filter((item) =>
      item.classList.contains("click")
    )[0];
    if (selectedCategory.dataset["title"] !== "all") {
      let allPhoto = document.querySelectorAll(".amazing_foto_item");
      allPhoto.forEach(function (item) {
        item.classList.remove("hide");
        if (!item.classList.contains(selectedCategory.dataset["title"])) {
          item.classList.add("hide");
        }
      });
    }
  }, 2000);

  $('#load_more_btn').before(loader);
      $(loader).show();
      setTimeout(()=>{$(loader).hide()}, 2000);
}

let itemOfWork = document.querySelector(".amazing_work_list"); 

itemOfWork.addEventListener("click", function (event) {

  let allPhoto = document.querySelectorAll(".amazing_foto_item");


  if (event.target.tagName !== 'LI') return false;

  else {
    let filterClass = event.target.dataset['title'];
    allPhoto.forEach(function (item) {
      item.classList.remove('hide');
      if (!item.classList.contains(filterClass) && filterClass !== 'all') {
        item.classList.add('hide');
      };
    });
  }

});

let itemList = document.querySelectorAll(".amazing_work_item"); 

itemList.forEach(function (item) {
  item.addEventListener("click", function () {
    itemList.forEach(element => {
      element.classList.remove("click");
    });
    this.classList.add("click");
  })
})


let slides = document.querySelectorAll(".slide"); 
let mainPhoto = document.querySelector(".client_photo"); 
let photos = document.querySelectorAll(".client_little_photo"); 
let list = document.querySelectorAll(".img_wrap");
const rightArrow = document.querySelector(".right"); 
const leftArrow = document.querySelector(".left");




let counter = 0;
leftArrow.addEventListener("click", function(){
slides.forEach(item => item.classList.remove("curry"));
counter--;
if(counter < 0){
  counter = slides.length-1;
}
slides[counter].classList.add("curry");

changeBigPhoto();

});

rightArrow.addEventListener("click", function(){
  slides.forEach(item => item.classList.remove("curry"));
  counter++;
  if(counter > 3){
    counter = 0;
  }
  slides[counter].classList.add("curry");
  changeBigPhoto();
});
  
 function changeBigPhoto(){
  mainPhoto.getAttribute("src"); 
  let src2 = slides[counter].dataset["src"];
  mainPhoto.setAttribute("src", src2);
   photos.forEach(item => item.classList.remove("preview"));
  list.forEach((item) => {item.classList.remove("preview");
  if(src2 === item.dataset["filter"]){
    item.classList.add("preview");
  }
  });
 } 


photos.forEach(function (item, i) {               
  item.addEventListener("click", function(){
    list.forEach((item) => {item.classList.remove("preview");});                                                   
  photos.forEach((item) => {item.classList.remove("preview"); 
});             
  if (!this.classList.contains("preview")) {
    this.classList.add("preview");
  }



  let src = this.getAttribute("src");
  mainPhoto.setAttribute("src", src);


  let name = this.dataset['name'];
  let visibilityText = document.getElementById(name);

  slides.forEach((item) => {item.classList.remove('curry');
})  
  if (visibilityText) {
    visibilityText.classList.add('curry');
  }
  
  
  counter = i;             
  } );
  
  });


photos.forEach(function (item) {                
  item.addEventListener("click", animPhoto)
});


function animPhoto() {
  let currentImg = document.querySelector(".client_photo");        
  currentImg.classList.remove("animeted_photo");
  setTimeout(() => { currentImg.classList.add("animeted_photo"); }, 100)
}

rightArrow.addEventListener("click", animPhoto);
leftArrow.addEventListener("click", animPhoto);


document.querySelectorAll("a[href='#']").forEach(el => {    
  el.addEventListener("click", (e) => e.preventDefault())
})

$(document).ready(function () {
  let $grid = $(".grid").masonry({
    itemSelector: ".grid_item",
    columnWidth: ".first",
    gutter: 10
  });


  $("#load_more_btn_two").on("click", function () {
    let $items = $(`
  <div class="grid_item"><img src="./images/galery_best_images/image_19.jpg" alt="" width="375" height="263"></div>
  <div class="grid_item"><img src="./images/galery_best_images/image_20.jpg" alt="" width="378" height="390"></div>
  <div class="grid_item"><img src="./images/galery_best_images/image_21.jpg" alt="" width="378" height="245"></div>
  <div class="grid_item"><img src="./images/galery_best_images/image_22.jpg" alt="" width="378" height="285"></div>
  <div class="grid_item">
                           <img class="fourth" src="./images/galery_best_images/image_23.jpg" alt="" width="189" height="92">
                           <img class="fourth" src="./images/galery_best_images/image_24.jpg" alt="" width="189" height="92">
                           <img class="fourth" src="./images/galery_best_images/image_25.jpg" alt="" width="189" height="92">
                           <img class="fourth" src="./images/galery_best_images/image_26.jpg" alt="" width="189" height="92">
                           <img class="fourth" src="./images/galery_best_images/image_27.jpg" alt="" width="189" height="92">
                           <img class="fourth" src="./images/galery_best_images/image_28.jpg" alt="" width="189" height="92">
                       </div>
                       <div class="grid_item second_height">
                           <img class="second" src="./images/galery_best_images/image_29.jpg" alt="" width="180" height="185">
                           <img class="second" src="./images/galery_best_images/image_30.jpg" alt="" width="180" height="185">
                       </div>`);

    setTimeout(function () { $grid.append($items).masonry('appended', $items) }, 2000);

    $grid.after(loader);

    $(this).hide();
    $(".gallery_images").css("padding-bottom", "0");
    $(loader).show();
    setTimeout(() => {$(loader).hide()}, 2000);
  });
});
















