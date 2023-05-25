export default async function handler(req, res) {
  try {
    const response = await fetch("http://37.230.195.26:3000/api/auth/session");
    const data = await response.json();

    // Обработка полученных данных

    res.status(200).json(data);
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    res.status(500).json({ error: "Ошибка при выполнении запроса" });
  }
}
