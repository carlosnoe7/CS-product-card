import React,{ useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';


interface Props{
    className?: string;
    style?: React.CSSProperties;
}


export const ProductButtons = ({className,style}:Props) => {


    const { increaseBy, counter,maxCount } = useContext( ProductContext );

    const isMaxReached=useCallback(
        () => {
            if (counter===maxCount) {
                return true;
            }
            else{
                return false;
            }
        },
        [counter,maxCount]
    )

    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={style}>
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={  `${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}
