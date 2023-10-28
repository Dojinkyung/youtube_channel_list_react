import axios from "axios";
import { useQuery } from "react-query";
import { IExcel } from "../type/data";
import { useSelector } from "react-redux";
import { getApiKey } from "../redux/slice";
import ChangeData from "./ChangeData";

const useChannelData = (fileData: string, enabled: boolean) => {
  const key = useSelector(getApiKey);

  let jsonData: IExcel[] = [];
  if (fileData.length > 0) {
    jsonData = JSON.parse(fileData);
  }

  const { data: cachedData, status } = useQuery(
    "cachedData",
    async () => {
      const allData = await Promise.all(
        jsonData?.map(async (excelData) => {
          try {
            let trimmedUrl = excelData.YTURL.trim();
            let channelId = trimmedUrl.slice(-24);
            const response = await axios.get(
              `https://www.googleapis.com/youtube/v3/channels?key=${key}&id=${channelId}&part=snippet,statistics`
            );

            if (response.status === 200) {
              const title =
                response.data.items[0].snippet?.title || "제목 없음";
              const subscriber =
                response.data.items[0].statistics?.subscriberCount || undefined;
              const view =
                response.data.items[0].statistics?.viewCount || undefined;
              return ChangeData(excelData, title, subscriber, view);
            } else {
              throw new Error("API 응답 상태가 200이 아닙니다.");
            }
          } catch (error) {
            console.error("Error fetching channel data:", error);
            return null;
          }
        })
      );

      return allData;
    },
    {
      enabled: enabled,
      refetchOnWindowFocus: false,
    }
  );

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "error") {
    return "Error fetching data";
  }

  return cachedData || [];
};

export default useChannelData;
