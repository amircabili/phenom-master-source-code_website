import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {  Observable , Subject} from 'rxjs';

const LOCAL_SERVER_URLS = {
  prod: 'assets/stubs/employees',
  dev: 'assets/stubs/employees',
  stub: 'assets/stubs/employees',
}

@Injectable({
  providedIn: 'root'
})

export class WorkersServiceService {

  // tslint:disable-next-line:variable-name
  public today: any;

  constructor(

  ) { }

  // tslint:disable-next-line:typedef
  async getWorkers()
  {
    const fetchParams = {
      method : 'GET',
      headers : {'Content-Type' : 'application/json'},
      secure : false,
    };
    const resp = await fetch(LOCAL_SERVER_URLS.stub   , fetchParams);
    const workersData = await resp.json();
    return workersData;
  }



}
