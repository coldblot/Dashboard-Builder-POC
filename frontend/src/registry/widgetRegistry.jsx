const registry = {};

export function registerWidget(definition) {
  registry[definition.type] = definition;
}

export function getWidget(type) {
  const widget = registry[type];
  if (!widget) throw new Error(`Widget type "${type}" is not registered`);
  return widget;
}

export function getAllWidgets() {
  return Object.values(registry);
}
