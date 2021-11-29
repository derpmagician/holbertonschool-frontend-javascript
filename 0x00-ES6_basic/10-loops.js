export default function appendToEachArrayValue(array, appendString) {
  const list_new = [];
  for (const value of array) {
    list_new.push(appendString + value);
  }

  return list_new;
}
