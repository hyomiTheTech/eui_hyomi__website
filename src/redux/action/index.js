import { GET_PROJECT_PROPERTIES } from "../constants/action-type";

export function getProjectProperties(payload) {
  return { type: GET_PROJECT_PROPERTIES, payload };
}
