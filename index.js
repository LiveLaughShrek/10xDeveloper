const engineer = require("10xengineer");
//engineer();
function * _10x () {
  yield new Promise((r) => process.nextTick(()=>{r(Math.ceil(Math.random()) ? "Boosting productivity 10x 👍💯" : new Error("You are not a 10x developer"))}))
}
module.exports = (async()=>{const b = _10x(); const c = await b.next().value; console.log(c);})();