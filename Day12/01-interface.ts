

//interface are unimplemneted 100% abstract methods which will set rules to a class that implemnents this interface


export interface SwiggyRules{

    menu():void
    acceptOrder():void
    prepareFood():void

}

export interface ZomatoRules{

    trackingOrder():void
    orderPayment():void

}