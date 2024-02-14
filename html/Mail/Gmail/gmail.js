function emailSend(){

    var userName = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value

    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "eandoh1998@gmail.com",
        Password : "A07F4F5EB5206D1052112777DCFDF46ABA03",
        To : 'eandoh1998@gmail.com ',
        From : "eandoh1998@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : messageBody
    }).then(
      message => {
         if(message == 'OK'){
          swal("Secussful", "You clicked the buttom!", "success");

        }
        else{
          swal("Error", "You clicked the button!", "error");
        }
      }
    );
}