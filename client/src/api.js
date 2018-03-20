import { get } from './utils/httpHelper';

/**
 * @description Makes server request for username
 * @returns {JSON} username in JSON format
 */
export function getUsername() {
   return get("/user/name").then(res => res.json());
}