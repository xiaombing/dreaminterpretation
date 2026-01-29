import React, { useState } from 'react';

interface SearchInputProps {
    onSearch: (query: string) => void;
    isLoading?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch, isLoading = false }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Describe your dream..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                />
                <button type="submit" className="search-button" disabled={isLoading || !query.trim()}>
                    {isLoading ? (
                        <span className="spinner"></span>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    )}
                </button>
            </div>
            <style>{`
        .search-form {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-input {
          width: 100%;
          padding: 1.25rem 3.5rem 1.25rem 1.5rem;
          font-size: 1.125rem;
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 99px;
          color: var(--color-text);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .search-input:focus {
          outline: none;
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
        }
        .search-input::placeholder {
          color: var(--color-text-muted);
        }
        .search-button {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--color-primary);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .search-button:hover:not(:disabled) {
          background: var(--color-primary-dark);
          transform: translateY(-50%) scale(1.05);
        }
        .search-button:disabled {
          background: var(--color-surface);
          color: var(--color-text-muted);
          cursor: not-allowed;
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </form>
    );
};
