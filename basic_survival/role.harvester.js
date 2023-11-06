module.exports = {
  run(creep) {
    if (creep.store.getFreeCapacity() > 0) {
        var sources = creep.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else {
        if (creep.store(Game.spawns["Spawn1"],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns["Spawn1"]);
        }
    }
  }
};