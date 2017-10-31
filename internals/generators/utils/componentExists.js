/**
 * componentExists
 *
 * Check whether the given component exist in either the components or components directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const pagecomponents = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const components = pageComponents.concat(pagecomponents);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
