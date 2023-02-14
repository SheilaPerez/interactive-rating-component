import { FC } from 'react';
import styles from './SubmitBtn.module.css';
interface Props {
    submitBtn: (submit: Boolean) => void;
}
const SubmitBnt: FC<Props> = ({submitBtn}) => {

    const handleClickSubmit = () => {
        submitBtn(true)
    }

    return(
        <div className={styles.submitBtnContent}>
            <button className={styles.submitBtn} onClick={handleClickSubmit}>submit</button>
        </div>
    )
};

export default SubmitBnt;