import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-check-request',
  templateUrl: './check-request.component.html',
  styleUrls: ['./check-request.component.css']
})
export class CheckRequestComponent implements OnInit {
  ipaddress;
  deviceInfo;
  propsToShow = ['userAgent', 'os', 'browser', 'device', 'os_version', 'browser_version'];

  constructor(private http: HttpClient,
    private deviceService: DeviceDetectorService) { }

  getIpAddress() {
    console.log('run');
    this.http.get<any>('http://freegeoip.net/json/?callback')
      .map(x => x || {})
      .subscribe(
      data => {
        this.ipaddress = data.ip;
      },
      err => {
        console.log(err);
      }
      );
  }

  ngOnInit() {
    this.getIpAddress();
    // this.deviceInfo = JSON.stringify(this.deviceService.getDeviceInfo());
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }
}
