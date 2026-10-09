import { IConfigToLib } from "tool-config-to-lib";

export const configFromApp: IConfigToLib = {
  apiUrl: 'https://api.example.com',
  log: (m: any) => console.log('!!! Из приложения конфиг - ', m)
};
