module.exports = {
	theme: {
		extend: {
            boxShadow: {
                'cardHighlight': '0px 64px 194px 32px rgba(255, 255, 255, 0.09)'
            },
            height: {
                "11/12": '95%'
            },
            width: {
                "11/12": '95%'
            },
            lineHeight: {
                'massive': '5.2rem'
            },
			colors: {
				gray: {
                    700: '#1c2030',
					900: '#0f1015',
				},
                blueblack: {
                    300: '#1C2030',
                    500: '#0f1015',
                },
                max: {
                    green: {
                        300: '#19D18C',
                    },
                    red: {
                        300: '#F25E31',
                    },
                    blue: {
                        300: '#28C0FD',
                    },
                    purple: {
                        300: '#A866FD',
                    }
                }
            },
            animation: {
                'pulse-right': 'pulsing-right 0.3s alternate infinite',
                'fade-in-slow': 'fade-in 3s',
                'fade-in': 'fade-in 2s',
                'fade-in-fast': 'fade-in 1s',
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
    ],
    variants: {
        extend: {
            animation: ['hover', 'focus', 'group-hover'],
            scale: ['active'],
            display: ['group-hover'],
            translate: ['group-hover'],
            brightness: ['hover']
        }
    }
}
