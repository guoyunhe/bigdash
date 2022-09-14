export function getProp(object: any, path: string | string[]): any {
  const keys = Array.isArray(path) ? path : path.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return getProp(object, keys.slice(1));
  }
  return object;
}
