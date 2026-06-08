async function downloadVideo() {
  const url = document.getElementById("url").value;
  const result = document.getElementById("result");

  result.innerHTML = "<p>⏳ Mengambil video...</p>";

  try {
    const res = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
    const data = await res.json();

    if (data.video) {
      result.innerHTML = `
        <video src="${data.video}" controls width="300"></video>
        <br><br>
        <a href="${data.video}" download>
          <button>Download Sekarang</button>
        </a>
      `;
    } else {
      result.innerHTML = "❌ Video tidak ditemukan";
    }
  } catch (err) {
    result.innerHTML = "⚠️ Terjadi error";
  }
}