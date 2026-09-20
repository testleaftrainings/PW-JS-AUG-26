import { RestaurantActions } from "./03-abstract";

class Geetham extends RestaurantActions { // real terms login page

menu(){
console.log("vegFood")
}

}


class Thalapakatti extends RestaurantActions{ // real terms homepage

menu(){
console.log("biriyani")
}
}

class Dominos extends RestaurantActions{

menu(){
console.log("italianPizza")
} 
}


const objGeetham = new Geetham()
objGeetham.acceptOrder();
objGeetham.menu()


const objThala = new Thalapakatti()
objThala.menu();

const objDominos = new Dominos()
objDominos.menu();