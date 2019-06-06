

import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.242:9000/zcc";

// 拦截器  

// export default axios;
export const http = axios;
export const https = "http://192.168.0.242:9000/cli";

