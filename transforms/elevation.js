const {toRgbaString} = require('../helpers/colorFormatter');

const boxShadow = {
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.attributes.category === 'elevation';
  },
  transformer: function (token) {
    const shadow1Val = token.value['0'];
    const shadow2Val = token.value['1'];
    const shadow1Color = toRgbaString(shadow1Val.color, shadow1Val.opacity);
    let elevation = `${shadow1Val.x}px ${shadow1Val.y}px ${shadow1Val.blur}px ${shadow1Val.spread}px ${shadow1Color}`;
    if (shadow2Val) {
      const shadow2Color = toRgbaString(shadow2Val.color, shadow2Val.opacity);
      const shadow2String = `${shadow2Val.x}px ${shadow2Val.y}px ${shadow2Val.blur}px ${shadow2Val.spread}px ${shadow2Color}`;
      elevation = `${elevation}, ${shadow2String}`;
    }
    return elevation;
  },
};

module.exports = {
  boxShadow,
};
