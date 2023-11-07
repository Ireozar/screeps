var roleHarvester = require("role.harvester");
module.exports.loop = function() {
  for (var i in Game.creeps) {
    var creep = Game.creeps[i];
    switch (creep.memory.role) {
    	case "harvester":
    		roleHarvester.run(creep);
        	break;
    }
  }
}
