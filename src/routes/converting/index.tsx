import { useEffect, useState } from "react";
import DownloadButton from "../../component/DownloadButton";
import ExcelUploader from "../../component/ExcelUploader";
import Input from "../../component/Input";
import TabBar from "../../component/TabBar";
import styles from "./converting.module.scss";
import { useDispatch } from "react-redux";
import useChannelAPI from "../../service/useChannelAPI";
import { setExistence } from "../../redux/slice";

const ConvertingPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<boolean>(false);
  const download = useChannelAPI();

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setState(true);
    console.log("데이터:", download);
  };
  useEffect(() => {
    if (state) {
      dispatch(setExistence(state));
    }
  }, [dispatch, state]);
  return (
    <main className={styles.centering}>
      <TabBar />
      <div className={styles.elements}>
        <h1 className={styles.title}>유튜브 채널 정보 추출하기</h1>
        <Input />
        <ExcelUploader />
        <button onClick={onClick}>변경하기</button>
        <DownloadButton />
      </div>
    </main>
  );
};

export default ConvertingPage;
