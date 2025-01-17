// Hardcoded login credentials
const validUsername = "user";
const validPassword = "password";

// Handle the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === validUsername && password === validPassword) {
        // Hide the login form and show the resume form
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('resume-section').style.display = 'block';
    } else {
        // Show error message
        document.getElementById('login-error').style.display = 'block';
    }
});

// Handle the resume form submission
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const social = document.getElementById('social').value;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set up the content of the PDF
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);
    doc.text("Resume", 14, 20);

    doc.setFontSize(12);
    doc.text("Full Name: " + name, 14, 30);
    doc.text("Email: " + email, 14, 40);
    doc.text("Phone: " + phone, 14, 50);
    doc.text("Profession: " + profession, 14, 60);
    doc.text("Work Experience:", 14, 70);
    doc.text(experience, 14, 80);
    doc.text("Education:", 14, 100);
    doc.text(education, 14, 110);
    doc.text("Skills:", 14, 130);
    doc.text(skills, 14, 140);
    doc.text("Social Profiles:", 14, 160);
    doc.text(social, 14, 170);

    // Make the "Download Resume" button visible
    const downloadButton = document.getElementById('download-btn');
    downloadButton.style.display = 'block';

    // Add event listener for downloading the resume
    downloadButton.addEventListener('click', function() {
        doc.save(name + "_Resume.pdf");
    });
});
