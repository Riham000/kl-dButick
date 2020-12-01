


varor = [
    {
        name: "Nike skor"
        , price: 1000
        , desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla natus in culpa vitae ducimus temporibus, delectus maxime, rerum facere necessitatibus atque explicabo voluptatibus. Unde similique quia ab fugit aperiam!"
    }
    , {
        name: "Fillipa K byxa"
        , price: 1200
        , desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla natus in culpa vitae ducimus temporibus, delectus maxime, rerum facere necessitatibus atque explicabo voluptatibus. Unde similique quia ab fugit aperiam!"
    }
    , {
        name: "Adidas tröja"
        , price: 500
        , desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla natus in culpa vitae ducimus temporibus, delectus maxime, rerum facere necessitatibus atque explicabo voluptatibus. Unde similique quia ab fugit aperiam!"
    }

];


for (let index = 0; index < varor.length; index++) {
    const vara = varor[index];

    const nameElement = document.createElement('h4');
    const pricElement = document.createElement('p');
    const descElement = document.createElement('p');
    const butnElement = document.createElement('button')
    butnElement.addEventListener('click', vroKorgen);


    nameElement.innerText = vara.name;
    pricElement.innerText = vara.price;
    descElement.innerText = vara.desc;
    butnElement.innerHTML = "Lägg i Varukorg"

    document.body.appendChild(nameElement);
    document.body.appendChild(pricElement);
    document.body.appendChild(descElement);
    document.body.appendChild(butnElement);


    function vroKorgen() {
        var h4 = document.createElement("h4");
        h4.innerHTML = vara.name;
        document.body.appendChild(h4);
        prisVaru.push(vara.price);
        document.getElementById("pric").innerHTML = ` The price is: ${prisVaru.reduce(getSum, 0)}`;


    }


}

prisVaru = [];


function getSum(total, num) {
    return total + num;
}







// function getPric() {
//     // document.getElementById("pric").innerHTML = ` The price is: ${prisVaru.reduce(getSum, 0)}`;


//     // document.createElement('h3').innerHTML = prisVaru.reduce(getSum, 0);

//     // document.body.appendChild(pric);

// }























