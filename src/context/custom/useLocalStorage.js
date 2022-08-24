import { useState } from "react";

export function useLocalStorage (key) {
    const
        [localValue, setLocalValue] = useState(() => {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        }),
        setValue = value => {
            setLocalValue(value);
            localStorage.setItem(key, JSON.stringify(value))
        };

    return [localValue, setValue];
};