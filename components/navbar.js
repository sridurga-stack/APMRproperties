class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #1e3a8a;
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .nav-links {
          display: none;
          gap: 1.5rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: #d4a017;
        }
        .call-btn {
          background-color: #d4a017;
          color: #111827;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.3s;
        }
        .call-btn:hover {
          background-color: #b78c14;
        }
        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      </style>
      <nav>
        <div class="container">
          <div class="logo">
            <i data-feather="home"></i>
            <span>Green Valley</span>
          </div>
          <div class="nav-links">
            <a href="#why">Why Invest</a>
            <a href="#pricing">Pricing</a>
            <a href="#location">Location</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:9177292529" class="call-btn">
            <i data-feather="phone"></i>
            Call Now
          </a>
          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);