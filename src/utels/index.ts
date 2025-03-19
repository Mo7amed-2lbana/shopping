/**
 * Truncates a description to a specified length and appends "..." if it exceeds the limit.
 *
 * @param {string} description - The original text.
 * @param {number} length - The maximum allowed length.
 * @returns {string} - The truncated text if it exceeds the limit, otherwise the original text.
 *
 * @example
 * console.log(handelDescriptionLength("Welcome to JavaScript", 10));
 * // Output: "Welcome to..."
 */
export const handelDescriptionLength = (
  description: string,
  length: number = 50
) => {
  if (description.length <= length) return description;
  return description.slice(0, length) + "...";
};
