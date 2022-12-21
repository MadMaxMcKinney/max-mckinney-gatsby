const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
        container: {
            center: true,
        },
		extend: {
            boxShadow: {
                'cardHighlight': '0px 64px 194px 32px rgba(255, 255, 255, 0.09)'
            },
            backgroundSize: {
                '300%': '300%'
            },
            height: {
                "11/12": '95%',
                'header': '85vh',
                'header-mobile': '580px',
                'project-image': '650px'
            },
            minHeight: {
                '870px': '870px'
            },
            width: {
                "11/12": '95%',
                "content": '680px'
            },
            maxWidth: {
                "8xl": "1560px"
            },
            lineHeight: {
                'massive': '5.2rem'
            },
            screens: {
                'hover-supported': {'raw': '(hover)'},
            },
			colors: {
                blueblack: {
                    300: '#1C2030',
                    500: '#0f1015',
                },
                max: {
                    green: {
                        300: '#75965A',
                    },
                    yellow: {
                        300: '#F0A500'
                    },
                    red: {
                        300: '#F43E3E',
                    },
                    blue: {
                        300: '#325273',
                    },
                    purple: {
                        300: '#7F46C7',
                    },
                    pink: {
                        300: '#DB2777'
                    }
                },
                // Alias these names for the v2 -> v3 transition
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,
            },
            animation: {
                'pulse-right': 'pulsing-right 0.3s alternate infinite',
                'flow-background': 'flow 7.5s ease-in-out infinite',
                'fade-in-very-slow': 'fade-in 4s',
                'fade-in-slow': 'fade-in 3s',
                'fade-in': 'fade-in 2s',
                'fade-in-fast': 'fade-in 1s',
                'fade-in-up': 'fade-in-up 1s',
                'color-change': 'color-change 6s infinite'
            },
			keyframes: {
                'pulsing-right': {
                    'from': {transform: 'translateX(0)'},
                    'to': {transform: 'translateX(4px)'}
                },
				'fade-in': {
					'0%': { 
                        opacity: 0,
                        transform: 'translateY(-20px)' 
                    },
					'100%': { 
                        opacity: 1,
                        transform: 'translateY(0px)'
                    },
				},
                'fade-in-up': {
					'0%': { 
                        opacity: 0,
                        transform: 'translateY(20px)' 
                    },
					'100%': { 
                        opacity: 1,
                        transform: 'translateY(0px)'
                    },
				},
                'flow': {
                    '0%': {
                        'background-position': '0 50%'
                    },
                    '50%': {
                        'background-position': '100% 50%'
                    },
                    '100%': {
                        'background-position': '0 50%'
                    },
                },
                'color-change': {
                    '0%': {
                        color: '#19D18C'
                    },
                    '33%': {
                        color: '#F25E31'
                    },
                    '66%': {
                        color: '#28C0FD'
                    },
                    '100%': {
                        color: '#A866FD'
                    }
                }
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: '#ffffff',
                    
                        h1: {
                            color: '#fff'
                        },
                        h2: {
                            color: '#fff'
                        },
                        h3: {
                            color: '#fff'
                        },
                        h4: {
                            color: '#fff'
                        },
                    },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
