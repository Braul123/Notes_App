
# Getting Started

## Ejemplo práctico

Esta aplicación creada en react native tiene como principal objetivo el control de notas personales de una persona. 
Está creada con la librería

```bash
react-native-cli
```
su estructura lógica está implementada con typescript y sus estilos son propios de la librería react native.

```bash
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   ...
})
```

# Inicie la aplicación

Como primer paso después de haber clonado este repositorio debe ejecutar el comando

```bash
   # Usando npm 
   npm install

   # O usando yarn
   yarn install
```

Si no tiene instalado el gestor de paquetes `yarn` puede seguir esta guía [instalación de gestor de paquetes yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

Una vez haya terminado la instalación de los paquetes, corra el comando que requiera según el tipo de dispositivo que está usando. Abra una nueva terminal desde la raíz del proyecto y ejecute el siguiente comando

### Para Android

```bash
# Usando npm
npm run android

# O usando Yarn
yarn android
```

### Para iOS

```bash
# Usando npm
npm run ios

# O usando Yarn
yarn ios
```
