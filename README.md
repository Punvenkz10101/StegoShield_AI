<!-- README.md (HTML format for GitHub) -->

<h1 align="center">🛡️ StegoShield: Watchdog AI</h1>
<p align="center"><b>Securely scan, analyze, and track email & WhatsApp attachments with full transparency.</b></p>
<br/>

<h2>🚀 Key Features</h2>
<ul>
  <li>🔍 <b>Gmail Attachment Scanner:</b> OAuth2-based Gmail authentication to fetch and scan attachments.</li>
  <li>💬 <b>WhatsApp Media Processor:</b> Scan and manage media shared over WhatsApp using <code>whatsapp-web.js</code>.</li>
  <li>📊 <b>Interactive Dashboard:</b> Visualize scans, threats, and activities in real-time.</li>
  <li>⛓️ <b>Blockchain Logging:</b> Immutable action logs for transparent auditing.</li>
  <li>🎨 <b>Modern UI:</b> Built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui.</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<table>
  <tr>
    <th>Frontend</th>
    <th>Backend</th>
    <th>Integrations</th>
  </tr>
  <tr>
    <td>
      React (Vite + TypeScript)<br/>
      Tailwind CSS + shadcn/ui<br/>
      Axios
    </td>
    <td>
      Node.js + Express<br/>
      whatsapp-web.js<br/>
      OAuth2 (googleapis)
    </td>
    <td>
      Google APIs (Gmail OAuth2)<br/>
      WhatsApp Web API<br/>
      Blockchain Logger (optional)
    </td>
  </tr>
</table>

<h2>📁 Project Structure</h2>
<pre>
StegoShield/
├── src/         # Frontend (Vite + React + TS)
├── server/      # Backend (Node.js + Express)
│   ├── downloads/   # Temporary downloaded files
│   └── index.js     # Express app entrypoint
</pre>

<h2>⚡ Quick Start</h2>
<ol>
  <li><b>Clone the Repository</b>
    <pre><code>git clone &lt;YOUR_GIT_URL&gt;
cd StegoShield</code></pre>
  </li>
  <li><b>Install Dependencies</b>
    <ul>
      <li>Frontend
        <pre><code>npm install</code></pre>
      </li>
      <li>Backend
        <pre><code>cd server
npm install</code></pre>
      </li>
    </ul>
  </li>
  <li><b>Start Development Servers</b>
    <ul>
      <li>Frontend
        <pre><code>npm run dev</code></pre>
        Runs at: <a href="http://localhost:5173">http://localhost:5173</a>
      </li>
      <li>Backend
        <pre><code>cd server
npm run dev</code></pre>
        Runs at: <a href="http://localhost:5000">http://localhost:5000</a>
      </li>
    </ul>
  </li>
</ol>

<h2>🔗 API Endpoints</h2>
<table>
  <tr><th>Endpoint</th><th>Description</th></tr>
  <tr><td><code>/auth/google</code></td><td>Start Google OAuth2 flow</td></tr>
  <tr><td><code>/auth/google/callback</code></td><td>OAuth2 callback endpoint</td></tr>
  <tr><td><code>/auth/status</code></td><td>Get authentication status</td></tr>
  <tr><td><code>/api/fetch-emails</code></td><td>Fetch & download Gmail attachments</td></tr>
  <tr><td><code>/api/files</code></td><td>List downloaded files</td></tr>
  <tr><td><code>/downloads/:filename</code></td><td>Download specific file</td></tr>
</table>

<p><b>⚠️ Note:</b> OAuth tokens are stored in-memory and cleared on server restart. Files are stored temporarily in <code>/server/downloads</code>.</p>

<h2>🔐 Security Best Practices</h2>
<ul>
  <li>Store OAuth client secrets securely (use <code>.env</code>).</li>
  <li>Limit token scopes to minimize access.</li>
  <li>Regularly clear temporary files.</li>
  <li>Use secure HTTPS in production.</li>
</ul>

<h2>📊 Frontend Highlights</h2>
<ul>
  <li>✅ OAuth2 Authentication for Gmail.</li>
  <li>🔍 File upload & malware scan.</li>
  <li>📈 Interactive dashboard with scan results & trends.</li>
  <li>⛓️ Blockchain logs for auditability.</li>
</ul>

<h2>🤝 Contributions</h2>
<p>We welcome contributions!</p>
<ol>
  <li>🍴 Fork the project.</li>
  <li>🌱 Create a branch: <code>git checkout -b feature/feature-name</code></li>
  <li>✨ Add your changes.</li>
  <li>📦 Commit: <code>git commit -m 'feat: add feature'</code></li>
  <li>🔄 Push and open a PR.</li>
</ol>

<p align="center">Made with ❤️ for safer digital communications.</p>
