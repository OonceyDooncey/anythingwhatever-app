type FuncType = (...args: any[]) => any;

export const debounce = <T extends FuncType>(func: T, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let immediate = true;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        if (immediate) {
            func.apply(this, args);
            immediate = false;
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            immediate = true;
        }, delay);
    };
};
