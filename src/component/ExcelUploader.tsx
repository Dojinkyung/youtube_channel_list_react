import styles from "./excelUploader.module.scss";
import { useDispatch } from "react-redux";
import { setExcel } from "../redux/slice";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const dispatch = useDispatch();
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const result = e.target?.result;

          if (result) {
            const workbook = XLSX.read(result, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log("변경완료");
            const jsonData = JSON.stringify(json);
            console.log("JSON 데이터:", jsonData);

            dispatch(setExcel(jsonData));
          }
        };

        reader.readAsArrayBuffer(file); // 파일을 읽어옴
      }
    }
  };

  return (
    <form className={styles.inputForm}>
      <input
        className={styles.input}
        type="file"
        placeholder="첨부파일"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
    </form>
  );
};

export default ExcelUploader;
