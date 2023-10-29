import React, { useState } from "react";
import * as XLSX from "xlsx";
import useChannelAPI from "../service/useChannelAPI";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const downloadData = useChannelAPI();

  const downloadExcel = () => {
    setDownloading(true);

    if (Array.isArray(downloadData) && downloadData.length > 0) {
      const worksheet = XLSX.utils.json_to_sheet(downloadData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "DataSheet.xlsx");

      setDownloading(false);
    }
  };

  return (
    <div>
      <button
        onClick={downloadExcel}
        disabled={downloading || downloadData.length === 0}
      >
        {downloading ? "Downloading..." : "Download DataSheet.xlsx"}
      </button>
    </div>
  );
};

export default DownloadButton;
