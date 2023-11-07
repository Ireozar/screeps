var roleHarvester = require("role.harvester");
module.exports.loop = function() {
  if (!Game.creeps.length) {
    Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE],"Harvester1",{memory:{role:"harvester"}});
  }
  if (Game.creeps.length < 2) {
    Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE],"Harvester2",{memory:{role:"harvester"}});
  }
  for (var i in Game.creeps) {
    if(!Game.creeps[i]) {
        delete Memory.creeps[i];
	    console.log('Clearing non-existing creep memory:', i);
    }
    var creep = Game.creeps[i];
    switch (creep.memory.role) {
    	case "harvester":
    		roleHarvester.run(creep);
        	break;
    }
  }
}
