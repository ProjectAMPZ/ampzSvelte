'use strict';

require('./index-7460d1f3.js');

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}

exports.cubicOut = cubicOut;
exports.quintOut = quintOut;
