const cards = document.getElementsByClassName('product-card')
const totalprix = document.getElementById('prix');
const car = document.getElementById('car');
class Basket {
    constructor(name, prix) {

        this.name = name;
        this.prix = prix;

    }



}
const tn = new Basket('Nike TN Plus Voltage Purple ', 250,)


const airmax = new Basket('Nike Air Max 97 Black ', 180)

const pumaca = new Basket('Puma Ca Pro Classic', 120)

const pumars = new Basket('PUMA RS models step out  ', 150)

const adidas = new Basket('adidas Chaussure Superstar', 110)

const adidastrubal = new Basket('adidas Tubular 93', 100)


document.getElementById('tn').innerHTML = tn.name
document.getElementById('tnprix').innerText = tn.prix

document.getElementById('airmax').innerHTML = airmax.name
document.getElementById('airmaxprix').innerText = airmax.prix

document.getElementById('pumaca').innerHTML = pumaca.name
document.getElementById('pumacaprix').innerText = pumaca.prix

document.getElementById('rs').innerHTML = pumars.name
document.getElementById('rsprix').innerText = pumars.prix

document.getElementById('adidasc').innerHTML = adidas.name
document.getElementById('adidascprix').innerText = adidas.prix

document.getElementById('adidast').innerHTML = adidastrubal.name
document.getElementById('adidastprix').innerText = adidastrubal.prix


for (const card of cards) {

    const ajouter = card.querySelector('.ajouter');
    const supprimer = card.querySelector('.supprimer');
    const quantity = card.querySelector('.quantity');
    const prix = card.querySelector('.product-price');


    supprimer.onclick = () => {
        if (quantity.innerText > 0) {
            quantity.innerText--
            car.innerText--
            totalprix.innerText = parseInt(totalprix.innerText) - parseInt(prix.innerText)
          
        }
        
    }

    ajouter.onclick = () => {

        quantity.innerText++
        car.innerText++

        totalprix.innerText = parseInt(totalprix.innerText) + parseInt(prix.innerText)
 



    }
} 










  





