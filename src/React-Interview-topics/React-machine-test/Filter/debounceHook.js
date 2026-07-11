import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState('');
    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => timeoutRef && clearTimeout(timeoutRef);
    }, [delay, value]);

    return debouncedValue;
}