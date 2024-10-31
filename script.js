window.onload = function() {
    if (localStorage.getItem("hasAccount")) {
        showLogin();  // Show login form if user has an account
    } else {
        showSignup();  // Show signup form if user does not have an account
    }
};

function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate email and password
    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email.";
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
    } else {
        // Simulating a successful login check (replace with actual authentication logic)
        const hasAccount = localStorage.getItem("hasAccount");
        if (hasAccount) {
            alert("Login successful");
            // Optionally redirect to a dashboard
            // window.location.href = "dashboard.html"; // Redirect to a different page
        } else {
            alert("Login failed. You don't have an account. Please sign up.");
            showSignup();  // Show signup form if login fails
        }
    }
}

function handleSignup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const emailError = document.getElementById("signupEmailError");
    const passwordError = document.getElementById("signupPasswordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email.";
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
    } else {
        localStorage.setItem("hasAccount", "true");  // Set account status in local storage
        alert("Signup successful! Redirecting to login...");
        showLogin();  // Redirect to login after successful signup
    }
}
