'use strict';

var index$4 = require('./index-eb724975.js');
var index$5 = require('./index-c0882747.js');

const [send, receive] = index$5.crossfade({
    duration: d => Math.sqrt(d * 300),
    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: index$4.quintOut,
            css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
        };
    }
});
