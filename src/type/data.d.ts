export interface IExcel {
  YTURL: string;
  계정구분: string;
  변경전이름표기: string | null;
  사용불가채널: number | null;
  채널명: string;
  구독자: number | null;
  누적조회수: number | null;
  신규사용불가?: number;
  이름변경여부?: number;
  변경된이름?: string;
}
export interface Ireturn {
  title: string | undefined;
  subscriber: number | undefined;
  view: number | undefined;
}
