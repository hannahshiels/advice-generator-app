async function catchError(apiCall) {
  try {
    const result = await apiCall;
    return result;
  } catch (err) {
    return err;
  }
}

export default catchError;
