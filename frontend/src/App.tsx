import { useState } from 'react';
import { Layout } from './components/Layout';
import { SearchInput } from './components/SearchInput';
import { ResultCard } from './components/ResultCard';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ dream: string; interpretation: string } | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setResult(null);

    // Mock API call - 模拟解梦 API 调用
    setTimeout(() => {
      // Mock interpretation based on common dream symbols
      const mockInterpretation = generateMockInterpretation(query);
      setResult({
        dream: query,
        interpretation: mockInterpretation,
      });
      setIsLoading(false);
    }, 1500);
  };

  const generateMockInterpretation = (dream: string): string => {
    // 简单的模拟逻辑
    const lowerDream = dream.toLowerCase();

    if (lowerDream.includes('water') || lowerDream.includes('海') || lowerDream.includes('水')) {
      return 'Water in dreams often symbolizes purification, spiritual cleansing, and renewal. In Islamic tradition, clear water represents faith and knowledge, while turbulent water may indicate trials or emotional turmoil. This dream suggests you are seeking spiritual clarity or going through a period of emotional transformation.';
    } else if (lowerDream.includes('snake') || lowerDream.includes('蛇')) {
      return 'Seeing a snake in a dream can have various interpretations. In Islamic dream interpretation, a snake often represents an enemy or hidden danger. However, if the snake is harmless or you overcome it, this indicates victory over adversaries. The specific context matters greatly in understanding this symbol.';
    } else if (lowerDream.includes('fly') || lowerDream.includes('flying') || lowerDream.includes('飞')) {
      return 'Flying in dreams represents freedom, spiritual elevation, and transcendence. In Islamic interpretation, flying with ease suggests achieving your goals and spiritual growth. It may indicate that you are rising above worldly concerns and seeking higher understanding.';
    } else if (lowerDream.includes('house') || lowerDream.includes('home') || lowerDream.includes('房子') || lowerDream.includes('家')) {
      return 'A house in dreams typically represents the self, family, or one\'s life situation. In Islamic tradition, a well-maintained house suggests stability and blessings, while a damaged house may indicate challenges in family life or personal struggles. Pay attention to the condition and atmosphere of the house for deeper meaning.';
    } else {
      return 'Dreams are messages from Allah and can carry important spiritual significance. Your dream contains unique symbolism that reflects your current life situation, spiritual state, or future events. Consider the emotions you felt, the people involved, and the overall atmosphere. Reflect on your current life challenges and prayers, as dreams often provide guidance for your path.';
    }
  };

  return (
    <Layout>
      <div className="home-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="title-icon">☪</span>
                <br />
                Discover the Meaning of Your Dreams
              </h1>
              <p className="hero-subtitle">
                Explore dream interpretations rooted in Islamic tradition and the wisdom of scholars like Ibn Sirin
              </p>
              <div className="search-container">
                <SearchInput onSearch={handleSearch} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </section>

        {result && (
          <section className="result-section">
            <div className="container">
              <ResultCard dream={result.dream} interpretation={result.interpretation} />
            </div>
          </section>
        )}
      </div>
      <style>{`
        .home-page {
          padding-bottom: 4rem;
        }
        .hero-section {
          padding: 6rem 0;
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-content {
          text-align: center;
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-title {
          font-size: 3.5rem;
          font-family: var(--font-family-display);
          color: var(--color-secondary-light);
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
        }
        .title-icon {
          font-size: 4rem;
          color: var(--color-primary);
          display: inline-block;
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
          }
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .search-container {
          margin-top: 2rem;
        }
        .result-section {
          padding: 2rem 0;
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.125rem;
          }
          .hero-section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </Layout>
  );
}

export default App;
