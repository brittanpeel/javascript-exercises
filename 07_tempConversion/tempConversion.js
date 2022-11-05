const ftoc = function (temp) {
    ftocConversion = ((temp - 32) * 5) / 9;
    let ftocRounded = Math.round(ftocConversion * 10) / 10;
    return ftocRounded;
};

const ctof = function (temp) {
    ctofConversion = (temp * 9) / 5 + 32;
    let ctofRounded = Math.round(ctofConversion * 10) / 10;
    return ctofRounded;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
