import isEmpty from './isempty';
import {isValidNumber, formatNumber, AsYouType} from 'libphonenumber-js';
import { CONFIRMED, CONFIRM_EMAIL_ERROR, CONFIRM_PASSWORD_ERROR, EMAIL, EMAIL_ERROR, ISCHECKED, ISVERIFIED, MIN_6_DIGITS, PHONE, PHONE_ERROR, REQUIRED } from './messages';

export const validateEmail = input => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  return regEx.test(input);
};

export const validateSameValue = (value1, value2) => {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
};

export const validatePhone = input => {
  const isValid = isValidNumber(input);
  return isValid;
};
export const checkIsCharGreaterThan6Digit = input => {
  if (input.length > 5) {
    return true;
  } else {
    return false;
  }
};

export const isPasswordValidate = input => {
  var regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regEx.test(input);
};

export const onFormFeildsChange = (event, formData, setFormData) => {
  const { name,value } = event.target;
  const newFormData = { ...formData };
  newFormData[name]["value"] = value;
  validateField(name, newFormData, setFormData);
  setFormData(newFormData);
};

export const enableShouldErrorShow = (event, formData, setFormData) => {
  const { name } = event?.target;
  const newFormData = { ...formData };
  newFormData[name]["shouldShowError"] = true;
  setFormData(newFormData);
};

export const disableShouldErrorShow = (event, formData, setFormData) => {
  const { name } = event?.target;
  const newFormData = {...formData};
  newFormData[name]['shouldShowError'] = false;
  setFormData(newFormData);
};

export const validateField = (fieldName, formDataOrignal, setFormData) => {
  const formData = {
    ...formDataOrignal,
  };
  const checkValidationArray = formData[fieldName]['check'];
  const fieldValue = formData[fieldName]['value'];
  let isValid = true;

  if (checkValidationArray?.includes(REQUIRED) && isEmpty(fieldValue)) {
    formData[fieldName]['error'] = REQUIRED;
    isValid = false;
  } else {
    formData[fieldName]['error'] = '';
  }

  if (checkValidationArray.includes(PHONE)) {
    if (checkValidationArray?.includes(REQUIRED)) {
      if (!isEmpty(fieldValue)) {
        if (validatePhone(fieldValue)) {
          isValid = true;
          formData[fieldName]['error'] = '';
        } else {
          formData[fieldName]['error'] = PHONE_ERROR;
          isValid = false;
        }
      }
      else {
        formData[fieldName]['error'] = REQUIRED;
        isValid = false;
      }
    }
  }

  if (checkValidationArray.includes(EMAIL)) {
    if (!isEmpty(fieldValue)) {
      if (validateEmail(fieldValue)) {
        isValid = true;
      } else {
        formData[fieldName]['error'] = EMAIL_ERROR;
        isValid = false;
      }
    } else {
      formData[fieldName]['error'] = REQUIRED;
      isValid = false;
    }
  }

  if (checkValidationArray.includes(ISCHECKED)) {
    if (!isEmpty(fieldValue)) {
      if (formData[fieldName]['value'] === 'False') {
        formData[fieldName]['error'] = ISCHECKED;
        isValid = false;
      } else {
        isValid = true;
      }
    } else {
      formData[fieldName]['error'] = ISCHECKED;
      isValid = false;
    }
  }
  if (checkValidationArray.includes(MIN_6_DIGITS)) {
    if (!isEmpty(fieldValue)) {
      if (checkIsCharGreaterThan6Digit(fieldValue)) {
        isValid = true;
      } else {
        formData[fieldName]['error'] = MIN_6_DIGITS;
        isValid = false;
      }
    } else {
      formData[fieldName]['error'] = REQUIRED;
      isValid = false;
    }
  }
  if (checkValidationArray.includes(ISVERIFIED)) {
    if (formData[fieldName]['IsVerified'] === true) {
      formData[fieldName]['error'] = '';
      isValid = true;
    } else if (
      formData[fieldName]['IsVerified'] === false &&
      isEmpty(fieldValue)
    ) {
      if (isEmpty(fieldValue)) {
        formData[fieldName]['error'] = REQUIRED;
        isValid = false;
      }
    }
  }

  setFormData(formData);
  return isValid;
};

export const formatPhoneNumber = value => {
  if (!value) return '';
  value = value.toString();
  if (value.includes('(') && !value.includes(')')) {
    return value.replace('(', '');
  }
  return new AsYouType('US').input(value);
};
