import { getHomes } from '../lib/homes';
import HomeCard from './components/HomeCard';
import SkeletonCard from './components/SkeletonCard';

export default async function HomePage() {
  const homes = await getHomes();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Summerlin West Homes
          </h1>
          <p className="hero-subtitle">
            Track 15 new construction homes with builder incentives. See the real cost after incentives.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="page-header">
          <h2 className="page-title">
            15 Homes Under True Cost • Updated {new Date().toLocaleTimeString()}
          </h2>
        </div>
        
        <div className="homes-grid">
          {homes.length > 0 ? (
            homes.map(home => (
              <HomeCard key={home.mlsNumber} {...home} />
            ))
          ) : (
            // Show skeleton loading while data loads
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
