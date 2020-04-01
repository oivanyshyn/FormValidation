function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$("#submitbtn").click(function(){

  var errorMessage = "";
  var fieldsMissing = "";

  if($("#email").val() == ""){
    fieldsMissing += "<br>Email";
  }

  if($("#phone").val() == ""){
    fieldsMissing += "<br>Phone";
  }

  if($("#password").val() == ""){
    fieldsMissing += "<br>Password";
  }

  if($("#passwordConfirm").val() == ""){
    fieldsMissing += "<br>Confirm Password";
  }

  if(fieldsMissing != ""){
    errorMessage += "<p>The following fields are missing" + fieldsMissing;
  }


  if (isEmail($("#email").val()) == false){
      errorMessage += "<p>Your e-mail address is not valid!</p>";
  }

  if ($.isNumeric($("#phone").val()) == false) {
      errorMessage += "<p>Your phone number should be numeric!</p>";
  }

  if ($("#password").val() != $("#passwordConfirm").val()){
      errorMessage += "<p>Your passwords don`t match!</p>";
  }



  if(errorMessage != ""){
    $("#errorMessage").html(errorMessage);
  }

  else {
    $("#successMessage").show();
    $("#errorMessage").hide();
  }
});
