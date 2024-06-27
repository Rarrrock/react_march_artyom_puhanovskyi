import React, {FC} from 'react';
import styles from './my-custom-person-component.module.css';


interface IProps {
    nameOfClass: string;
    children: React.ReactNode;
    age: number;
    img: string;
}

const MyCustomPersonComponent: FC <IProps> = ({nameOfClass, age, img, children}) => {

    return (
        <div className={[styles.backColor, styles.boredRadius].join(' ')}>
            <h2>{nameOfClass}</h2>
            <h3>{age}</h3>
            <img src={img} alt={nameOfClass}/>
            <p>{children}</p>
        </div>
    );
};

export default MyCustomPersonComponent;