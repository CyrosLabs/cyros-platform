const React = require('react');

const SvgMock = () => React.createElement('svg', { width: 0, height: 0, testID: 'svg-mock' });

module.exports = SvgMock;
module.exports.default = SvgMock;
module.exports.ReactComponent = SvgMock;
