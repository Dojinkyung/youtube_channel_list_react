import Input from "../../component/Input";
import TabBar from "../../component/TabBar";
import styles from "./converting.module.scss";
const ConvertingPage = () => {
  return (
    <main className={styles.centering}>
      <TabBar />
      <h1 className={styles.title}>유튜브 채널 정보 추출하기</h1>
      <div className={styles.elements}>
        <Input />
      </div>
    </main>
  );
};

export default ConvertingPage;
