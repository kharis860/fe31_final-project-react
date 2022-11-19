export const ADDID = "ADDID";

export function addId(index) {
  return {
    type: ADDID,
    index,
  };
}
