const sveltePreprocess = require('svelte-preprocess');
const pkg = require('./package.json');

module.exports = {
    // ... truncated ...
    kit: {
        target: '#svelte',
        adapter: require('@sveltejs/adapter-static')(),
// ... truncated ...
    }
};