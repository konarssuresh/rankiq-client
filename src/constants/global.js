export const REGEX = {
  PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const ERROR_MESSAGE = {
  PASSWORD: 'Weak or invalid password',
  EMAIL: 'Invalid email',
  REQUIRED: 'This field is required',
};
