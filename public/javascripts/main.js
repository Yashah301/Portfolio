function validateForm() {
  var flag=true;
  let nameInput = document.forms["contactForm"]["name"].value;
  let emailInput = document.forms["contactForm"]["email"].value;
  let contactInput = document.forms["contactForm"]["contact"].value;
  let msgInput = document.forms["contactForm"]["msg"].value;

  if (nameInput == "") {
    document.getElementById("nameErrorLabel").style.display = "block";
    flag=false;
  }else{
    document.getElementById("nameErrorLabel").style.display = "none";
  }

  if (emailInput == "") {
    document.getElementById("emailErrorLabel").style.display = "block";
    flag=false;
  }else{
    document.getElementById("emailErrorLabel").style.display = "none";
  }

  if (contactInput == "") {
    document.getElementById("contactErrorLabel").style.display = "block";
    flag=false;
    
  }else{
    document.getElementById("contactErrorLabel").style.display = "none";
  }

  if (msgInput == "") {
    document.getElementById("msgErrorLabel").style.display = "block";
    flag=false;
   
  }else{
    document.getElementById("msgErrorLabel").style.display = "none";
  }

  if(flag){
    alert('Submitted Successfully ✔');
    ResetAll();
  }
  return flag;
}

function ResetAll(){
  document.forms["contactForm"]["name"].value='';
  document.forms["contactForm"]["email"].value='';
  document.forms["contactForm"]["contact"].value='';
  document.forms["contactForm"]["msg"].value='';
}

function HidePreloader(){

  setTimeout(()=>{
    document.getElementById("loader").style.display = "none"
  },200);

}