/**
 * Default options for the html-webpack-plugin HTML renderer
 *
 * See https://github.com/ampedandwired/html-webpack-plugin#configuration
 * for possible options. Any other options will be available to the template
 * under `htmlWebpackPlugin.options`
 */

module.exports = {
    // html-webpack-plugin options
    template: './src/template.ejs',
    inject: false,

    // Search and metadata
    title: 'Free, Simple, Lightweight',
    description:
        'minuet is a free programming community program',

    // override if mobile-friendly
    viewportWidth: 'device-width'
};
