import { defineStore } from "pinia";

export const useDownloadStore = defineStore("download", () => {
  async function downloadFile() {
    try {
      const fileUrl = "/requisites.doc";
      console.log("Starting download process...");
      console.log("Fetching file from:", fileUrl);

      const response = await fetch(fileUrl);
      console.log("Fetch response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      console.log("File successfully fetched as a Blob:", blob);

      const url = window.URL.createObjectURL(blob);
      console.log("Blob URL created:", url);

      const a = document.createElement("a");
      a.href = url;
      a.download = "requisites.doc";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      console.log("Download triggered successfully");

      // Clean up
      window.URL.revokeObjectURL(url);
      console.log("Temporary URL revoked");
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  }

  return { downloadFile };
});
