<h1 align="center">🛡️ StegoShield: Watchdog AI</h1>

<p align="center">
Securely scan, analyze, and track email & WhatsApp attachments with full transparency.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Express-4.x-black?logo=express&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-green?logo=node.js&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/whatsapp--web.js-Latest-brightgreen?style=for-the-badge"/>
</p>

---

## 🚀 Key Features

- 🔍 **Gmail Attachment Scanner:** OAuth2-based Gmail authentication to fetch and scan attachments.
- 💬 **WhatsApp Media Processor:** Scan and manage media shared over WhatsApp using `whatsapp-web.js`.
- 📊 **Interactive Dashboard:** Visualize scans, threats, and activities in real-time.
- ⛓️ **Blockchain Logging:** Immutable action logs for transparent auditing.
- 🎨 **Modern UI:** Built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.

---

## 🛠️ Tech Stack

| Frontend                          | Backend                                 | Integrations                       |
|------------------------------------|-----------------------------------------|------------------------------------|
| React (Vite + TypeScript)          | Node.js + Express                       | Google APIs (Gmail OAuth2)         |
| Tailwind CSS + shadcn/ui           | whatsapp-web.js                         | WhatsApp Web API                   |
| Axios                              | OAuth2 (googleapis)                     | Blockchain Logger (optional)       |

---

## 📁 Project Structure

StegoShield/
├── src/ # Frontend (Vite + React + TS)
├── server/ # Backend (Node.js + Express)
│ ├── downloads/ # Temporary downloaded files
│ └── app.js # Express app entrypoint

yaml
Copy
Edit

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone <YOUR_GIT_URL>
cd StegoShield
2. Install Dependencies
Frontend
bash
Copy
Edit
npm install
Backend
bash
Copy
Edit
cd server
npm install
3. Start Development Servers
Frontend
bash
Copy
Edit
npm run dev
Runs at: http://localhost:5173

Backend
bash
Copy
Edit
cd server
npm run dev
Runs at: http://localhost:5000

🔗 API Endpoints
Endpoint	Description
/auth/google	Start Google OAuth2 flow
/auth/google/callback	OAuth2 callback endpoint
/auth/status	Get authentication status
/api/fetch-emails	Fetch & download Gmail attachments
/api/files	List downloaded files
/downloads/:filename	Download specific file

⚠️ Note: OAuth tokens are stored in-memory and cleared on server restart. Files are stored temporarily in /server/downloads.

🔐 Security Best Practices
Store OAuth client secrets securely (use .env).

Limit token scopes to minimize access.

Regularly clear temporary files.

Use secure HTTPS in production.

📊 Frontend Highlights
✅ OAuth2 Authentication for Gmail.

🔍 File upload & malware scan.

📈 Interactive dashboard with scan results & trends.

⛓️ Blockchain logs for auditability.

🤝 Contributions
We welcome contributions!

🍴 Fork the project.

🌱 Create a branch: git checkout -b feature/feature-name

✨ Add your changes.

📦 Commit: git commit -m 'feat: add feature'

🔄 Push and open a PR.

<p align="center"> Made with ❤️ for safer digital communications. </p> ```
