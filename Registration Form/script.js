
const submitBtn = document.getElementById("submit-btn");
const userNameInput = document.getElementById("user-name");


submitBtn.addEventListener("click", function() {
    
    
    const studentName = userNameInput.value;
    
    
    alert("registration successfull! welcome to the club, " + studentName);
    
});