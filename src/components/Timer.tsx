const Timer = ({ time }: { time: number }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (time / 30) * circumference;
  const strokeColor = time > 10 ? "#34d399" : "#f87171";

  return (
    <div className="w-16 h-16">
      <svg className="w-16 h-16" viewBox="0 0 70 70">
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke={strokeColor}
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 35 35)"
          strokeLinecap="round"
        />
        <text x="35" y="40" textAnchor="middle" fontSize="14" fill="#374151">
          {time}s
        </text>
      </svg>
    </div>
  );
};

export default Timer;
