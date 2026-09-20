

export abstract class RestaurantActions{

takeAway(){

console.log("Takeaway accepted");

};
acceptOrder(){

    console.log("Accepting orders");
    

}
delivery(){

    console.log("Order delivery");
    
}
dineIn(){

    console.log("Dine In Available");
    
}

abstract menu() : void


}