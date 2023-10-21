//import styles from "./converting.module.scss";

import TabBar from "../../component/Header";

const ConvertingPage = () => {
  return (
    <div>
      <TabBar />
      <h2>유튜브 채널 정보 추출하기</h2>
      <input type="file" />
      <input type="text" />
      <button>제출</button>
    </div>
  );
};

export default ConvertingPage;
