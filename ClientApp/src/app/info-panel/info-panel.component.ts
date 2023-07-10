import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent {
  @Input() displayOk: boolean = true;

  okMessage: string = "Operacja zakończona powodzeniem";
  notOkMessage: string = "Operacja nie powiodła się";
}
