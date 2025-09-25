import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Send, MessageCircle, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedFlowSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const steps = [
    {
      icon: Search,
      label: "Prospect & Qualify",
      tooltip: "We research and qualify your ICP.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      ringColor: "ring-blue-400"
    },
    {
      icon: Users,
      label: "Accounts Activated",
      tooltip: "Dedicated SDR accounts go live.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      ringColor: "ring-green-400"
    },
    {
      icon: Send,
      label: "Outreach Executed",
      tooltip: "Personalized LinkedIn outreach at scale.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      ringColor: "ring-purple-400"
    },
    {
      icon: MessageCircle,
      label: "Warm Replies",
      tooltip: "You receive replies and booked meetings.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      ringColor: "ring-teal-400"
    }
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || hoveredStep !== null) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500); // 10s total / 4 steps = 2.5s per step

    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion, hoveredStep, steps.length]);

  const handleStepHover = (index: number | null) => {
    setHoveredStep(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveStep(index);
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works (In 4 Quick Steps)
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A fast, continuous flow from prospecting to replies.
              </p>
            </div>
            {!prefersReducedMotion && (
              <button
                onClick={togglePlayPause}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Step cards */}
            <div className="flex items-center justify-between relative mb-16 px-24">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                const isHovered = hoveredStep === index;
                
                return (
                  <motion.div
                    key={index}
                    className="relative z-10"
                    onHoverStart={() => handleStepHover(index)}
                    onHoverEnd={() => handleStepHover(null)}
                    onFocus={() => handleStepHover(index)}
                    onBlur={() => handleStepHover(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Step ${index + 1}: ${step.label}`}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    <motion.div
                      className={`bg-white p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer min-w-[200px]
                        ${isActive || isHovered ? 'border-blue-200 shadow-xl' : 'border-gray-100'}
                      `}
                      animate={{
                        scale: isActive || isHovered ? 1.05 : 1,
                        opacity: isActive || isHovered ? 1 : 0.85,
                        y: isActive || isHovered ? -8 : 0,
                      }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    >
                      <motion.div
                        className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto relative`}
                        animate={{
                          scale: isActive ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                        {(isActive || isHovered) && !prefersReducedMotion && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl ring-4 ${step.ringColor} ring-opacity-50`}
                            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900 text-center whitespace-nowrap">
                        {step.label}
                      </h3>
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, type: "spring" }}
                          className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap z-30 shadow-xl"
                        >
                          {step.tooltip}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Sophisticated Progress Flow */}
            <div className="relative mt-12">
              {/* Background track - more visible */}
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 px-24">
                <div className="flex-1 h-2 bg-gray-200 rounded-full relative overflow-hidden shadow-inner">
                  {/* Animated gradient progress */}
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full shadow-sm"
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #14b8a6 100%)'
                    }}
                    animate={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                    transition={{ 
                      duration: prefersReducedMotion ? 0 : 2.0, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                  
                  {/* Animated shimmer effect */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                      animate={{
                        x: [`-64px`, `${((activeStep + 1) / steps.length) * 100}%`],
                      }}
                      transition={{
                        duration: 2.0,
                        ease: [0.4, 0, 0.2, 1],
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Connection nodes - more visible */}
              <div className="flex items-center justify-between relative z-10 px-24">
                {steps.map((_, index) => {
                  const isActive = activeStep === index;
                  const isPassed = activeStep > index;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Node - larger and more colorful */}
                      <motion.div
                        className="w-8 h-8 rounded-full border-4 border-white shadow-lg relative bg-white"
                        animate={{
                          backgroundColor: isPassed || isActive 
                            ? index === 0 ? '#3b82f6' 
                            : index === 1 ? '#10b981' 
                            : index === 2 ? '#8b5cf6' 
                            : '#14b8a6'
                            : '#e5e7eb',
                          scale: isActive ? 1.4 : 1,
                          boxShadow: isActive 
                            ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                            : '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        {/* Pulsing ring for active step - more visible */}
                        {isActive && !prefersReducedMotion && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-3 border-blue-400"
                            animate={{
                              scale: [1, 2, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>

                      {/* Floating particles for active step - more visible */}
                      {isActive && !prefersReducedMotion && (
                        <>
                          {[...Array(4)].map((_, particleIndex) => (
                            <motion.div
                              key={particleIndex}
                              className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-80"
                              style={{
                                left: '50%',
                                top: '50%',
                              }}
                              animate={{
                                x: [0, (Math.random() - 0.5) * 60],
                                y: [0, (Math.random() - 0.5) * 60],
                                opacity: [0.8, 0],
                                scale: [1, 0],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                delay: particleIndex * 0.2,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step labels below the progress */}
              <div className="flex items-center justify-between mt-8 px-24">
                {steps.map((step, index) => {
                  const isActive = activeStep === index;
                  
                  return (
                    <motion.div
                      key={index}
                      className="text-center max-w-[140px]"
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        y: isActive ? -4 : 0,
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-sm font-bold text-gray-800 mb-2">
                        Step {index + 1}
                      </div>
                      <div className="text-xs text-gray-600 leading-tight">
                        {step.tooltip}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Step cards with integrated progress */}
            <div className="space-y-8 relative">
              {/* Vertical progress track */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 rounded-full overflow-hidden">
                {/* Animated vertical progress */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full"
                  animate={{
                    height: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ 
                    duration: prefersReducedMotion ? 0 : 2.0, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
                
                {/* Animated glow effect */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 rounded-full"
                    animate={{
                      y: [`-32px`, `${((activeStep + 1) / steps.length) * 100}%`],
                    }}
                    transition={{
                      duration: 2.0,
                      ease: [0.4, 0, 0.2, 1],
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                )}
              </div>

              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                const isHovered = hoveredStep === index;
                const isPassed = activeStep > index;
                
                return (
                  <div key={index} className="relative">
                    <motion.div
                      className="flex items-start"
                      onHoverStart={() => handleStepHover(index)}
                      onHoverEnd={() => handleStepHover(null)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Step ${index + 1}: ${step.label}`}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      {/* Connection node */}
                      <div className="relative z-10 mr-6">
                        <motion.div
                          className="w-6 h-6 rounded-full border-4 border-white shadow-lg relative"
                          animate={{
                            backgroundColor: isPassed || isActive 
                              ? index === 0 ? '#3b82f6' 
                              : index === 1 ? '#10b981' 
                              : index === 2 ? '#8b5cf6' 
                              : '#14b8a6'
                              : '#e5e7eb',
                            scale: isActive ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.3, type: "spring" }}
                        >
                          {/* Pulsing ring for active step */}
                          {isActive && !prefersReducedMotion && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-blue-400"
                              animate={{
                                scale: [1, 1.6, 1],
                                opacity: [0.8, 0, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </motion.div>

                        {/* Floating particles for active step */}
                        {isActive && !prefersReducedMotion && (
                          <>
                            {[...Array(2)].map((_, particleIndex) => (
                              <motion.div
                                key={particleIndex}
                                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                                style={{
                                  left: '50%',
                                  top: '50%',
                                }}
                                animate={{
                                  x: [0, Math.random() * 30 - 15],
                                  y: [0, Math.random() * 30 - 15],
                                  opacity: [0.6, 0],
                                  scale: [1, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: particleIndex * 0.4,
                                  ease: "easeOut"
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>

                      {/* Step content */}
                      <motion.div
                        className="flex-1"
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0.8,
                          x: isActive || isHovered ? 4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className={`w-12 h-12 ${step.bgColor} rounded-lg flex items-center justify-center mb-3 relative`}
                          animate={{
                            scale: isActive || isHovered ? 1.1 : 1,
                          }}
                        >
                          <IconComponent className={`w-6 h-6 ${step.color}`} />
                          {(isActive || isHovered) && !prefersReducedMotion && (
                            <motion.div
                              className={`absolute inset-0 rounded-lg ring-2 ${step.ringColor} ring-opacity-50`}
                              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          )}
                        </motion.div>
                        
                        <div className="text-sm font-semibold text-gray-500 mb-1">
                          Step {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {step.label}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.tooltip}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live region for accessibility */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Current step: {steps[activeStep].label}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Learn More About Our Process
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFlowSection;