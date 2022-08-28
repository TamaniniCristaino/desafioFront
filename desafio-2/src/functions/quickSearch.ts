import { flatten } from 'flat';

export function stringIncludesAny(str: string, ...arr: any) {
  return arr.flat().some((srch: string) => str.includes(srch));
}
export function searchMatchesObject(obj: any, text: string) {
  return text.split(' ').every((word) => {
    return Object.keys(obj).some((key) => {
      if (stringIncludesAny(key, ['guid', 'id', 'created_at', 'updated_at'])) {
        return false;
      }

      if (obj[key]?.toString().toLowerCase().includes(word.toLowerCase())) {
        return true;
      }
      return false;
    });
  });
}
export default function quickSearch(array: any, searchText: string) {
  const results = array.filter((el: any) => {
    const flat = flatten(el);
    return searchMatchesObject(flat, searchText);
  });

  return results;
}
