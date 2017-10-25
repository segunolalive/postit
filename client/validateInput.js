import validator from 'validator';

const validateInput = (userInput) => {
  const errors = {};
  if (!validator.isMobilePhone(userInput.phoneNumber, 'en-NG')) {
    errors.phoneNumber = 'Phone number not valid';
  }
  if (!validator.matches(userInput.username, /^[a-zA-Z0-9_]*$/)) {
    errors.username = 'Username cannot contain special characters aside from _';
  }
  if (!validator.isLength(userInput.username, { min: 3 })) {
    errors.username = 'Username is too short';
  }
  // if (!validator.isEmpty(userInput.password)) {
  //   errors.password = 'Password cannot be empty';
  // }
  if (!validator.isLength(userInput.password, { min: 6 })) {
    errors.password = 'Password cannot be less than 6 characters';
  }
  if (!validator.matches(userInput.fullName, /^[a-zA-Z ]*$/)) {
    errors.fullName = 'Name can only be alphabets';
  }
  if (!validator.isLength(userInput.fullName, { min: 2 })) {
    errors.fullName = 'Name is too short';
  }
  if (!validator.isEmail(userInput.email)) {
    errors.email = 'Not a valid email address';
  }
  return {
    errors,
    isValid: Object.keys(errors).length > 0 ? null : 1,
  };
};

export default validateInput;