const API_URL = "https://arduino-backend-yfr3.onrender.com"; // <– DEINE URL

async function fetchDistance() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    document.getElementById("dist").textContent = data.distance ?? '...';
  } catch (err) {
    document.getElementById("dist").textContent = 'Fehler';
  }
}

setInterval(fetchDistance, 1000);
