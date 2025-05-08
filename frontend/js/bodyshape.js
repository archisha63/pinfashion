const bodyShapes = {
    hourglass: {
      title: "Hourglass Shape",
      description: "Balanced bust and hips with a defined waist.",
      recommendations: [
        "Wrap dresses, fit-and-flare styles",
        "High-waisted bottoms",
        "Belted jackets and tops",
      ],
    },
    pear: {
      title: "Pear Shape",
      description: "Wider hips than bust, well-defined waist.",
      recommendations: [
        "A-line skirts and dresses",
        "Structured tops with embellishments",
        "Off-shoulder or boat necklines",
      ],
    },
    apple: {
      title: "Apple Shape",
      description: "Wider torso and bust, less defined waist.",
      recommendations: [
        "Empire waist dresses",
        "V-neck and flowy tops",
        "Straight-cut pants and open jackets",
      ],
    },
    rectangle: {
      title: "Rectangle Shape",
      description: "Equal bust, waist, and hip measurements.",
      recommendations: [
        "Peplum tops, ruffled sleeves",
        "Layered looks",
        "Belts to define waist",
      ],
    },
    inverted: {
      title: "Inverted Triangle",
      description: "Broad shoulders and narrow hips.",
      recommendations: [
        "Wide-leg pants, flowy skirts",
        "V-necks and minimal shoulder details",
        "Bottoms with volume",
      ],
    },
    
  };
  
  document.querySelectorAll(".body-shape").forEach((shape) => {
    shape.addEventListener("click", () => {
      const type = shape.getAttribute("data-shape");
      const data = bodyShapes[type];
  
      document.getElementById("shape-title").textContent = data.title;
      document.getElementById("shape-description").textContent = data.description;
      
      const list = document.getElementById("recommendations");
      list.innerHTML = "";
      data.recommendations.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
  
      document.getElementById("recommendation-card").style.display = "block";
    });
  });
  
  document.getElementById("retake-btn").addEventListener("click", () => {
    document.getElementById("recommendation-card").style.display = "none";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.getElementById("quiz-btn").addEventListener("click", () => {
    alert("Quiz feature coming soon! 💖 Stay tuned!");
    
  });
  document.getElementById("quiz-btn").addEventListener("click", () => {
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("recommendation-card").style.display = "none";
    window.scrollTo({ top: document.getElementById("quiz-section").offsetTop, behavior: 'smooth' });
  });
  
  const quizAdvices = [
    "If you gain weight in your hips/thighs, you may have a Pear shape. Embrace flowy skirts and A-line dresses. Avoid tight pants with light tops.",
    "Tummy weight gain is common in Apple shapes. Try empire waist and wrap dresses that define your bust and flow around the waist.",
    "Gaining weight evenly suggests a Rectangle or Hourglass shape. Go for belts, peplum tops, and bodycon dresses to create curves.",
    "Yes? Then you might be Inverted Triangle. Try flared pants and detailed bottoms to balance your frame.",
    "No? Pear or Hourglass are more likely. Keep your tops light and lower half structured to enhance balance.",
    "A defined waist = Hourglass queen! Wear fitted styles, belts, and body-hugging pieces that flaunt your figure.",
    "Slight waist definition? You may be a Rectangle. Use layered tops, skirts, and flares to add shape.",
    "No waist curve? Apple or Inverted Triangle. Focus on structured jackets and mid-rise pants for definition.",
    "Curvy hips and thighs = Hello Pear! Add volume to the top with statement shoulders and bold colors.",
    "Straight lower body hints at Rectangle or Inverted Triangle. Add curves with ruffled skirts and pleated pants.",
    "Kim’s curves scream Hourglass or Pear. Highlight that waist and rock high-waisted pants and fitted tops.",
    "Deepika’s long frame and grace reflect Rectangle or Inverted Triangle. Try elegant cuts and statement layers.",
    "Kriti’s balanced frame might be Hourglass or Lean Rectangle. Keep silhouettes clean with subtle structure."
  ];
  
  function showAdvice(index) {
    const adviceId = Math.floor(index / 3); // Every 3 options = 1 question
    document.getElementById(`advice${adviceId}`).innerText = quizAdvices[index];
  }
  