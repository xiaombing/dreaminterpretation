import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span  className="logo-icon">☪</span>
            <span className="logo-text">Muslim Dream Interpretation</span>
          </div>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
          </nav>
        </div>
      </div>
      <style>{`
        .header {
          padding: 1.5rem 0;
          backdrop-filter: blur(10px);
          background: rgba(15, 23, 42, 0.8);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-family-display);
          font-size: 1.5rem;
          color: var(--color-secondary);
        }
        .logo-icon {
          font-size: 1.8rem;
          color: var(--color-primary);
        }
        .nav {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .nav-link:hover {
          color: var(--color-secondary-light);
        }
      `}</style>
    </header>
  );
};
