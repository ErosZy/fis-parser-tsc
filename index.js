const ts = require('typescript');

module.exports = (content, file, settings) => {
  content = ts.transpileModule(content, {
    compilerOptions: settings
  });
  return content.outputText || '';
};