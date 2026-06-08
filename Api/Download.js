export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL kosong" });
  }

  try {
    const response = await fetch(`https://www.tikwm.com/api/?url=${url}`);
    const data = await response.json();

    if (data && data.data) {
      return res.status(200).json({
        video: data.data.play
      });
    } else {
      return res.status(404).json({ error: "Video tidak ditemukan" });
    }

  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
