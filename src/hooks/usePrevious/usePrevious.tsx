import {useRef, useEffect} from 'react';

// Хук для отслеживания предыдущего значения переменной
const usePrevious = <T,>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

export default usePrevious;