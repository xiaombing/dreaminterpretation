import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Muslim Dream Interpretation. All knowledge is with Allah.</p>
            </div>
            <style>{`
        .footer {
          padding: 2rem 0;
          margin-top: auto;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.875rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
        </footer>
    );
};
