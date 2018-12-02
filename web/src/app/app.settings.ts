export namespace AppSettings {
  export const devServer = '';
  export const productionServer = '';

  export const webServer: string = devServer;

  export const configUrl = {
    apiPackages: webServer + 'packages',
    apiPayments: webServer + 'payments'
  };
}
