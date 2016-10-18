import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Partner } from './partner';

@Injectable()
export class PartnerService {
  // URL to web api
  private partnerUrl = 'http://localhost:3000/partners';

  constructor (private http: Http) { }

  getPartners(): Promise<Partner[]> {
    return this.http.get(this.partnerUrl + '/show')
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  // addPartner (name: string, address: string, city: string, province: string, postalCode: string, country: string): Promise<Partner> {
  //   let body = JSON.stringify({ name });
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(this.partnerUrl + '/add', body, options)
  //              .toPromise()
  //              .then(this.extractData)
  //              .catch(this.handleError);
  // }

  private extractData(res: Response) {
    return res.json() as Partner[];
  }

  private handleError (error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}