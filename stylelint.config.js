// Source - https://stackoverflow.com/a
// Posted by Dhaifallah
// Retrieved 2026-01-05, License - CC BY-SA 4.0

module.exports = {
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
            }
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    }
}
