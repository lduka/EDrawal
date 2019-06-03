import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EdrawalRequest} from './default-landing-page/default-landing-page.component';

@Injectable({
  providedIn: 'root'
})
export class EdrawalDataServiceService {


  constructor(private  http: HttpClient) {
  }

  private _url = 'http://localhost:8080';

  getTransactions() {
    return this.http.get(this._url + '/getmockTrans');
  }

  edrawalRequest(edrawalRequest: EdrawalRequest) {
    return this.http.post(this._url + '/edrawalrequest', edrawalRequest)
      .subscribe(status => console.log(JSON.stringify(status)));
  }
}
