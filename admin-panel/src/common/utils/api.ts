import axios from "axios";
import qs from "qs";
import AppConsts from "../../library/appconsts";

export const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      encode: false,
    });
  },
});
