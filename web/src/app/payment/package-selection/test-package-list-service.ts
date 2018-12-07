import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Package } from './package';
import { dummyPackages } from 'src/app/testing-utils/spy-constants';

@Injectable()
export class TestPackageListService {
  constructor() {}
  getPackages(): Observable<Package[]> {
    // Delay is added to mock asynchronous call
    // return of(dummyPackages).pipe(delay(1000));
    return of(dummyPackages);
  }
}
