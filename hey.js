function calculateBmi( weight,height){
let bmi = weight / ( height * height);
return bmi;

}
function interpretbmi (bmi) 
if(bmi<18.5) {  

return "underweight";

}else if (bmi<25){   

  return "normal";

}else if(bmi<30) {

    return "overweight";
 } else { 

    return "obesse";
 }


let weight = 70;
let height = 1.75;

let bmi = calculateBmi( weight,height);
console.log("bmi:", bmi );
console.log( " interpretation", inerpretBmi(bmi))










