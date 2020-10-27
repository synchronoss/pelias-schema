// The shapeType must be defined as either 'shape' or 'polygon'
global.shapeType = "polygon";

const schema = {
  settings: require('./settings')(),
  mappings: require('./mappings/document'),
};

module.exports = schema;
