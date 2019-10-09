import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-austronauts-list',
  templateUrl: './austronauts-list.component.html',
  styleUrls: ['./austronauts-list.component.scss']
})
export class AustronautsListComponent implements OnInit {
  pageNumber = 1;
  list = [];
  constructor(
    private helper: HelperService,
    private router: Router) {
  }

  ngOnInit() {
    this.getListData();
  }
  getListData() {
    this.helper.getList(this.pageNumber).subscribe(res => {
      this.list = res.data;
    });
  }

  showDetails(id) {
    const index = this.list.findIndex(obj => obj.id === id);
    if (index !== -1) {
      this.helper.setSelectedAstronaut(this.list[index]);
      this.router.navigate(['astronaut']);
    }
  }

  changePage(isNext) {
    if (isNext) {
      this.pageNumber++;
    } else {
      this.pageNumber--;
    }
    this.getListData();
  }

  goToPageOne() {
    this.pageNumber = 1;
    this.getListData();
  }
}

