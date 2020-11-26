module.exports = {
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#0f1015',
				},
            },
            animation: {
                'pulse-right': 'pulsing-right 0.3s alternate infinite'
            },
			keyframes: {
                'pulsing-right': {
                    'from': {transform: 'translateX(0)'},
                    'to': {transform: 'translateX(4px)'}
                },
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'focus', 'group-hover'],
            scale: ['active']
        }
    }
}
