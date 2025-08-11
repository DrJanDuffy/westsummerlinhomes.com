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
    <article className="property-card">
      {/* True Cost Badge - HUGE & Prominent */}
      <div className="true-cost-badge">
        <div className="true-cost-value">${(trueCost / 1000).toFixed(0)}K</div>
        <div className="true-cost-label">True Cost</div>
      </div>
      
      {/* Savings Badge */}
      <div className="savings-badge">
        Save ${(savings / 1000).toFixed(0)}K
      </div>

      {/* Incentive Timer - If Expiring Soon */}
      {hasExpiringIncentives && (
        <div className="incentive-timer urgent">
          ⏰ Incentives Expiring Soon!
        </div>
      )}

      {/* Photo Section */}
      <div className="property-image">
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={`${address} - ${community} by ${builder}`}
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-400)',
            background: 'var(--gray-100)'
          }}>
            <svg style={{ width: '64px', height: '64px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="property-content">
        {/* Monthly Payment - Prominent Display */}
        <div className="property-monthly">
          ${monthlyPayment.toLocaleString()}
        </div>
        <div className="property-monthly-label">/month</div>
        
        {/* Header */}
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
          margin: '0 0 var(--space-1) 0'
        }}>
          {community} by {builder}
        </p>
        <p style={{
          fontSize: 'var(--font-xs)',
          color: 'var(--gray-500)',
          margin: '0 0 var(--space-md) 0'
        }}>
          MLS# {mlsNumber}
        </p>

        {/* Price Section */}
        <div style={{
          marginBottom: 'var(--space-md)'
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
        <div className="property-details">
          <div>
            <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>
              {bedrooms}
            </div>
            <div style={{ fontSize: 'var(--font-xs)' }}>Beds</div>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>
              {bathrooms}
            </div>
            <div style={{ fontSize: 'var(--font-xs)' }}>Baths</div>
          </div>
          <div>
            <div style={{ fontWeight: '600', color: 'var(--gray-900)' }}>
              {sqft.toLocaleString()}
            </div>
            <div style={{ fontSize: 'var(--font-xs)' }}>Sq Ft</div>
          </div>
        </div>

        {/* Incentives */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
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
            aria-expanded={showIncentives ? "true" : "false"}
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
                        color: daysUntilExpiry && daysUntilExpiry <= 3 ? 'var(--urgent)' : 'var(--warning)',
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
        <div style={{
          marginBottom: 'var(--space-md)',
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

        {/* CTA Buttons */}
        <div className="property-cta">
          <button
            onClick={handleScheduleTour}
            disabled={isScheduling}
            className="btn-tour"
          >
            {isScheduling ? 'Scheduling...' : 'Schedule Tour'}
          </button>
          
          <button
            onClick={() => setShowIncentives(!showIncentives)}
            className="btn-details"
          >
            {showIncentives ? 'Hide Details' : 'View Details'}
          </button>
        </div>
        
        {isScheduling && (
          <div className="sr-only">
            Currently processing your tour request
          </div>
        )}
      </div>
    </article>
  );
}
