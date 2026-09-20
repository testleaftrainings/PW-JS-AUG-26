import { SwiggyRules, ZomatoRules } from "./01-interface";

//Restuarant is a concrete class 100% implementation 

class Restaurant implements SwiggyRules,ZomatoRules{
    trackingOrder(): void {
       console.log("Tracking Information");
       
    }
    orderPayment(): void {
       console.log("Payment Accepted");
       
    }
    menu(): void {
        console.log("Menu Card Displayed");
        
    }
    acceptOrder(): void {
        console.log("Order to be Accepted");
        
    }
    prepareFood(): void {
     console.log("Preparation of Food to be taken up");
     
    }


}

const restObj = new Restaurant();
restObj.menu();
restObj.acceptOrder();
restObj.prepareFood();
restObj.trackingOrder();
restObj.orderPayment()


/* 

Difference between class, abstract class and interface

1. class keyword will have 100% impmentation which means all the methods will have method body/ method implementation
2. Abstract class : Has both implemented as well as unimplemeted methods.(Partial implementation)
3. Interface: 100% asbtraction/ unimplemented methods

*/