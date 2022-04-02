import { get } from "@vueuse/shared";
import axios from "axios";

export const getStock = (data) => {
  return axios({
    url: "https://mops.twse.com.tw/mops/web/ajax_t05st09_1",
    method: get,
    data: data,
  });
};
