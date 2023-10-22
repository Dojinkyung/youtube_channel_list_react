import { ChangeEvent, useEffect, useState } from "react";
import styles from "./input.module.scss";
import { useDispatch } from "react-redux";
import { setApiKey } from "../redux/slice";
const Input = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };
  useEffect(() => {
    dispatch(setApiKey(key));
  }, [dispatch, key]);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setApiKey(key));
    console.log(key);
  };
  return (
    <form className={styles.inputForm} onSubmit={onSubmit}>
      <input
        className={styles.input}
        onChange={onChange}
        type="text"
        placeholder="API키를 입력하세요."
      />
      <button type="submit">제출</button>
    </form>
  );
};
export default Input;
