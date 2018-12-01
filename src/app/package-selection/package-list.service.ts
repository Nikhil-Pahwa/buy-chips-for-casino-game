import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Package } from 'src/app/package-selection/package';
import { dummyPackages } from '../testing-utils/spy-constants';

@Injectable()
export class PackageListService {
  constructor(private http: HttpClient) {}

  getPackages(): Observable<Package[]> {
    // return this.http.get(this.configUrl);
    return of(dummyPackages);
  }
}
