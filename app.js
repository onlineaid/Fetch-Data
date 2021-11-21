document.getElementById('btn1').addEventListener('click', loadData);
let output = document.getElementById('output');

function loadData () {
    fetch('index.txt')
    .then(function(response) {
        // console.log(response)
        return response.text();
    })
    .then(function(data) {
        // console.log(data);
        output.innerHTML = `<h1>${data}</h1>`
    })
    .catch(function(error){
        console.log(error);
    })
}


// fatch json data 
document.getElementById('btn2').addEventListener('click', loadJsonData);
let row = document.getElementById('row');

function loadJsonData() {
    fetch('info.json')
    .then((res)=> {
        // console.log(res)
        return res.json();
    })
    .then((products)=> {
        let html = '';
        products.forEach(product => {
            html += `
                <div class="col-md-3 my-5 col-control">
                    <img class="img-control" src="${product.image}">
                    <p>${product.title}</p>
                    <p><strong>$${product.price}</strong></p>
                    <button class="btn btn-primary mb-3">Add to Cart</button>
                </div>
            `
        })
        row.innerHTML = html;
    })
    .catch(err => {
        console.log(err)
    })
}