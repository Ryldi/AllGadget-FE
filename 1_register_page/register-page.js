const createAccountButton = document.getElementById("submit-id")

createAccountButton.addEventListener("click", (e)=>{
    e.preventDefault()

    const name = document.getElementById("name-input").value

    if(name.length < 5){
        alert("Username must be at least 5 characters long!")
        return;
    }else if(name.length >=30){
        alert("Username must less than 30 characters long!")
        return;
    }

    const email = document.getElementById("mail-input").value

    if(!(email.endsWith("@gmail.com") || email.endsWith("@email.com") ||
        email.endsWith("@gmail.co") || email.endsWith("@email.co") || 
        email.endsWith("@yahoo.com") || email.endsWith("@yahoo.co"))){
        alert("Email input format is wrong!")
        return;
    }

    const phone = document.getElementById("phone-input").value
    let hasChar = false;

    for(let i = 0; i<phone.length; i++){
        if(isNaN(phone[i])){
            hasChar = true;
        }

        if(hasChar) break;
    }
    if(hasChar || (phone.length<10 || phone.length > 15)){
        alert("Phone number cannot contain letter, must at least 10 digit and cannot more than 15 digit!")
        return;
    }

    const pass = document.getElementById("pass-input").value
    let hasLetter, hasNumber = false;

    for(let i = 0; i<pass.length; i++){
        if(isNaN(pass[i])){
            hasLetter = true;
        }else hasNumber = true;

        if(hasNumber && hasLetter) break;
    }

    if(!hasNumber || !hasLetter){
        alert("Password must contain atleast 1 number and 1 letter!")
        return;
    }

    const male = document.getElementById("male-id")
    const female = document.getElementById("female-id")
    
    if(!female.checked && !male.checked){
        alert("Choose a gender!");
        return;
    }

    const agreement = document.getElementById("agreement")

    if(!agreement.checked){
        alert("You must agree to our terms of use and privacy policy")
        return;
    }

    window.location.href = '../2_home_page/home-page.html'
});