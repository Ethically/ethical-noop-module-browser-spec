if (JSON.stringify(require('./noop.js')) !== '{}') {
    throw Error('Noop did not return an empty object.')
}

module.exports = 'ethical-noop-module-browser-spec/browser.js'
