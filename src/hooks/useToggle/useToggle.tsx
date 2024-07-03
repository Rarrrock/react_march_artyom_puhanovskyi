import {useState, useCallback} from 'react';

// Хук для переключения значения между true и false
const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue((prevValue) => !prevValue);
    }, []);

    return [value, toggle];
};

export default useToggle;
