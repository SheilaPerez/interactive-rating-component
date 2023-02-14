import { FC, useState } from 'react';
import styles from './Numbers.module.css';
interface Props {
    numberSelected: (num: number) => void;
}

const Numbers: FC<Props> = ({numberSelected}) => {
    const nums = [1, 2, 3, 4, 5];
    const [numSelected, setNumSelected] = useState(0);

    const handleclicknumSelect = (num: number) => {
        setNumSelected(num);
        numberSelected(num)
    }

    return(
        <div className={styles.numsContent}>
            {nums.map((num, index) => {
                return(
                    <div className={numSelected === num ? styles.numSelected : styles.num} onClick={() => handleclicknumSelect(num)}>
                        <p key={index}>{num}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Numbers;