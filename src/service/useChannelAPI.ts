import { useSelector } from "react-redux";
import { getExcel, getExistence } from "../redux/slice";
import useChannelData from "./useChannelData";

const useChannelAPI = () => {
  const existence = useSelector(getExistence);
  const fileData = useSelector(getExcel);
  const changedData = useChannelData(fileData, existence);
  console.log("나온 데이터", changedData, existence);
  return changedData;
};

export default useChannelAPI;
