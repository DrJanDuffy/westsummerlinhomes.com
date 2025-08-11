export default function SkeletonCard() {
  return (
    <article className="property-card" style={{ opacity: 0.7 }}>
      {/* Skeleton True Cost Badge */}
      <div 
        className="skeleton" 
        style={{
          position: 'absolute',
          top: 'var(--space-4)',
          left: 'var(--space-4)',
          width: '80px',
          height: '32px',
          borderRadius: 'var(--radius-full)',
          zIndex: 2
        }}
      />
      
      {/* Skeleton Savings Badge */}
      <div 
        className="skeleton" 
        style={{
          position: 'absolute',
          top: 'var(--space-4)',
          right: 'var(--space-4)',
          width: '100px',
          height: '24px',
          borderRadius: 'var(--radius-full)',
          zIndex: 2
        }}
      />

      {/* Skeleton Photo */}
      <div 
        className="skeleton" 
        style={{
          height: '280px',
          width: '100%'
        }}
      />

      {/* Skeleton Content */}
      <div className="property-details">
        {/* Skeleton Monthly Payment */}
        <div 
          className="skeleton" 
          style={{
            height: '24px',
            width: '150px',
            marginBottom: 'var(--space-2)'
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
            marginBottom: 'var(--space-4)'
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
            marginBottom: 'var(--space-4)'
          }}
        />

        {/* Skeleton Property Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-4)',
          textAlign: 'center'
        }}>
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
            marginBottom: 'var(--space-4)'
          }}
        />

        {/* Skeleton Move-in Date */}
        <div 
          className="skeleton" 
          style={{
            height: '16px',
            width: '140px',
            margin: '0 auto var(--space-4)',
            textAlign: 'center'
          }}
        />

        {/* Skeleton CTA Button */}
        <div 
          className="skeleton" 
          style={{
            height: '48px',
            width: '100%',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>
    </article>
  );
}
