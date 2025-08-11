export default function SkeletonCard() {
  return (
    <article className="property-card" style={{ opacity: 0.7 }}>
      {/* Skeleton True Cost Badge */}
      <div 
        className="skeleton" 
        style={{
          position: 'absolute',
          top: 'var(--space-md)',
          left: 'var(--space-md)',
          width: '80px',
          height: '32px',
          borderRadius: '100px',
          zIndex: 10
        }}
      />
      
      {/* Skeleton Savings Badge */}
      <div 
        className="skeleton" 
        style={{
          position: 'absolute',
          top: 'var(--space-md)',
          right: 'var(--space-md)',
          width: '100px',
          height: '24px',
          borderRadius: '6px',
          zIndex: 10
        }}
      />

      {/* Skeleton Photo */}
      <div 
        className="skeleton" 
        style={{
          aspectRatio: '16/10',
          width: '100%'
        }}
      />

      {/* Skeleton Content */}
      <div className="property-content">
        {/* Skeleton Monthly Payment */}
        <div 
          className="skeleton" 
          style={{
            height: '24px',
            width: '150px',
            marginBottom: 'var(--space-xs)'
          }}
        />
        
        {/* Skeleton Address */}
        <div 
          className="skeleton" 
          style={{
            height: '20px',
            width: '80%',
            marginBottom: 'var(--space-1)'
          }}
        />
        
        {/* Skeleton Community */}
        <div 
          className="skeleton" 
          style={{
            height: '16px',
            width: '60%',
            marginBottom: 'var(--space-1)'
          }}
        />
        
        {/* Skeleton MLS */}
        <div 
          className="skeleton" 
          style={{
            height: '14px',
            width: '40%',
            marginBottom: 'var(--space-md)'
          }}
        />

        {/* Skeleton Price Section */}
        <div 
          className="skeleton" 
          style={{
            height: '18px',
            width: '70%',
            marginBottom: 'var(--space-2)'
          }}
        />
        
        <div 
          className="skeleton" 
          style={{
            height: '16px',
            width: '90%',
            marginBottom: 'var(--space-md)'
          }}
        />

        {/* Skeleton Property Details Grid */}
        <div className="property-details">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div 
                className="skeleton" 
                style={{
                  height: '20px',
                  width: '30px',
                  margin: '0 auto var(--space-1)'
                }}
              />
              <div 
                className="skeleton" 
                style={{
                  height: '14px',
                  width: '40px',
                  margin: '0 auto'
                }}
              />
            </div>
          ))}
        </div>

        {/* Skeleton Incentives Button */}
        <div 
          className="skeleton" 
          style={{
            height: '18px',
            width: '120px',
            marginBottom: 'var(--space-md)'
          }}
        />

        {/* Skeleton Move-in Date */}
        <div 
          className="skeleton" 
          style={{
            height: '16px',
            width: '140px',
            margin: '0 auto var(--space-md)',
            textAlign: 'center'
          }}
        />

        {/* Skeleton CTA Buttons */}
        <div className="property-cta">
          <div 
            className="skeleton" 
            style={{
              height: '48px',
              flex: 1,
              borderRadius: '8px'
            }}
          />
          <div 
            className="skeleton" 
            style={{
              height: '48px',
              flex: 1,
              borderRadius: '8px'
            }}
          />
        </div>
      </div>
    </article>
  );
}
