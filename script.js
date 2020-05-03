function BMI(){
    let feet = document.querySelector(".feet").value;
    let inch = document.querySelector(".inch").value;
    //merge both values in one
    let meters = feet + "." + inch;
    // convert the feet to meters to get height
    let height = meters/ 3.2808; //3.2808 feet is 1meter 
    // Get weight
    let weight = document.querySelector(".weight").value;
     // weight is divided by height(in power of 2)
     let BMI = weight/ Math.pow(height, 2); 
     //then the pop up note condition in p tag
     if(BMI < 18.5){
         document.querySelector("p").innerHTML = 
         "Your Body Mass Index (BMI) is " +
         (Math.round(BMI*100) / 100).toFixed(2) +"<br>"+
         "This is considered Under Weight.";
     } else if((BMI >= 18.5) && (BMI <=24.9)){
        document.querySelector("p").innerHTML = 
        "Your Body Mass Index (BMI) is " + 
        (Math.round(BMI*100) / 100).toFixed(2) +"<br>"+
        "This is considered Normal.";
     }
      else if((BMI >= 25) && (BMI <=29.9)){
        document.querySelector("p").innerHTML = 
        "Your Body Mass Index (BMI) is " + 
        (Math.round(BMI*100) / 100).toFixed(2) +"<br>"+
        "This is considered Over Weight.";
     } else if(BMI > 30){
          document.querySelector("p").innerHTML = 
        "Your Body Mass Index (BMI) is " + 
        (Math.round(BMI*100) /100).toFixed(2) +"<br>"+
        "This is considered Obese.";
     }
}
//button click
document.querySelector(".btn").addEventListener("click", BMI);