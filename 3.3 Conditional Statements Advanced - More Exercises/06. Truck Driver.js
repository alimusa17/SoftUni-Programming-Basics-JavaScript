function truckDriver(input){

    let season = input[0];
    let kilometersInMonth = Number(input[1]);

    let price =0;

    if (season === 'Summer') {

        if (kilometersInMonth <= 5000) {

            price = 0.9;
            
        } 
        else if (kilometersInMonth > 5000 && kilometersInMonth <= 10000) {

            price = 1.1;
            
        } 
        else if (kilometersInMonth > 10000 && kilometersInMonth <= 20000) {

            price = 1.45;
            
        }      
    }
    else if (season === 'Winter') {

        if (kilometersInMonth <= 5000) {

            price = 1.05;
            
        } 
        else if (kilometersInMonth > 5000 && kilometersInMonth <= 10000) {

            price = 1.25;
            
        } 
        else if (kilometersInMonth > 10000 && kilometersInMonth <= 20000) {

            price = 1.45;
            
        }             
    }
    else {

        if (kilometersInMonth <= 5000) {

            price = 0.75;
            
        } 
        else if (kilometersInMonth > 5000 && kilometersInMonth <= 10000) {

            price = 0.95;
            
        } 
        else if (kilometersInMonth > 10000 && kilometersInMonth <= 20000) {

            price = 1.45;
            
        }    
    }

    let totalPrice = kilometersInMonth * price * 4;
    let salary = totalPrice * 0.9;

    console.log(`${salary.toFixed(2)}`);
}

truckDriver(["Autumn", "8600"])