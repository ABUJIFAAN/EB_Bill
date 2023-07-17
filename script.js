function EB_checker(){
    let units = Number(document.getElementById("input").value)
    let bill = 0
    
    // else if ladder
    // For First 50 units Rs 0.75/units
    // For First 100 units Rs 1.00/units
    // For First 150 units Rs 1.30/units
    // For First 250 units Rs 1.50/units
    if(units<=50){
        bill = units*0.75
    }
    else if(units <=100){
        bill = 50*0.75 + (units-50)*1
    }
    else if(units <=150){
        bill = 50*0.75 + 100*1 +(units-100)*1.30
    }
    else if(units>250)
        bill = 50*0.75 + 100*1 + 150*1.30 +(units-150)*1.5

    let result = document.querySelector("#result")
    result.innerHTML = "you bill amount "+ bill + "/-"
}