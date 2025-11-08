import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(bodyParser.json());

// Mock user data
const users = [
  { email: "willy310887@gmail.com", password: "12345678" }
];

// Routes
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Email atau password salah" });
  }
  res.json({ message: "Login sukses", user });
});

// Test route
app.get("/", (req, res) => {
  res.send("Dirmanservice Backend Running 🚀");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
