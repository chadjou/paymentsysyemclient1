import { Component } from "@angular/core";
import { ConfigService } from "./config/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "payment-client";

  config: string[];

  constructor(private configService: ConfigService) {}

  showConfig_v1() {
    this.configService
      .getConfig()
      .subscribe((data: string[]) => (this.config = data));
  }

  onClickMe() {
    this.showConfig_v1();
  }

  onClickMe2() {
    console.log(this.config);
  }
}
