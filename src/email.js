import { isValidEmail } from './validator.js';

/**
 * 멤버 배열에서 email 필드를 추출한다.
 * @param {Array<{ email?: string }>} members - 멤버 객체 배열
 * @returns {string[]} 추출된 이메일 배열
 */
export function extractEmails(members) {
  if (!Array.isArray(members)) {
    return [];
  }
  return members.map((member) => member.email);
}

/**
 * 멤버 배열에서 유효한 이메일만 필터링한다.
 * @param {Array<{ email?: string }>} members - 멤버 객체 배열
 * @returns {string[]} 유효한 이메일 배열
 */
export function getValidEmails(members) {
  return extractEmails(members).filter(isValidEmail);
}

/**
 * 멤버 배열에서 유효한 이메일을 추출하고 중복을 제거한다.
 * @param {Array<{ email?: string }>} members - 멤버 객체 배열
 * @returns {string[]} 중복 없는 유효 이메일 배열
 */
export function uniqueValidEmails(members) {
  return [...new Set(getValidEmails(members))];
}

export { isValidEmail };
