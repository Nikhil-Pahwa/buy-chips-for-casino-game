import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Package } from 'src/app/package-selection/package';
import { dummyPackages } from '../testing-utils/spy-constants';

@Injectable()
export class TestPackageListService {
  constructor() {}
  getPackages(): Observable<Package[]> {
    return of(dummyPackages);
  }
}
