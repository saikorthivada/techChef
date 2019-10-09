import { Injectable } from '@angular/core';
import { HttpCommonService } from './http-common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  data: any;
  constructor(private commonService: HttpCommonService) { }

  getList(pageNumber): Observable<any> {
    const url = 'https://reqres.in/api/users?page=' + pageNumber + '&per_page=5'
    return this.commonService.getCall(url);
  }

  setSelectedAstronaut(data) {
    this.data = data;
  }
  getSelectedAstronaut() {
    return this.data;
  }
}
