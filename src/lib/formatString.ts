export function formatString(date: string) {
  const vdata = new Date(date);
  return vdata.toLocaleString();
}