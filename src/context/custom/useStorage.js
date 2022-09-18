import { useState } from "react";

export function useStorage(selectStorage, key) {
    const
        [storageValue, setstorageValue] = useState(() => {
            const item = selectStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        }),
        setValue = value => {
            setstorageValue(value);
            selectStorage.setItem(key, JSON.stringify(value));
        };

    return [storageValue, setValue];
};