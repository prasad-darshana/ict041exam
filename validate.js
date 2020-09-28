
		function formvalidation() {

			var email=document.getElementById('email').value;

			var x=/^([0]([789])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/;
			var a=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;


 			if (email.trim()  == " ") {
				alert("Empty value in email");
				return false;

			}else if (a.test(email)) {

			}else {
				alert("email is not true");
				return false;
			}

		}