
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require stepDefinitions/**/*.step.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
  
}
