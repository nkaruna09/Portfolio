import { motion } from 'framer-motion';

interface ButterflyProps {
  className?: string;
  colors: {
    gradient1: string;
    gradient2: string;
    body: string;
  };
  gradientId: string;
}

export function Butterfly({ className, colors, gradientId }: ButterflyProps) {
  return (
    <svg viewBox="0 0 120 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: colors.gradient1, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: colors.gradient2, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Left top wing */}
      <path
        d="M 50 40 Q 20 20 15 35 Q 10 50 20 55 Q 30 60 45 50 Z"
        fill={`url(#${gradientId})`}
        opacity="0.9"
      />
      
      {/* Right top wing */}
      <path
        d="M 70 40 Q 100 20 105 35 Q 110 50 100 55 Q 90 60 75 50 Z"
        fill={`url(#${gradientId})`}
        opacity="0.9"
      />
      
      {/* Left bottom wing */}
      <path
        d="M 50 50 Q 25 55 18 70 Q 15 85 30 85 Q 45 85 52 65 Z"
        fill={`url(#${gradientId})`}
        opacity="0.85"
      />
      
      {/* Right bottom wing */}
      <path
        d="M 70 50 Q 95 55 102 70 Q 105 85 90 85 Q 75 85 68 65 Z"
        fill={`url(#${gradientId})`}
        opacity="0.85"
      />
      
      {/* Body */}
      <ellipse cx="60" cy="50" rx="4" ry="20" fill={colors.body} />
      <circle cx="60" cy="35" r="5" fill={colors.body} />
      
      {/* Antennae */}
      <path
        d="M 58 32 Q 55 25 53 20"
        stroke={colors.body}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="53" cy="20" r="2" fill={colors.body} />
      
      <path
        d="M 62 32 Q 65 25 67 20"
        stroke={colors.body}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="67" cy="20" r="2" fill={colors.body} />
      
      {/* Wing details/patterns */}
      <circle cx="35" cy="40" r="3" fill="white" opacity="0.3" />
      <circle cx="85" cy="40" r="3" fill="white" opacity="0.3" />
      <circle cx="32" cy="70" r="4" fill="white" opacity="0.25" />
      <circle cx="88" cy="70" r="4" fill="white" opacity="0.25" />
    </svg>
  );
}

interface AnimatedButterflyProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: string;
  opacity: number;
  animation: {
    y: number[];
    x: number[];
    rotate: number[];
    duration: number;
    delay?: number;
  };
  colors: {
    gradient1: string;
    gradient2: string;
    body: string;
  };
  gradientId: string;
}

export function AnimatedButterfly({
  position,
  size,
  opacity,
  animation,
  colors,
  gradientId
}: AnimatedButterflyProps) {
  const positionStyles: any = { ...position };
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        ...positionStyles,
        width: size,
        height: size,
        opacity: opacity
      }}
      animate={{
        y: animation.y,
        x: animation.x,
        rotate: animation.rotate,
      }}
      transition={{
        duration: animation.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animation.delay || 0
      }}
    >
      <Butterfly colors={colors} gradientId={gradientId} />
    </motion.div>
  );
}
