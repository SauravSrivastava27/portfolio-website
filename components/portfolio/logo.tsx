interface LogoProps {
  className?: string;
  showFullName?: boolean;
}

const BRAND_COLOR = "#00CC85";

export function Logo({ className = "", showFullName = true }: LogoProps) {
  return (
    <svg
      viewBox={showFullName ? "0 0 600 180" : "0 0 180 180"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Saurav Srivastava Logo"
    >
      {/* Circle background */}
      <circle
        cx="90"
        cy="90"
        r="85"
        fill="none"
        stroke={BRAND_COLOR}
        strokeWidth="4"
      />
      
      {/* Inner accent circle */}
      <circle
        cx="90"
        cy="90"
        r="75"
        fill="none"
        stroke={BRAND_COLOR}
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Initials */}
      <text
        x="90"
        y="110"
        textAnchor="middle"
        fill={BRAND_COLOR}
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-4px",
        }}
      >
        SS
      </text>

      {showFullName && (
        <>
          {/* Divider line */}
          <line
            x1="200"
            y1="35"
            x2="200"
            y2="145"
            stroke={BRAND_COLOR}
            strokeWidth="3"
            opacity="0.5"
          />

          {/* Full Name */}
          <text
            x="230"
            y="85"
            fill={BRAND_COLOR}
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "4px",
            }}
          >
            SAURAV
          </text>
          <text
            x="230"
            y="120"
            fill={BRAND_COLOR}
            opacity="0.7"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "26px",
              fontWeight: 500,
              letterSpacing: "4px",
            }}
          >
            SRIVASTAVA
          </text>
        </>
      )}
    </svg>
  );
}
