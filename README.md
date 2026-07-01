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

## Prettier

The Prettier options used by the `prettier/prettier` rule are also exported
standalone, so editors and the Prettier CLI format files that ESLint does not
process (e.g. the code blocks embedded in Markdown) with the exact same options.

Reference it from your `package.json`:

```jsonc
// package.json
{
  "prettier": "@feathers-community/eslint-config/prettier"
}
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
