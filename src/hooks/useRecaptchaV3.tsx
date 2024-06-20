import React, { useCallback, useEffect, useState } from 'react'

const useRecaptchaV3 = ({ SITE_KEY }) => {
	const [isRecaptchaReady, setIsRecaptchaReady] = useState(false)

	useEffect(() => {
		const loadRecaptchaScript = () => {
			if (window.grecaptcha) {
				setIsRecaptchaReady(true)
			} else {
				const script = document.createElement('script')
				script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
				script.async = true
				script.onload = () => setIsRecaptchaReady(true)
				document.head.appendChild(script)
			}
		}

		loadRecaptchaScript()
	}, [SITE_KEY])

	const executeRecaptcha = useCallback(
		async action => {
			if (isRecaptchaReady && window.grecaptcha) {
				try {
					return await window.grecaptcha.execute(SITE_KEY, { action })
				} catch (error) {
					console.error('Error executing reCAPTCHA:', error)
					return null
				}
			} else {
				console.warn('reCAPTCHA is not ready')
				return null
			}
		},
		[SITE_KEY, isRecaptchaReady],
	)

	return executeRecaptcha
}

export default useRecaptchaV3
