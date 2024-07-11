let examGrade = prompt ("Puan")
let textInfo;

if (examGrade >=0 && examGrade <=100){
    if (examGrade >= 90) {
        textInfo = "AA"
     } 
     
     else if (examGrade >= 85) {
         textInfo = "BA"
      } 
      
      else if (examGrade >= 75) {
         textInfo = "BB"
      } 
     
      else if (examGrade >= 65) {
         textInfo = "CB"
      } 
     
      else if (examGrade >= 60) {
         textInfo = "CC"
      } 
     
      else if (examGrade <= 50) {
         textInfo = "FF"
      } 
    
}
info = `${textInfo} -> ${examGrade}`
console.log(info)