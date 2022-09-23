// @ts-nocheck

/**
 * @description 防抖
 * @param {Function} fun
 * @param {number} wait
 */
function debounce(fun, wait) {
  let timeout, args, content, result;

  const debounced = function () {
    content = this;
    args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function () {
      result = fun.apply(content, args);
    }, wait);

    return result;
  };

  return debounced;
}

/**
 * @description 节流
 * @param {Function} fun
 * @param {number} wait
 */
function throttle(fun, wait) {
  let timeout, args, content, result;

  const throttled = function () {
    content = this;
    args = arguments;

    if (!timeout) {
      timeout = setTimeout(function () {
        result = fun.apply(content, args);
        timeout = null;
      }, wait);
    }

    return result;
  };

  return throttled;
}
