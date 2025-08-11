'use client';

import { useState } from 'react';

interface HomeCardProps {
  mlsNumber: string;
  address: string;
  community: string;
  builder: string;
  listPrice: number;
  trueCost: number;
  incentives: Array<{
    type: string;
    amount: number;
    description: string;
    expiresAt: string;
  }>;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  moveInDate: string;
  status: string;
  photoUrl: string;
}

export default function HomeCard({
  mlsNumber,
  address,
  community,
  builder,
  listPrice,
  trueCost,
  incentives,
  bedrooms,
  bathrooms,
  sqft,
  moveInDate,
  status,
  photoUrl
}: HomeCardProps) {
  const [showIncentives, setShowIncentives] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);

  const totalIncentives = incentives.reduce((sum, inc) => sum + inc.amount, 0);
  const savings = listPrice - trueCost;
  const savingsPercent = Math.round((savings / listPrice) * 100);
  
  // Calculate monthly payment (rough estimate)
  const monthlyPayment = Math.round((trueCost * 0.07) / 12); // 7% annual rate, 12 months
  
  // Check if any incentives are expiring soon
  const hasExpiringIncentives = incentives.some(inc => {
    if (!inc.expiresAt) return false;
    const daysUntilExpiry = Math.ceil((new Date(inc.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 7;
  });

  const handleScheduleTour = async () => {
    setIsScheduling(true);
    // TODO: Integrate with Follow Up Boss
    setTimeout(() => setIsScheduling(false), 2000);
  };

  return (
    <article className="property-card clickable">
      {/* Price-first design - True Cost Badge */}
      <div className="property-true-cost">
        ${(trueCost / 1000).toFixed(0)}K
      </div>
      
      {/* Savings Badge */}
      <div className="property-savings">
        Save ${(savings / 1000).toFixed(0)}K
      </div>

      {/* Photo Section */}
      <div className="home-card__photo" style={{
        position: 'relative',
        height: '280px',
        background: 'var(--gray-200)',
        overflow: 'hidden'
      }}>
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={`${address} - ${community} by ${builder}`}
            className="property-image"
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-400)'
          }}>
            <svg style={{ width: '64px', height: '64px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="home-card__status" style={{
          position: 'absolute',
          bottom: 'var(--space-3)',
          left: 'var(--space-3)',
          padding: 'var(--space-1) var(--space-2)',
          background: 'var(--success)',
          color: 'var(--white)',
          fontSize: 'var(--font-xs)',
          fontWeight: '500',
          borderRadius: 'var(--radius-full)',
          zIndex: 'var(--z-tooltip)'
        }}>
          {status}
        </div>
      </div>

      {/* Content Section */}
      <div className="property-details">
        {/* Monthly Payment - Prominent Display */}
        <div className="property-monthly">
          <strong className="stat-value">${monthlyPayment.toLocaleString()}</strong>/month
        </div>
        
        {/* Header */}
        <header className="home-card__header" style={{
          marginBottom: 'var(--space-4)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-lg)',
            fontWeight: '600',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-1)',
            lineHeight: '1.3'
          }}>
            {address}
          </h3>
          <p style={{
            fontSize: 'var(--font-sm)',
            color: 'var(--gray-600)',
            margin: '0'
          }}>
            {community} by {builder}
          </p>
          <p style={{
            fontSize: 'var(--font-xs)',
            color: 'var(--gray-500)',
            margin: 'var(--space-1) 0 0 0'
          }}>
            MLS# {mlsNumber}
          </p>
        </header>

        {/* Price Section */}
        <div className="home-card__pricing" style={{
          marginBottom: 'var(--space-4)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-2)'
          }}>
            <span style={{
              fontSize: 'var(--font-lg)',
              color: 'var(--gray-500)',
              textDecoration: 'line-through'
            }}>
              ${(listPrice / 1000).toFixed(0)}K
            </span>
            <span style={{
              fontSize: 'var(--font-sm)',
              color: 'var(--success)',
              fontWeight: '500'
            }}>
              ({savingsPercent}% off)
            </span>
          </div>
          
          <p style={{
            fontSize: 'var(--font-sm)',
            color: 'var(--gray-600)',
            margin: '0'
          }}>
            <strong>True Cost</strong> after ${(totalIncentives / 1000).toFixed(0)}K in incentives
          </p>
        </div>

        {/* Property Details */}
        <div className="home-card__details" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-4)',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              fontSize: 'var(--font-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)'
            }}>
              {bedrooms}
            </div>
            <div style={{
              fontSize: 'var(--font-xs)',
              color: 'var(--gray-600)'
            }}>
              Beds
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 'var(--font-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)'
            }}>
              {bathrooms}
            </div>
            <div style={{
              fontSize: 'var(--font-xs)',
              color: 'var(--gray-600)'
            }}>
              Baths
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 'var(--font-lg)',
              fontWeight: '600',
              color: 'var(--gray-900)'
            }}>
              {sqft.toLocaleString()}
            </div>
            <div style={{
              fontSize: 'var(--font-xs)',
              color: 'var(--gray-600)'
            }}>
              Sq Ft
            </div>
          </div>
        </div>

        {/* Incentives with Countdown Timer */}
        <div className="home-card__incentives" style={{
          marginBottom: 'var(--space-4)'
        }}>
          {hasExpiringIncentives && (
            <div className="incentive-timer" style={{ marginBottom: 'var(--space-2)' }}>
              ⏰ Incentives Expiring Soon!
            </div>
          )}
          
          <button
            onClick={() => setShowIncentives(!showIncentives)}
            style={{
              fontSize: 'var(--font-sm)',
              color: 'var(--primary)',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              textDecoration: 'underline',
              textDecorationColor: 'var(--primary)',
              textUnderlineOffset: '2px'
            }}
            aria-expanded={showIncentives ? 'true' : 'false'}
            aria-controls="incentives-details"
          >
            {showIncentives ? 'Hide' : 'Show'} Incentive Details
          </button>
          
          {showIncentives && (
            <div 
              id="incentives-details"
              style={{
                marginTop: 'var(--space-2)',
                padding: 'var(--space-3)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gray-200)'
              }}
            >
              {incentives.map((incentive, index) => {
                const daysUntilExpiry = incentive.expiresAt ? 
                  Math.ceil((new Date(incentive.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;
                
                return (
                  <div key={index} style={{
                    fontSize: 'var(--font-sm)',
                    color: 'var(--gray-700)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    • ${(incentive.amount / 1000).toFixed(0)}K {incentive.description}
                    {incentive.expiresAt && (
                      <span style={{
                        color: daysUntilExpiry && daysUntilExpiry <= 3 ? 'var(--error)' : 'var(--warning)',
                        marginLeft: 'var(--space-2)',
                        fontWeight: daysUntilExpiry && daysUntilExpiry <= 3 ? '600' : '400'
                      }}>
                        (Expires in {daysUntilExpiry} days)
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Move-in Date */}
        <div className="home-card__movein" style={{
          marginBottom: 'var(--space-4)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: 'var(--font-sm)',
            color: 'var(--gray-600)',
            margin: '0'
          }}>
            Move-in: <span style={{ fontWeight: '500' }}>{new Date(moveInDate).toLocaleDateString()}</span>
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleScheduleTour}
          disabled={isScheduling}
          style={{
            width: '100%',
            background: isScheduling ? 'var(--gray-400)' : 'var(--accent)',
            color: 'var(--white)',
            padding: 'var(--space-3) var(--space-4)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-base)',
            fontWeight: '500',
            border: 'none',
            cursor: isScheduling ? 'not-allowed' : 'pointer',
            transition: 'var(--transition-base)',
            willChange: 'background-color'
          }}
          onMouseEnter={(e) => {
            if (!isScheduling) {
              e.currentTarget.style.background = 'var(--accent-hover)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isScheduling) {
              e.currentTarget.style.background = 'var(--accent)';
            }
          }}
          aria-describedby={isScheduling ? 'scheduling-status' : undefined}
        >
          {isScheduling ? 'Scheduling...' : 'Schedule Tour'}
        </button>
        
        {isScheduling && (
          <div id="scheduling-status" className="sr-only">
            Currently processing your tour request
          </div>
        )}
      </div>
    </article>
  );
}
