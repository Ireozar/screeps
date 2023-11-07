var roleHarvester = require("role.harvester");
module.exports.loop = function() {
  if (Game.screeps.length < 1) {
    Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE],"Harvester1",{memory:{role:"harvester"}});
  }
  for (var i in Game.creeps) {
    var creep = Game.creeps[i];
    switch (creep.memory.role) {
    	case "harvester":
    		roleHarvester.run(creep);
        	break;
    }
  }
}
