//code goes here for the fuctionality
//javascript code for web
const menu=document.querySelector('#mobile-menu');
const menulinks=document.querySelector('.menu-clock');

menu.addEventListener('click' ,function(){
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
});


let currentIndex = 0;
const intervalTime = 3500; // Change this value to adjust the interval time in milliseconds

function showNextSlide() {
  const slides = document.querySelector(".nav-contents");
  const totalSlides = document.querySelectorAll(".image-slider").length;

  currentIndex = (currentIndex + 1) % totalSlides;

  const translateValue = -currentIndex * 100 + "%";
  slides.style.transform = "translateX(" + translateValue + ")";
}

setInterval(showNextSlide, intervalTime);

//submit form for the feedback
function submitFeedback() {
  // Get form data
  const feedback = document.getElementById("feedback").value;

  // Prepare form data for submission
  const formData = new FormData();
  formData.append("feedback", feedback);

  // Make an AJAX request using the Fetch API
  fetch("127.0.0.1:5501/send", {
    method: "POST", // You can change this to "GET" if your server supports it
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Handle successful response
        console.log("Feedback submitted successfully!");
        // You can add further actions here, such as showing a success message to the user
      } else {
        // Handle error response
        console.error("Error submitting feedback");
        // You can add further actions here, such as showing an error message to the user
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

