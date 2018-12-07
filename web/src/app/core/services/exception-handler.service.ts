import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ExceptionHandler extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error: any): void {
    try {
      switch (error.status) {
        case 401:
          // TODO(npahwa) Need to move this hard coded url to config file or in environment variables.
          // Also need to do redirection with the help of services
          window.location.href = `${environment.apiBaseUrl}/authenticate`;
          break;
        case 403:
          // To do here route from here
          break;
        case 500:
          // To do here route from here
          break;
        default:
          // To do here route from here
          break;
      }
    } catch (ex) {
      throw ex;
    }
  }
}
