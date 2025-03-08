const body = document.body;
        const passwordInput = document.getElementById("password");
        const eyeballButton = document.getElementById("eyeball");
    
        eyeballButton.addEventListener("click", function() {
            // Toggle password visibility
            const isPasswordHidden = passwordInput.getAttribute("type") === "password";
            passwordInput.setAttribute("type", isPasswordHidden ? "text" : "password");
            
            // Toggle class for visual effects and visibility
            body.classList.toggle("show-password");
        });