async function downloadVideo() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");

  result.innerHTML = "⏳ Mengambil video...";

  try {
    const res = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
    const data = await res.json();

    if (data && data.data) {
      const video = data.data.play;

      result.innerHTML = `
        <video src="${video}" controls width="300"></video>
        <br><br>
        <a href="${video}" download>
          <button>Download Sekarang</button>
        </a>
      `;
    } else {
      result.innerHTML = "❌ Video tidak ditemukan";
    }

  } catch (err) {
    result.innerHTML = "⚠️ API diblok / error";
  }
}
