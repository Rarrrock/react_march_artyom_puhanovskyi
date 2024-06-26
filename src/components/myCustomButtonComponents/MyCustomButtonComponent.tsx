import React, {FC, useState} from "react";
import styles from './my-custom-button-component.module.css';

{// компонент лучше всего обворачивать в круглые скобки, для безопасного перемещения между версиями (иногда может давать сбои, если этого не сделать)
}

interface IProps {
    children: React.ReactNode,
    label:string,
}
const MyCustomButtonComponent: FC<IProps> = ({label,nameOfClass,children}) => {

    const [counter, setCounter] = useState(0);
    const someClickHandler = () => {
        setCounter(counter +1);
        console.log(counter)
    }

    return (
        <>
            <span>{label}</span>
            <button
                className={[styles.btnFontColor, styles.btnFontSize].join(' ')}
                onClick={() => someClickHandler()}
            >
                {children} {counter}
            </button>
        </>
    )
}

export default MyCustomButtonComponent;
