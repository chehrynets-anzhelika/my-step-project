'use strict'

//вкладка OurServices табы
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

// далее вкладка Our Amazing Work - создание новых элементов и фильтр

let loadMore = document.getElementById("load_more_btn");
let liParent = document.querySelector(".amazing_work_foto");

function toggleFunc() {
  let el = this;
  return [
    createFirstBlockPhoto,
    createSecondBlockPhoto
  ][el.tog ^= 1]();
}

$("#load_more_btn").click(toggleFunc);


// создаю блок с элементами (имитация загрузки)
function createFirstBlockPhoto() {
  setTimeout(function () {
    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("web_des");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
            src='./images/graphic_design/graphic-design_hidden1_${i}.jpg'
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
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("graphic_des");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
            src='./images/graphic_design/graphic-design_hidden2_${i}.jpg'
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
              <p class="hidden_block_category">Graphic Design</p>
            </div>
          </div>`;
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("land_page");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
                src='./images/graphic_design/graphic-design_hidden3_${i}.jpg'
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
                  <p class="hidden_block_category">Landing pages</p>
                </div>
              </div>`;
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("wordpress");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
            src='./images/graphic_design/graphic-design_hidden4_${i}.jpg'
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
              <p class="hidden_block_category">Wordpress</p>
            </div>
          </div>`;
    }

    let hiddenPhoto = document.querySelectorAll(".amazing_foto_item_hidden");
    hiddenPhoto.forEach((item) => {
      item.classList.remove("amazing_foto_item_hidden");
      item.classList.add("active");
    });

    // знаходжу всі li у верхньому списку категорій
    const categories = [...document.querySelector(".amazing_work_list").children];
    // знаходжу обрану категорію по наявності класу 'click' за допомогою методу filter
    const selectedCategory = categories.filter((item) =>
      item.classList.contains("click")
    )[0];
    // якщо дата-атрибут обраної категорії НЕ дорівнює 'all' - починаємо фільтрацію фото
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

  let loader2 = $(`<div class="middle">
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
  $("#load_more_btn").hide();
  $(".our_amazing_work").append(loader2);
  setTimeout(() => { loader2.hide() }, 2000);
}



function createSecondBlockPhoto() {
  setTimeout(function () {
    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("web_des");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
              src='./images/graphic_design/graphic-design_hidden5_${i}.jpg'
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
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("graphic_des");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
              src='./images/graphic_design/graphic-design_hidden6_${i}.jpg'
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
                <p class="hidden_block_category">Graphic Design</p>
              </div>
            </div>`;
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("land_page");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
                  src='./images/graphic_design/graphic-design_hidden7_${i}.jpg'
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
                    <p class="hidden_block_category">Landing pages</p>
                  </div>
                </div>`;
    }

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.className = "amazing_foto_item";
      li.classList.add("amazing_foto_item_hidden");
      li.classList.add("wordpress");
      liParent.append(li); // создаю ли
      li.innerHTML = `<img
              src='./images/graphic_design/graphic-design_hidden8_${i}.jpg'
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
                <p class="hidden_block_category">Wordpress</p>
              </div>
            </div>`;
    }

    let hiddenPhoto = document.querySelectorAll(".amazing_foto_item_hidden");
    hiddenPhoto.forEach((item) => {
      item.classList.remove("amazing_foto_item_hidden");
      item.classList.add("active");
    });

    // знаходжу всі li у верхньому списку категорій
    const categories = [...document.querySelector(".amazing_work_list").children];
    // знаходжу обрану категорію по наявності класу 'click' за допомогою методу filter
    const selectedCategory = categories.filter((item) =>
      item.classList.contains("click")
    )[0];
    // якщо дата-атрибут обраної категорії НЕ дорівнює 'all' - починаємо фільтрацію фото
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

  //имитация загрузки на кнопке
  let loader1 = $(`<div class="middle">
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
  $("#load_more_btn").hide();
  $(".our_amazing_work").append(loader1);
  setTimeout(() => { loader1.hide() }, 2000);
  setTimeout(() => { $("#load_more_btn").show() }, 2000);
}


// фильтр из фоток

let itemOfWork = document.querySelector(".amazing_work_list"); // ul родитель, на который повешу делегирование

itemOfWork.addEventListener("click", function (event) {

  let allPhoto = document.querySelectorAll(".amazing_foto_item"); // блк из фоток


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




// делаю фокус при нажатии на каждый пункт меню
let itemList = document.querySelectorAll(".amazing_work_item"); // элементы ли в секции

itemList.forEach(function (item) {
  item.addEventListener("click", function () {
    itemList.forEach(element => {
      element.classList.remove("click");
    });
    this.classList.add("click");
  })
})



// дальше идет карусель 

let slides = document.querySelectorAll(".slide");   // блок с текстом и фио
let mainPhoto = document.querySelector(".client_photo"); // главное фото в центре
let photos = document.querySelectorAll(".client_little_photo"); // блок с маленькими фото
let list = document.querySelectorAll(".img_wrap");
const rightArrow = document.querySelector(".right"); // правая стрелка
const leftArrow = document.querySelector(".left"); // левая стрелка
let arr = Array.from(slides);
let arr2 = Array.from(photos);
let arr3 = Array.from(list);

rightArrow.addEventListener("click", function () {                                             // клик на правую стрелку 

  let elem = arr.find(elem => elem.classList.contains("curry"));
  let last = slides[slides.length - 1];  // последнее фото
  let first = slides[0]; // первое фото 
  if (elem !== last) {
    elem.nextElementSibling.classList.add("curry");
    elem.classList.remove("curry");

    let src2 = elem.nextElementSibling.dataset["src"];// буду вставлять сюда фотку
    mainPhoto.setAttribute("src", src2);

    arr2.forEach((item) => item.classList.remove("preview"));   // делаю приподнятие фотки при работе стрелки
    arr3.forEach((item) => {
      let filt = item.dataset["filter"];
      if (src2 === filt) {
        item.classList.add("preview");
      }
      else {
        item.classList.remove("preview");
      }
    });
  }
  if (elem === last) {
    first.classList.add("curry");
    last.classList.remove("curry");

    let src = mainPhoto.getAttribute("src");
    let src2 = first.dataset["src"];
    src = mainPhoto.setAttribute("src", src2);
    arr2.forEach((item) => item.classList.remove("preview"));   // делаю приподнятие фотки при работе стрелки
    arr3.forEach((item) => {
      let filt = item.dataset["filter"];
      if (src2 === filt) {
        item.classList.add("preview");
      }
      else {
        item.classList.remove("preview");
      }
    });
  }
});

leftArrow.addEventListener("click", function () {                                  // клик на левую стрелку 
  let elem = arr.find(elem => elem.classList.contains("curry"));
  let last = slides[0];
  let first = slides[slides.length - 1];
  if (elem !== last) {
    elem.previousElementSibling.classList.add("curry");
    elem.classList.remove("curry");
    let src = mainPhoto.getAttribute("src"); // буду вставлять сюда фотку
    let src2 = elem.previousElementSibling.dataset["src"];
    src = mainPhoto.setAttribute("src", src2);

    arr2.forEach((item) => item.classList.remove("preview"));   // делаю приподнятие фотки при работе стрелки
    arr3.forEach((item) => {
      let filt = item.dataset["filter"];
      if (src2 === filt) {
        item.classList.add("preview");
      }
      else {
        item.classList.remove("preview");
      }
    });
  }
  if (elem === last) {
    first.classList.add("curry");
    last.classList.remove("curry");
    let src = mainPhoto.getAttribute("src");
    let src2 = first.dataset["src"];
    src = mainPhoto.setAttribute("src", src2);
    arr2.forEach((item) => item.classList.remove("preview"));   // делаю приподнятие фотки при работе стрелки
    arr3.forEach((item) => {
      let filt = item.dataset["filter"];
      if (src2 === filt) {
        item.classList.add("preview");
      }
      else {
        item.classList.remove("preview");
      }
    });
  }
})


photos.forEach(function (item) {                //событие при клике на фото 
  item.addEventListener("click", showSlide);
});


function showSlide(event) {
  event.preventDefault();
  list.forEach((item) => item.classList.remove("preview"));                                                   // оживляю слайдер
  photos.forEach((item) => item.classList.remove("preview"));             // добавила приподнятие каждой нажатой фотке
  if (!this.classList.contains("preview")) {
    this.classList.add("preview");
  }

  let src = this.getAttribute("src");   // меняю большое фото при нажатии.
  mainPhoto.setAttribute("src", src);


  let name = this.dataset['name'];
  let visibilityText = document.getElementById(name);

  slides.forEach((item) => item.classList.remove('curry'))  // добавляю текстовую информацию при клике
  if (visibilityText) {
    visibilityText.classList.add('curry');
  }

}


photos.forEach(function (item) {                // анимация при клике на маленькое фото 
  item.addEventListener("click", animPhoto)
});


function animPhoto() {
  let currentImg = document.querySelector(".client_photo");                 // функция для анимации главного фото
  currentImg.classList.remove("animeted_photo");
  setTimeout(() => { currentImg.classList.add("animeted_photo"); }, 100)
}

rightArrow.addEventListener("click", animPhoto);
leftArrow.addEventListener("click", animPhoto);


document.querySelectorAll("a[href='#']").forEach(el => {    // убрала дефолтное поведение ссылок 
  el.addEventListener("click", (e) => e.preventDefault())
})

// секция Gallery of Best Images


// создание сетки масонри
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

    $grid.after(loader);

    $(this).hide();
    $(".gallery_images").css("padding-bottom", "0");
    setTimeout(function () { loader.hide() }, 2000);
  });
});
















