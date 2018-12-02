import { environment } from '../environments/environment';
export namespace AppSettings {
  export const devServer = environment.apiBaseUrl;
  export const productionServer = '';

  export const webServer: string = devServer;

  export const configUrl = {
    apiPackages: webServer + 'packages',
    apiPayments: webServer + 'payments'
  };
}
