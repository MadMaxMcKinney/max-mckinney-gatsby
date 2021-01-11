module.exports = {
	theme: {
		extend: {
			colors: {
				gray: {
                    700: '#1c2030',
					900: '#0f1015',
				},
            },
            animation: {
                'pulse-right': 'pulsing-right 0.3s alternate infinite',
                'fade-in-slow': 'fade-in 3s',
                'fade-in': 'fade-in 2s',
                'fade-in-fast': 'fade-in 1s'  
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
            scale: ['active']
        }
    }
}
