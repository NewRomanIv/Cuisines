const arrStatistics = [
  { text: "Recipes Available", data: 23567 },
  { text: "Active Users", data: 431729 },
  { text: "Positive Reviews", data: 892173 },
  { text: "Photos & Videos", data: 56581 },
  { text: "Spices and Herbs", data: 3182 },
];

const arrImages = [
  { quantity: "327", src: "italian" },
  { quantity: "856", src: "indian" },
  { quantity: "27", src: "french" },
  { quantity: "174", src: "steakhouse" },
  { quantity: "731", src: "seafood" },
  { quantity: "237", src: "sushi" },
  { quantity: "529", src: "mexican" },
  { quantity: "145", src: "chinese" },
  { quantity: "327", src: "pizza" },
  { quantity: "1437", src: "american" },
];

let gallery = document.querySelector(".gallery");

//render gallery
const markupUL = arrImages
  .map((item) => {
    let marcupLI = `<li>
                      <div class="gallery__item">                            
                        <a class="gallery__link" href="#">
                          <img class="gallery__img" src="./img/food/${item.src}.png" alt="${item.src}">                                                      
                         </a>
                         <div class="gallery__content">
                            <label class="gallery_quantity">${item.quantity} Recipes</label>
                            <label class="gallery_title">${item.src}</label>
                          </div>
                        </div>
                    </li>`;
    return marcupLI;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", markupUL);

//render calculation
const renderSatatistics = (arr) => {
  return arr
    .map((obj) => {
      return `<li>
                 <label class="counter">${0}</label><br>
                 <label class="counter__title">${obj.text}</label>
              </li>`;
    })
    .join("");
};

let statistic = document.querySelector(".statistic");
statistic.insertAdjacentHTML("afterbegin", renderSatatistics(arrStatistics));

//after render
let counter = document.querySelectorAll(".counter");

arrStatistics.forEach(({ data }, index) => {
  imitationCalculation(data, index);
});

function imitationCalculation(data, index) {
  let concat = Math.floor(data / 30);
  let count = 0;
  let lable = counter[index];

  let timer = setInterval(() => {
    count += concat;
    if (count >= data) {
      clearInterval(timer);
      lable.innerText = data.toLocaleString("en-EN");
      return;
    }

    lable.innerText = count;
  }, 100);
}
