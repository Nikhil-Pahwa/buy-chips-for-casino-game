import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Package } from 'src/app/package-selection/package';
import { AppSettings } from '../app.settings';

@Injectable()
export class PackageListService {
  constructor(private http: HttpClient) {}

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>(AppSettings.configUrl.apiPackages);
  }
}
