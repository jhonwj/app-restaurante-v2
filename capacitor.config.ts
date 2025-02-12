import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.neurofood.restaurante',
  appName: 'Neuro Food',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      launchShowDuration: 4000,
      launchAutoHide: false
    }
  }
};

export default config;
