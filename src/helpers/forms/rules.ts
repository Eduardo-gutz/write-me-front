export const required = {
  value: true,
  message: "This field is required",
};

export const email = {
  value:
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/,
  message: "Must be a valid email address",
};

export const password = {
  value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/,
  message: "The password must have at least 8 characters, an uppercase letter, a lowercase letter, a number and a special character.",
};
