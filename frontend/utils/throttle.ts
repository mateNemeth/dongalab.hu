export const throttle = (fn: { (arg0: unknown): void; (...args: unknown[]): void; }, wait = 200): (params: unknown) => void => {
  let timer: NodeJS.Timeout;
  let time = Date.now();

  return (params: unknown) => {
    clearTimeout(timer);

    if (time + wait - Date.now() < 0) {
      fn(params);
      time = Date.now();
    } else {
      timer = setTimeout(fn, wait / 5);
    }
  };
};