import { Config } from "@/config"
import axios from "axios"
axios.defaults.withCredentials = true;

export class HttpClient {
  protected http!: any
  constructor() {
    let w: any = window
    let baseURL = w.__NUXT__.config.public.BASE_URL

    this.http = axios.create({
      baseURL: baseURL,
    })
    this.request()
    this.response()
  }
  private request() {
    this.http.interceptors.request.use((req: any) => {
      return req;
    })
  }
  private response() {
    this.http.interceptors.response.use((res: any) => {
      return res;
    }, (err: any) => {
      // if ([401].includes(err.response.status)) {
      //   window.location.pathname = "/auth/login"
      // }
    })
  }
}