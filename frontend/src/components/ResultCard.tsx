import React from 'react';

interface ResultCardProps {
    dream: string;
    interpretation: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ dream, interpretation }) => {
    return (
        <div className="result-card">
            <div className="result-header">
                <h3 className="result-title">Interpretation</h3>
                <div className="separator"></div>
            </div>
            <div className="dream-summary">
                <span className="label">Dream:</span>
                <p>"{dream}"</p>
            </div>
            <div className="interpretation-content">
                <p>{interpretation}</p>
            </div>
            <div className="result-footer">
                <span className="source">Source: Islamic Dream Interpretation (Ibn Sirin)</span>
            </div>
            <style>{`
        .result-card {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          margin-top: 2rem;
          box-shadow: var(--shadow-glow);
          backdrop-filter: blur(12px);
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .result-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .result-title {
          color: var(--color-secondary);
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .separator {
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
          margin: 0 auto;
        }
        .dream-summary {
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: var(--border-radius-md);
          margin-bottom: 1.5rem;
          border-left: 3px solid var(--color-text-muted);
        }
        .label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          margin-bottom: 0.25rem;
        }
        .dream-summary p {
          font-style: italic;
          color: var(--color-text-muted);
        }
        .interpretation-content {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 2rem;
        }
        .result-footer {
          text-align: right;
          font-size: 0.875rem;
          color: var(--color-secondary-light);
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
};
