//import styles from "./information.module.scss";

import TabBar from "../../component/TabBar";

const InfomationPage = () => {
  return (
    <div>
      <TabBar />
      <div>
        <h2>채널리스트 작업툴 사용하는 방법</h2>
        <p>
          채널리스트 페이지 사용법 1.구글 로그인 후 유튜브 api key를 발급
          받습니다
          https://console.cloud.google.com/marketplace/product/google/youtube.googleapis.com?hl=ko
          참고: 발급 순서 알려주는 링크 https://han-py.tistory.com/432 2. 채널
          정보를 가지고 있는 시트에서 채널명, 계정구분, 구독자수, 누적 조회수,
          채널url, 사용불가 채널, 변경 전 이름 표기를 제외한 라인들은 지워줍니다
          3. 채널 리스트 파일 돌리는 페이지로 넘어가서 발급받은 api키를 입력하고
          수정한 엑셀파일을 업로드합니다 4. api가 모든 채널들의 구독자수와
          조회수 입력을 완료할 때 까지 기다립니다(생각보다 오래걸립니다(3~4분))
          5.완료된 파일을 저장합니다 혹시라도 작동이 안된다면
          dojinkyung98@gmail.com로 메일 주세요!
        </p>
      </div>
    </div>
  );
};

export default InfomationPage;
