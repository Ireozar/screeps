var roleHarvester = require("role.harvester");
module.exports.loop = function() {
  if (Game.screeps.length < 1) {
    Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE],"Harvester",{memory:{role:"harvester"}});
  }
  for (var i in Game.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
	    console.log('Clearing non-existing creep memory:', name);
    }
    var creep = Game.creeps[i];
    switch (creep.memory.role) {
    	case "harvester":
    		roleHarvester.run(creep);
        	break;
    }
  }
}
