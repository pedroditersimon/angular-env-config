# Variables de entorno en Angular v16

Aprende a usar variables de entorno en Angular 16 para proteger información sensible. Configúralas en tu sistema o en un archivo `.env` privado.

## 1. Configurar process.env en TypeScript

Instala los tipos de Node.js para reconocer `process.env`:

```bash
npm i @types/node -D
```

Agrega en `tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "types": ["node"]
  }
}
```

## 2. Configurar Custom Webpack

Instala el builder compatible con Angular 16:

```bash
npm i @angular-builders/custom-webpack@16 -D
```

Modifica estos valores en `angular.json`:

```json
{
  "build": {
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        "path": "src/custom-webpack.config.ts"
      }
    }
  },
  "serve": {
    "builder": "@angular-builders/custom-webpack:dev-server"
  }
}
```

## 3. Plugin Dotenv Webpack

Instala el plugin para cargar variables:

```bash
npm i -D dotenv-webpack
```

Crea `src/custom-webpack.config.ts`:

```typescript
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [new Dotenv({ systemvars: true })],
};
```

La opción `systemvars: true` indica que el plugin debe leer también las variables del sistema.

## 4. Definir variables de entorno

Luego en el archivo `.env` establece tus variables:

```bash
API_KEY=apikey_521555
MY_SECRET_VAR=sv123
```

_O establece las variables en tu sistema Windows:_

```bash
set API_KEY=apikey_521555
set MY_SECRET_VAR=sv123
```

## 5. Configurar environment.ts

Genera el archivo de entornos de Angular:

```bash
ng generate environment
```

Y carga tus variables:

```typescript
export const environment = {
  production: true,
  API_KEY: process.env["API_KEY"],
  MY_SECRET_VAR: process.env["MY_SECRET_VAR"],
};
```

## 6. Usar variables en la aplicación

Finalmente, importa el entorno y accede a las variables:

```typescript
import { environment } from 'src/environments/environment';

@Component({...})
export class AppComponent {
  constructor() {
    console.log(environment.API_KEY); // Muestra tu API key
  }
}
```

## Referencias

- Dotenv Webpack [npmjs.com](https://www.npmjs.com/package/dotenv-webpack)
- Tutorial en video [CodeShotsWithProfanis](https://www.youtube.com/watch?v=7ljEz52zdUM)
