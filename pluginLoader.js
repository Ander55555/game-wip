export async function loadPlugins(player) {
  const plugin = await import("./plugins/scoreBoost.js");
  plugin.applyScoreBoost(player);
}
