<div align="center">

```
██╗   ██╗██████╗ ██╗         ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗███████╗███╗   ██╗███████╗██████╗
██║   ██║██╔══██╗██║         ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝████╗  ██║██╔════╝██╔══██╗
██║   ██║██████╔╝██║         ███████╗███████║██║   ██║██████╔╝   ██║   █████╗  ██╔██╗ ██║█████╗  ██████╔╝
██║   ██║██╔══██╗██║         ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   ██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║███████╗    ███████║██║  ██║╚██████╔╝██║  ██║   ██║   ███████╗██║ ╚████║███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
```

### 🔗 Paste long. Get short. Share fast.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-v5.2.1-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_v9-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongoosejs.com)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/Manas967/Url_Shortener/pulls)

<br/>

**[📖 Docs](#-api-reference) · [🚀 Quick Start](#-quick-start) · [⚙️ Config](#%EF%B8%8F-environment-variables) · [🐛 Issues](https://github.com/Manas967/Url_Shortener/issues)**

</div>

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Environment Variables](#%EF%B8%8F-environment-variables)
- [📖 API Reference](#-api-reference)
- [🔄 How It Works](#-how-it-works)
- [🗄️ Database Schema](#%EF%B8%8F-database-schema)
- [🤝 Contributing](#-contributing)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔗 **URL Shortening** | Convert any long URL into a compact 8-character ID |
| ↗️ **Instant Redirect** | Hit the short URL and get redirected immediately |
| 📊 **Click Tracking** | Every visit increments a counter stored in MongoDB |
| 🎲 **Unique ID Gen** | Custom alphanumeric ID generator — no external library |
| 🔒 **Env Config** | Secrets managed via `.env` — never hardcoded |
| ⚡ **Express v5** | Latest Express for fast, minimal routing |

---

## 🛠 Tech Stack

<table>
<tr>
<td align="center" width="120"><img src="https://skillicons.dev/icons?i=nodejs" width="48"/><br/><b>Node.js</b><br/><sub>Runtime</sub></td>
<td align="center" width="120"><img src="https://skillicons.dev/icons?i=express" width="48"/><br/><b>Express</b><br/><sub>v5.2.1</sub></td>
<td align="center" width="120"><img src="https://skillicons.dev/icons?i=mongodb" width="48"/><br/><b>MongoDB</b><br/><sub>Database</sub></td>
<td align="center" width="120"><img src="https://skillicons.dev/icons?i=mongoose" width="48" onerror="this.src='https://img.shields.io/badge/-Mongoose-880000?style=flat-square'"/><br/><b>Mongoose</b><br/><sub>v9.6.2</sub></td>
</tr>
</table>

**Dependencies:**
```
express      ^5.2.1   →  Web framework & routing
mongoose     ^9.6.2   →  MongoDB object modeling
dotenv       ^17.4.2  →  Environment variable loader
nodemon      ^3.1.14  →  Dev auto-reload (devDependency)
```

---

## 📁 Project Structure

```
Url_Shortener/
│
├── 📂 controllers/
│   └── controller.js       ← Business logic (shorten + redirect)
│
├── 📂 dataBase/
│   └── db.js               ← MongoDB connection setup
│
├── 📂 routes/
│   └── route.js            ← Route definitions (POST & GET)
│
├── 📂 structures/
│   └── structure.js        ← Mongoose schema & model
│
├── 📂 utils/
│   └── shortId.js          ← Custom 8-char ID generator
│
├── server.js               ← Entry point
├── .env                    ← 🔒 Your secrets (create this yourself)
├── .gitignore
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v18+` — [Download](https://nodejs.org)
- **npm** (comes with Node)
- **MongoDB** — [Local install](https://www.mongodb.com/try/download/community) or [Atlas (free cloud)](https://www.mongodb.com/atlas)

---

### Step 1 — Clone the repo

```bash
git clone https://github.com/Manas967/Url_Shortener.git
cd Url_Shortener
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Create your `.env` file

```bash
# Create the file
touch .env
```

Then open `.env` and add your config (see [Environment Variables](#%EF%B8%8F-environment-variables) below).

### Step 4 — Start the server

```bash
# Development (auto-restarts on file changes)
npx nodemon server.js

# OR plain Node
node server.js
```

### Step 5 — Confirm it's running

You should see:
```
Server is running at 5000
MongoDB connected
```

> 🎉 Your server is live at **`http://localhost:5000`**

---

## ⚙️ Environment Variables

Create a `.env` file in the **root of the project** and add the following:

```env
# ─────────────────────────────────────────────────
#  MongoDB Connection String
# ─────────────────────────────────────────────────

# Option A: Local MongoDB
MONGO_URI=mongodb://localhost:27017/urlshortener

# Option B: MongoDB Atlas (cloud)
# MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/urlshortener

# ─────────────────────────────────────────────────
#  Server Port  (default: 5000)
# ─────────────────────────────────────────────────
PORT=5000
```

| Variable | Required | Default | Description |
|---|---|---|---|
| `MONGO_URI` | ✅ Yes | — | MongoDB connection string |
| `PORT` | ❌ No | `5000` | Port the server listens on |

> ⚠️ **Never commit `.env` to Git.** Make sure `.env` is listed in your `.gitignore`.

<details>
<summary>📋 How to get a MongoDB Atlas URI</summary>

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new **free cluster**
3. Under **Database Access**, create a user with a password
4. Under **Network Access**, add your IP (`0.0.0.0/0` for any IP)
5. Click **Connect** → **Connect your application**
6. Copy the connection string and replace `<password>` with your DB user's password
7. Paste it as the value of `MONGO_URI` in your `.env`

</details>

---

## 📖 API Reference

Base URL: `http://localhost:5000`

---

### `POST /url/shorten`

Shortens a long URL and returns a unique short ID.

**Request**

```http
POST /url/shorten
Content-Type: application/json
```

```json
{
  "longUrl": "https://www.example.com/some/very/long/url?with=params&and=more"
}
```

**Success Response** — `201 Created`

```json
{
  "message": "Url shorten successfully",
  "shortId": "aB3xZ9qW"
}
```

**Your short URL is:** `http://localhost:5000/url/aB3xZ9qW`

<details>
<summary>🧪 Try it with cURL</summary>

```bash
curl -X POST http://localhost:5000/url/shorten \
  -H "Content-Type: application/json" \
  -d '{"longUrl": "https://www.github.com/Manas967/Url_Shortener"}'
```

</details>

<details>
<summary>🧪 Try it with Postman / Thunder Client</summary>

| Field | Value |
|---|---|
| Method | `POST` |
| URL | `http://localhost:5000/url/shorten` |
| Body type | `JSON` |
| Body | `{ "longUrl": "https://your-long-url.com" }` |

</details>

---

### `GET /url/:shortId`

Redirects to the original long URL and increments the click counter.

**Request**

```http
GET /url/aB3xZ9qW
```

**Response** — `302 Found` → redirects to the original URL

```
Location: https://www.example.com/some/very/long/url?with=params&and=more
```

<details>
<summary>🧪 Try it with cURL</summary>

```bash
# -L flag follows the redirect automatically
curl -L http://localhost:5000/url/aB3xZ9qW
```

</details>

<details>
<summary>🧪 Try it in your Browser</summary>

Simply visit:
```
http://localhost:5000/url/aB3xZ9qW
```
You'll be instantly redirected to the original URL.

</details>

---

### Error Responses

| Status | Scenario | Response |
|---|---|---|
| `400` | `longUrl` missing in body | `{ "error": "Please provide a url first" }` |
| `404` | Short ID not found in DB | `{ "error": "Short url not found" }` |
| `500` | Server / database error | `{ "error": "Server error" }` |

---

## 🔄 How It Works

### Shortening a URL

```
  Client                    Server                    MongoDB
    │                          │                          │
    │  POST /url/shorten        │                          │
    │  { longUrl: "https://..." }──────────────────────>  │
    │                          │                          │
    │                          │  Generate shortId        │
    │                          │  (8-char random string)  │
    │                          │                          │
    │                          │  findOne({ shortId })──> │
    │                          │                    <──── │ null (unique ✓)
    │                          │                          │
    │                          │  create({ longUrl,       │
    │                          │           shortId })───> │
    │                          │                    <──── │ saved ✓
    │                          │                          │
    │  <── 201 { shortId } ────│                          │
```

### Using a Short URL

```
  Client                    Server                    MongoDB
    │                          │                          │
    │  GET /url/aB3xZ9qW ──────────────────────────────> │
    │                          │                          │
    │                          │  findOne({ shortId })──> │
    │                          │                    <──── │ { longUrl, clicks }
    │                          │                          │
    │                          │  clicks++ → save() ────> │
    │                          │                          │
    │  <── 302 redirect ───────│                          │
    │      Location: longUrl   │                          │
```

---

### Short ID Generator

The `utils/shortId.js` generates an **8-character** string using a mix of:

```
digits      →  0–9   (ASCII 48–57)
uppercase   →  A–Z   (ASCII 65–90)
lowercase   →  a–z   (ASCII 97–122)
```

Each character is picked by randomly choosing one of the three categories, then picking a random ASCII code within that range — giving a pool of **62 possible characters** and `62⁸ = ~218 billion` unique combinations.

---

## 🗄️ Database Schema

Collection: `urls`

```js
{
  longUrl  : String,   // required — the original URL
  shortId  : String,   // required, unique — 8-char identifier
  clicks   : Number,   // default: 0 — increments on every redirect
  createOn : Date      // default: Date.now — auto-set at creation
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/Url_Shortener.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit
git commit -m "feat: add your feature description"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

---

<div align="center">

Made with ❤️ by [Manas967](https://github.com/Manas967)

⭐ **Star this repo if you found it useful!**

</div>
