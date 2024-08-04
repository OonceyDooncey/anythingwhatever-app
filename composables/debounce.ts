type FuncType = (...args: any[]) => any;

export const debounce = <T extends FuncType>(func: T, delay: number) => {
    const store = useGlobalStore();
    let timeoutId: ReturnType<typeof setTimeout>;
    let immediate = true;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        if (immediate) {
            func.apply(this, args);
            immediate = false;
            store.debounce = true;
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            immediate = true;
            store.debounce = false;
        }, delay);
    };
};
