import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor(private http: HttpClient) {}
  configUrl = "https://localhost:44353/api/values";

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
