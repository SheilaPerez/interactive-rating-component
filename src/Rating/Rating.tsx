import { Numbers, SubmitBtn } from "./Components";
import styles from './Rating.module.css';
import { useState } from "react";
import { Thankyou, Star } from "../Svg";

const Rating = () => {
    const [submitSelected, setSubmitSelected] = useState<Boolean>();
    const [number, setNum] = useState<number>();

  const submitBtnClicked = (submit: Boolean) => {
    setSubmitSelected(submit)
  } 

  const numSelected = (num: number) => {
    setNum(num)
  }

    return(
        <div className={styles.ratingContent}>
            {!submitSelected ? 
                <div>
                    <div className={styles.iconStar}>
                    <Star/>           
                    </div>
                    <h1 className={styles.question}>How did we do?</h1>
                    <h1 className={styles.description}>Please let us know how we did width your support request. All feedback is appreciated to help us improve our offering!</h1>
                    <Numbers numberSelected={numSelected}></Numbers>
                    <SubmitBtn submitBtn={submitBtnClicked}></SubmitBtn>
                </div>    
            : 
                <div className={styles.thanksContainer}>
                    <Thankyou></Thankyou>
                    <h2 className={styles.whatSelected}>You selected {number} out of 5</h2>
                    <h1 className={styles.thanks}>Thank you!</h1>
                    <p className={styles.description}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
                }
            
        </div>
    )
};

export default Rating;