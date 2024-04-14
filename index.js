
function emailSend() {

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
        "<br/> Phone " + phone +
        "<br/> Email " + email;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username@gmail.com",
        Password: "paswword",
        To: 'tomail@gmail.com',
        From: "frommail@gmail.com",
        Subject: "New form Submission from website",
        Body: messageBody
    }).then(
        message => {
            console.log(message)
            if (message == 'OK') {
                swal("Secussful", "You clicked the button!", "success");
            }
            else {
                swal("Error", "You clicked the button!", "error");
            }
        }
    );
}
//login to smtpjs elastic mail
// create new smtp
// add email in the domain verification if elastic mail to verify your email
// add credinitails here
