/**
 * Check fetch error
 * @module selectors/error-selector
 */

export const checkError = state => {
  const { error } = state;
  const errObj = {
    error: false,
    message: '',
  }

  if (error && error.usersFetchError) {
    return Object.assign({}, errObj, {
      error: true,
      message: error.usersFetchError, 
    })
  } else if (error && error.rolesFetchError) {
    return Object.assign({}, errObj, {
      error: true,
      message: error.rolesFetchError, 
    })
  } else   if (error && error.projectsFetchError) {
    return Object.assign({}, errObj, {
      error: true,
      message: error.projectsFetchError, 
    })
  }

  return errObj;
}
