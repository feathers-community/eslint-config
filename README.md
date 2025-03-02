# @feathers-community/eslint-config

Default eslint-config for feathers-community projects. It's esm and flat config only.

## Installation

```
npm install --save-dev @feathers-community/eslint-config eslint
```

## Usage

```ts
// eslint.config.{js,mjs,ts,mts}

import config from "@feathers-community/eslint-config";

export default config();
```

## Used plugins/rules

_see [config](https://github.com/feathers-community/eslint-config/blob/main/src/default-config.ts)_

- [typescript-eslint](https://typescript-eslint.io/)
- [prettier](https://github.com/prettier/eslint-plugin-prettier)
- [import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
- [package-json](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json)

## License

Licensed under the [MIT license](./LICENSE).
