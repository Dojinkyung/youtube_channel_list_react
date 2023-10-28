import { IExcel } from "../type/data";
const ChangeData = (
  excelData: IExcel,
  title: string,
  subscriber: number,
  view: number
) => {
  // 데이터가 정상적으로 가져와지지 않은 경우 처리
  if (title === undefined) {
    excelData.신규사용불가 = true;
    excelData.구독자 = 0;
    excelData.누적조회수 = 0;
    excelData.사용불가채널 = true;
  } else {
    // 데이터가 정상적으로 가져와진 경우
    excelData.구독자 = subscriber;
    excelData.누적조회수 = view;

    // 채널명이 변경된 경우 처리
    if (title !== excelData.채널명) {
      excelData.이름변경여부 = true;
      excelData.변경된이름 = title;
    }
  }
  return excelData;
};

export default ChangeData;
