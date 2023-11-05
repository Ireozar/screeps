var roleHarvester = require("role.harvester");
module.exports.loop = function() {
  for (var i in Game.screeps) {
    var screep = Game.screeps[i];
    roleHarvester.run(screep);
  }
}
