function showCard(faceType) {
  const faceData = {
    oval: {
      title: "Oval Face",
      info: "You have soft curves and a well-balanced face shape. Most makeup styles suit you beautifully! Try center-parted hair, bold eye looks, or a nude lip. Avoid too much contouring—your face shape is already elegant. Long layers and soft curls are your besties!",
      videoUrl: "https://www.youtube.com/embed/CejNXIeMPEE"

    },
    round: {
      title: "Round Face",
      info: "Your cheeks are full, and your face is equal in width and height. Use contour below your cheekbones and along your jaw. Long earrings and off-center hair partings help add definition. Go for winged eyeliner and a sharp brow to create angles!",
      videoUrl: "https://www.youtube.com/embed/ybFBuf2H_Qg"

    },
    square: {
      title: "Square Face",
      info: "You have a broad forehead and strong jawline. Soften those edges with curved eyebrows and soft blush on the apples of your cheeks. Try wavy or layered hairstyles. Avoid very sharp lines in makeup. Go glam with soft lips and fluttery lashes!",
      videoUrl: "https://www.youtube.com/embed/_9tuqNQ4uws"

    },
    heart: {
      title: "Heart Face",
      info: "Your face has a wider forehead and a pointed chin. Use highlighter on your cheekbones, and go for soft curls or side bangs. Keep your lips soft and shiny. A little bronzer near your temples balances out the width. Winged liner = WOW!",
      videoUrl: "https://www.youtube.com/embed/JB5vgkD_UUc"

    },
    diamond: {
      title: "Diamond Face",
      info: "You’ve got high cheekbones and a narrow forehead and chin. Highlight your brow bone and temples. Avoid harsh contours. Try side-swept bangs and layers around the chin. Glossy lips + peach blush = gorgeous and glam!",
      videoUrl: "https://www.youtube.com/embed/RmPxYFc55x0"

    },
    oblong: {
      title: "Oblong Face",
      info: "Your face is long and straight. Add width with horizontal blush strokes and curls at the sides. Bangs help reduce the appearance of length. Highlight your cheek apples and go for fuller brows. Skip long earrings—they elongate the face more.",
      videoUrl: "https://www.youtube.com/embed/1XhUCEFWNgs"

    },
    triangle: {
      title: "Triangle Face",
      info: "You have a strong jaw and narrower forehead. Add volume on top using soft curls or side parting. Highlight the forehead area and use blush on the cheeks. Long layered hairstyles work beautifully. Think soft eyes and dewy lips!",
      videoUrl: "https://www.youtube.com/embed/JYqHx1Tndxg"

    }
  };

  const card = document.getElementById("infoCard");
  const data = faceData[faceType];

  card.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.info}</p>
    <iframe src="${data.videoUrl}" frameborder="0" allowfullscreen></iframe>
    <br><br>
    <a href="index.html" style="color: #d81b60; font-weight: bold;">← Back to Home</a>
  `;

  card.style.display = "block";
}
