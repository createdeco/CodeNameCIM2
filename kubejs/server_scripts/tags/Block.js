ServerEvents.tags("block", (event) => {
	event.get("forge:ores")
		.add("ad_astra:moon_cheese_ore")

	event.get("forge:ores/cheese")
		.add("ad_astra:moon_cheese_ore")

	event.get(`${global.namespace}:nether_farmland`)
		.add("minecraft:soul_sand")
		.add("minecraft:soul_soil")
		.add("mynethersdelight:resurgent_soil")
		.add("mynethersdelight:resurgent_soil_farmland")
})