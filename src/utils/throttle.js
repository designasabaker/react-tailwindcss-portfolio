export function throttle(func, delay) {
    let timerId;
    let lastExecutedTime = 0;

    return function (...args) {
        const currentTime = Date.now();

        if (currentTime - lastExecutedTime > delay) {
            lastExecutedTime = currentTime;
            func.apply(this, args);
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                lastExecutedTime = currentTime;
                func.apply(this, args);
            }, delay);
        }
    };
}

export default throttle;