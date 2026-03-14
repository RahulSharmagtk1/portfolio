/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FF87',
        secondary: '#FF6B6B',
        accent: '#7B61FF',
        'accent-blue': '#00D4FF',
        bg: '#030303',
        'bg-secondary': '#080808',
        'bg-card': '#0a0a0a',
        'text-muted': '#666666',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Manrope', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'terminal-blink': 'terminalBlink 1s step-end infinite',
        'neon-pulse': 'neonPulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'crt': 'crtFlicker 8s infinite',
      },
      keyframes: {
        terminalBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 135, 0.3), 0 0 20px rgba(0, 255, 135, 0.1)' },
          '50%': { boxShadow: '0 0 10px rgba(0, 255, 135, 0.6), 0 0 40px rgba(0, 255, 135, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        crtFlicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        },
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 255, 135, 0.3)',
        'neon': '0 0 20px rgba(0, 255, 135, 0.4)',
        'neon-lg': '0 0 40px rgba(0, 255, 135, 0.3)',
        'neon-purple': '0 0 20px rgba(123, 97, 255, 0.4)',
        'neon-red': '0 0 20px rgba(255, 107, 107, 0.4)',
      },
    },
  },
  plugins: [],
};