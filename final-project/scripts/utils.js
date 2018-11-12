/* Utils */

export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

export const $$ = (selector, context = document) => {
  return context.querySelectorAll(selector);
};
