import { Component } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';
import IAlert from '../../Types/IAlert';

@Component({
  selector: 'app-data-btn',
  templateUrl: './data-btn.component.html',
  styleUrls: ['./data-btn.component.css']
})
export class DataBtnComponent {
  displayInfoPanel: boolean = false;
  operationResult: boolean = false;

  constructor(private alertsService: AlertsService) { }

  onClick() {
    this.displayInfoPanel = false;
    this.operationResult = false;
    this.alertsService.getAlertsCsv().subscribe(response => this.handleResponseSuccess(response), error => this.handleResponseFailed(error));
  }

  handleResponseSuccess(response: any) {
    this.operationResult = true;
    this.displayInfoPanel = true;

    var a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");
    const blob = new Blob([atob(response.fileContents)], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = response.fileDownloadName;
    a.click();
    window.URL.revokeObjectURL(url);

  }

  handleResponseFailed(error: any) {
    this.operationResult = false;
    this.displayInfoPanel = true;

    console.log(error);
  }
}
