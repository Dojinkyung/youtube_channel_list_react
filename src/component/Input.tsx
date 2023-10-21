import styles from "./input.module.scss";
const Input = () => {
  return (
    <div>
      <form className={styles.inputForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="API키를 입력하세요."
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};
export default Input;
