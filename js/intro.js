var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
     crsr.style.left = dets.x+"px"
     crsr.style.top =  dets.y+"px"
     blur.style.left = dets.x - 140+ "px"
     blur.style.top =  dets.y - 140 +"px"
})

gsap.to("#nav",{
    backgroundColor: "#FFFFFF",
    duration:0.5,
    height: "80px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers : true,
        start: "top -10%",
        end : "top -11%",
        scrub : 1

    }

})
gsap.to("#main",{
    backgroundColor : "FFFFFF",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        markers: true, 
        start: "top -25%",
        end: "top -70%",
        scrub:2

    }

})

document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'page2.html';
  });
  
// Optional: basic interaction or setup
document.addEventListener('DOMContentLoaded', () => {
    console.log('PinFashion Page Loaded ✨');
  });

  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match ");
      return;
    }
  
    console.log("Signup Data:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  
    alert("Sign up successful! (frontend only for now )");
  });
  
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  
    alert("Login Successful! (This is frontend only for now 💖)");
  });
  
  function goToChat() {
    // Temporary redirection — later replace with actual chat page like 'chat.html'
    window.location.href = "chat.html";
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Log a message when the page loads
    console.log("College Look page loaded successfully!");
  
    // Navigation event (if any extra logic is needed before moving to Page 2)
    const navLink = document.querySelector(".nav-link");
    navLink.addEventListener("click", (e) => {
      console.log("Navigating back to the main menu (Page 2)");
      // Additional logic can be added here if needed
    });
  });
  