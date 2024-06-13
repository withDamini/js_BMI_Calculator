
const form=document.querySelector('form');
//this usecase will give you empty value
//to restrict form to submit on server..
form.addEventListener('submit',function(e){
    e.preventDefault()   //not to submit
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const results= document.querySelector('#results');

   if(height===''|| height<=0|| isNaN(height)){
      results.innerHTML=`please give a valid height ${height}`;
   }
  
    else if(weight===''|| weight<=0|| isNaN(weight)){
    results.innerHTML=`please give a valid weight ${weight}`;
   }
   else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
   //show the result..
//    results.innerHTML = `<span>${bmi}</span>`

   //assignment...
   if(bmi<18.6){
    results.innerHTML = `<span> You are under Weighted : ${bmi}</span>`
   }
   else if(bmi>=18.6 && bmi<=24.9){
    results.innerHTML = `<span> You are Normal Weighted : ${bmi}</span>`
   }else {
    results.innerHTML = `<span> You are Over Weighted : ${bmi}</span>`
   }




   }
})