define(["mobs","items","npcs","warrior","chest"],function(e,t,n,r,i){var s={};return s.createEntity=function(e,t,n){if(!e){log.error("kind is undefined",!0);return}if(!_.isFunction(s.builders[e]))throw Error(e+" is not a valid Entity type");return s.builders[e](t,n)},s.builders=[],s.builders[Types.Entities.WARRIOR]=function(e,t){return new r(e,t)},s.builders[Types.Entities.RAT]=function(t){return new e.Rat(t)},s.builders[Types.Entities.SKELETON]=function(t){return new e.Skeleton(t)},s.builders[Types.Entities.SKELETON2]=function(t){return new e.Skeleton2(t)},s.builders[Types.Entities.SPECTRE]=function(t){return new e.Spectre(t)},s.builders[Types.Entities.DEATHKNIGHT]=function(t){return new e.Deathknight(t)},s.builders[Types.Entities.GOBLIN]=function(t){return new e.Goblin(t)},s.builders[Types.Entities.OGRE]=function(t){return new e.Ogre(t)},s.builders[Types.Entities.CRAB]=function(t){return new e.Crab(t)},s.builders[Types.Entities.SNAKE]=function(t){return new e.Snake(t)},s.builders[Types.Entities.EYE]=function(t){return new e.Eye(t)},s.builders[Types.Entities.BAT]=function(t){return new e.Bat(t)},s.builders[Types.Entities.WIZARD]=function(t){return new e.Wizard(t)},s.builders[Types.Entities.BOSS]=function(t){return new e.Boss(t)},s.builders[Types.Entities.SWORD2]=function(e){return new t.Sword2(e)},s.builders[Types.Entities.AXE]=function(e){return new t.Axe(e)},s.builders[Types.Entities.REDSWORD]=function(e){return new t.RedSword(e)},s.builders[Types.Entities.BLUESWORD]=function(e){return new t.BlueSword(e)},s.builders[Types.Entities.GOLDENSWORD]=function(e){return new t.GoldenSword(e)},s.builders[Types.Entities.MORNINGSTAR]=function(e){return new t.MorningStar(e)},s.builders[Types.Entities.MAILARMOR]=function(e){return new t.MailArmor(e)},s.builders[Types.Entities.LEATHERARMOR]=function(e){return new t.LeatherArmor(e)},s.builders[Types.Entities.PLATEARMOR]=function(e){return new t.PlateArmor(e)},s.builders[Types.Entities.REDARMOR]=function(e){return new t.RedArmor(e)},s.builders[Types.Entities.GOLDENARMOR]=function(e){return new t.GoldenArmor(e)},s.builders[Types.Entities.FLASK]=function(e){return new t.Flask(e)},s.builders[Types.Entities.FIREPOTION]=function(e){return new t.FirePotion(e)},s.builders[Types.Entities.BURGER]=function(e){return new t.Burger(e)},s.builders[Types.Entities.CAKE]=function(e){return new t.Cake(e)},s.builders[Types.Entities.CHEST]=function(e){return new i(e)},s.builders[Types.Entities.GUARD]=function(e){return new n.Guard(e)},s.builders[Types.Entities.KING]=function(e){return new n.King(e)},s.builders[Types.Entities.VILLAGEGIRL]=function(e){return new n.VillageGirl(e)},s.builders[Types.Entities.VILLAGER]=function(e){return new n.Villager(e)},s.builders[Types.Entities.CODER]=function(e){return new n.Coder(e)},s.builders[Types.Entities.AGENT]=function(e){return new n.Agent(e)},s.builders[Types.Entities.RICK]=function(e){return new n.Rick(e)},s.builders[Types.Entities.SCIENTIST]=function(e){return new n.Scientist(e)},s.builders[Types.Entities.NYAN]=function(e){return new n.Nyan(e)},s.builders[Types.Entities.PRIEST]=function(e){return new n.Priest(e)},s.builders[Types.Entities.SORCERER]=function(e){return new n.Sorcerer(e)},s.builders[Types.Entities.OCTOCAT]=function(e){return new n.Octocat(e)},s.builders[Types.Entities.BEACHNPC]=function(e){return new n.BeachNpc(e)},s.builders[Types.Entities.FORESTNPC]=function(e){return new n.ForestNpc(e)},s.builders[Types.Entities.DESERTNPC]=function(e){return new n.DesertNpc(e)},s.builders[Types.Entities.LAVANPC]=function(e){return new n.LavaNpc(e)},s});