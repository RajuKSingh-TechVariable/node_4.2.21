const sanitization = {
  type: 'class',
  properties: {
    userName: { type: 'string', rules: ['trim', 'lower'] },
    password: { type: 'string', rules: ['trim', 'title'] },
  },
};

const validation = {
  type: 'class',
  properties: {
    userName: {
      type: 'string',
      minLength: 5,
      pattern: ['alpha', 'email'],
      error: 'hdkvgrgfvkjwehf',
    },
    password: {
      type: 'string',
      minLength: 5,
      pattern: ['alpha', 'alphaNumeric', 'alphaDash', '[A-Za-Z]@'],
    },
  },
};
module.exports = {
  validation,
  sanitization,
};
