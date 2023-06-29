const emptyProxyObject = new Proxy({}, {});
const isEmpty = val => {
  if (val === emptyProxyObject) return true;
  if (val === undefined) return true;

  if (
    typeof val == 'function' ||
    typeof val == 'number' ||
    typeof val == 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  )
    return false;

  if (val == null || val.length === 0)
    // null or 0 length array
    return true;

  if (typeof val == 'object') if (Object.keys(val).length === 0) return true;

  return false;
};

export default isEmpty;
