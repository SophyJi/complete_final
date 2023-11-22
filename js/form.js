function nextStep() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Simple validation
    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    // Assuming validation passes, move to next step
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

document.getElementById("petUploadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var input = document.getElementById("petImage");
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            document.getElementById("imageDisplayArea").appendChild(imgElement);
        };

        reader.readAsDataURL(input.files[0]);
    }

    alert("Thank you for submitting your pet's photo!");
});
