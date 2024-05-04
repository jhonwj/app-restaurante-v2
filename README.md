# restaurante-ionic

> A Ionic & capacitor cross-platform native and web app

## Requerimientos:
- NodeJS
- Ionic CLI last version
- Angular CLI 12
- Capacitor
- Cordova-Resources


## Build Setup

``` bash
# instalar las dependecias de node
npm install

# iniciar servidor hot reload en localhost:8100
ionic s

# build for production with minification
ionic build --prod --aot --minifyjs --minifycss --optimizejs

# Sincronizar con capacitor
npx cap sync

# Copiar recursos de capacitor
npx cap copy

# iniciar proyecto en android studio
npx cap open android

```

Para más detalles leer la documentación de ionic [Guia Ionic](https://ionicframework.com/docs) y capacitor [Guia Capacitor](https://capacitorjs.com/docs).
