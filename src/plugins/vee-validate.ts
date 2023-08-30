export const required = (value: string) => {
  if (!value || !value.length) {
    return 'Field required'
  }
  return true
}

export const minLength = (value: string) => {
  if (value.length < 8) {
    return 'The password must be at least 8 characters.'
  }
  return true
}

export const confirmed = (value: string, [target]) => {
  if (value === target) {
    return true
  }
  return 'Passwords must match'
}
