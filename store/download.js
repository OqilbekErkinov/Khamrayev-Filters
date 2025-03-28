import { defineStore } from "pinia";

export const useDownloadStore = defineStore("download", () => {
  async function downloadFile() {
    try {
      const fileUrl = "/requisites.doc";
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "requisites.doc";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
    }
  }
  return { downloadFile };
});
