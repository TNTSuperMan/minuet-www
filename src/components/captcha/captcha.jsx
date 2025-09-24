const bindAll = require('lodash.bindall');
const PropTypes = require('prop-types');
const React = require('react');

class Captcha extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'setCaptchaRef',
            'onCaptchaLoad',
            'executeCaptcha',
            'onCaptchaSolved'
        ]);

    }
    componentDidMount () {
        if (window.turnstile) {
            this.onCaptchaLoad();
        } else {
            // If grecaptcha doesn't exist on window, we havent loaded the captcha js yet. Load it.
            // ReCaptcha calls a callback when the grecatpcha object is usable. That callback
            // needs to be global so set it on the window.
            window.captchaOnLoad = this.onCaptchaLoad;
            // Load Google ReCaptcha script.
            const script = document.createElement('script');
            script.async = true;
            script.onerror = this.props.onCaptchaError;
            script.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=captchaOnLoad`;
            document.body.appendChild(script);
        }
    }
    componentWillUnmount () {
        window.captchaOnLoad = null;
    }

    onCaptchaLoad () {
        // Let the owner of this component do some work
        // when captcha is done loading (e.g. enabling a button)
        this.props.onCaptchaLoad();
        this.turnstile = window.turnstile;
        if (!this.turnstile) {
            // According to the reCaptcha documentation, this callback shouldn't get
            // called unless window.grecaptcha exists. This is just here to be extra defensive.
            this.props.onCaptchaError();
            return;
        }
        if (!process.env.TURNSTILE_SITE_KEY) {
            return;
        }
        this.widgetId = this.turnstile.render(this.captchaRef,
            {
                callback: this.onCaptchaSolved,
                sitekey: process.env.TURNSTILE_SITE_KEY
            },
            true);
    }
    onCaptchaSolved (token) {
        this.captchaToken = token;
    }
    setCaptchaRef (ref) {
        this.captchaRef = ref;
    }
    executeCaptcha () {
        this.props.onCaptchaSolved(this.captchaToken || '');
    }
    render () {
        return (
            <div
                className="g-recaptcha"
                ref={this.setCaptchaRef}
            />
        );
    }
}
Captcha.propTypes = {
    onCaptchaError: PropTypes.func.isRequired,
    onCaptchaLoad: PropTypes.func.isRequired,
    onCaptchaSolved: PropTypes.func.isRequired
};
module.exports = Captcha;
