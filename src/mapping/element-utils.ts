import elementMapRaw from './mapping.json';

const elementMap = elementMapRaw as Record<string, any>;

export function getSelector(section: string, element: string): string {
  const selector = elementMap?.[section]?.[element];
  if (!selector) {
    throw new Error(`Selector not found for ${section}.${element}`);
  }
  return selector;
}
