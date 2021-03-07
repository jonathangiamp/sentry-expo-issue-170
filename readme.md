Try running `npm run ios` after installing dependencies and you'll catch this error


```sh
import typeof AccessibilityInfo from './Libraries/Components/AccessibilityInfo/AccessibilityInfo';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:1070:16)
    at Module._compile (internal/modules/cjs/loader.js:1120:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Module.require (internal/modules/cjs/loader.js:1042:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (/Users/jongiamp/sandbox/sentry-debug-native/node_modules/sentry-expo/dist/sentry.js:44:22)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
```
