import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-austronaut-information',
  templateUrl: './austronaut-information.component.html',
  styleUrls: ['./austronaut-information.component.scss']
})
export class AustronautInformationComponent implements OnInit {
  austronautInfo = {};
  constructor(private helperService: HelperService) {
    this.austronautInfo = this.helperService.getSelectedAstronaut();
  }

  ngOnInit() {
  }

}
