const LogoSVG = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(210, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(260, 100%, 60%)" />
        </linearGradient>
      </defs>
      {/* AI Brain/Circuit Icon */}
      <g>
        <circle
          cx="25"
          cy="30"
          r="20"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
        />
        <circle cx="25" cy="30" r="8" fill="url(#logoGradient)" />
        <circle cx="25" cy="15" r="3" fill="url(#logoGradient)" />
        <circle cx="25" cy="45" r="3" fill="url(#logoGradient)" />
        <circle cx="10" cy="30" r="3" fill="url(#logoGradient)" />
        <circle cx="40" cy="30" r="3" fill="url(#logoGradient)" />
        <line
          x1="25"
          y1="22"
          x2="25"
          y2="18"
          stroke="url(#logoGradient)"
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="38"
          x2="25"
          y2="42"
          stroke="url(#logoGradient)"
          strokeWidth="2"
        />
        <line
          x1="17"
          y1="30"
          x2="13"
          y2="30"
          stroke="url(#logoGradient)"
          strokeWidth="2"
        />
        <line
          x1="33"
          y1="30"
          x2="37"
          y2="30"
          stroke="url(#logoGradient)"
          strokeWidth="2"
        />
      </g>
      {/* Text */}
      <text
        x="55"
        y="38"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
      >
        Mayidev
        <tspan fill="url(#logoGradient)">AI</tspan>
      </text>
    </svg>
  );
};

export default LogoSVG;
