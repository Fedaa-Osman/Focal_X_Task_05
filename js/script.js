fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => show_products(data));

function aToC(titleEl) {
  let allPr = [];
  allPr.push(titleEl);
  console.log(allPr[0]);
}

function show_products(data) {
  let showPr = document.querySelector("#cont");
  data.map((el) => {
    showPr.innerHTML += `
      <div class="card rounded-3 mb-5" style="width: 15rem;">
                    <div class="imgcont"><img class="card-img-top rounded" src="${el.image}"></div>
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <p class="card-title">${el.title}</p>
                        
                      </div>
                        <div class="d-flex flex-row justify-content-between">
                        <div class="d-flex flex-column justify-content-center"><p class="card-text" style="font-size: 12px;">${el.price}</p></div>
                        <button id="butt" type="button" class="btn btn-outline-primary mb-0" onClick="aToC('${el.title}')" >Add To Cart</button>
                        </div>
                      </div>
                </div>
        `;
  });
}
