class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0f172a;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: auto;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: linear-gradient(135deg, #7e22ce 0%, #ec4899 100%);
          transform: translateY(-3px);
        }
        .copyright {
          opacity: 0.8;
          font-size: 0.9rem;
        }
        .magic-text {
          background: linear-gradient(135deg, #7e22ce 0%, #ec4899 50%, #3b82f6 100%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" class="social-link">
              <i data-feather="github"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i data-feather="mail"></i>
            </a>
          </div>
          <p class="copyright">
            &copy; 2024 <span class="magic-text">CodeCraft Wizardry Portal</span>. All spells reserved. ✨
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);