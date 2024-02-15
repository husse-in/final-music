const product = [
    {
        id: 0,
        image: 'images/fast.jpg',
        title: 'Product One',
        price: 25,
    },
    {  
        id: 1,
        image: 'images/music1.jpg',
        title: 'Product Two',
        price: 35,
    },
    {
        id: 2,
        image: 'images/music2.jpg',
        title: 'Product Two',
        price: 45,
    },
    {
        id: 3,
        image: 'images/music3.jpg',
        title: 'Product Three',
        price: 35,
    },
    {
        id: 4,
        image: 'images/music4.jpg',
        title: 'Product Four',
        price: 15,
    },
    {
        id: 5,
        image: 'images/music5.jpg',
        title: 'Product Five',
        price: 20,
    },
    {
        id: 6,
        image: 'images/music6.jpg',
        title: 'Product Six',
        price: 200,
    },
    {
        id: 7,
        image: 'images/music7.jpg',
        title: 'Product Seven',
        price: 150,
    },
    {
        id: 8,
        image: 'images/music8.jpg',
        title: 'Product Eight',
        price: 100,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
              <img class='images' src=${image}></img>
              </div>
              <div class='bottom'>
              <p>${title}</p>
              <h2>$ ${price}.00</h2>`+
              "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
              `</div>
              </div>`
    )
}).join('')    

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML =cart.lenght;
    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML= "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML= cart.map((items)=>
        {
            var{image, title, price}= items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
