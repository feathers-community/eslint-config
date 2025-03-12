import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import type { ConfigArray } from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginImportX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import unusedImports from 'eslint-plugin-unused-imports'
import packageJsonRecommended from 'eslint-plugin-package-json/configs/recommended'
import process from 'node:process'

export { ConfigArray }

export type FeathersEslintConfigOptions = {
  tsconfig?: {
    /**
     * @default './tsconfig.json'
     */
    path?: string

    /**
     * @default process.cwd()
     */
    rootDir?: string
  }
}

export const defaultConfig = (
  options?: FeathersEslintConfigOptions,
): ConfigArray => {
  const tsconfigPath = options?.tsconfig?.path ?? './tsconfig.json'
  const tsconfigRootDir = options?.tsconfig?.rootDir ?? process.cwd()
  return tseslint.config(
    {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/coverage',
        'docs/.vitepress/cache',
        'docs/.vitepress/dist',
        '**/*.d.ts',
        '**/*.cjs',
        '**/*.json',
      ],
    },
    eslint.configs.recommended,

    // eslint-disable-next-line import-x/no-named-as-default-member
    tseslint.configs.recommended,
    {
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'separate-type-imports',
          },
        ],
      },
    },
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
      files: ['**/*.{ts,tsx}'],
      ignores: [],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: tsconfigPath,
          tsconfigRootDir,
        },
      },
    },
    {
      files: ['**/*.{js,mjs}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // import-x
    {
      rules: {
        'import-x/no-dynamic-require': 'warn',
        'import-x/no-nodejs-modules': 'off',
      },
    },
    // unicorn
    {
      languageOptions: {
        globals: globals.builtin,
      },
      plugins: {
        unicorn,
      },
      rules: {
        'unicorn/consistent-assert': 'warn',
        'unicorn/consistent-date-clone': 'warn',
        'unicorn/consistent-empty-array-spread': 'warn',
        'unicorn/prefer-date-now': 'warn',
        'unicorn/prefer-module': 'warn',
        'unicorn/prefer-node-protocol': 'warn',
        'unicorn/prefer-object-from-entries': 'warn',
        'unicorn/prefer-set-size': 'warn',
      },
    },
    // unused-imports
    {
      plugins: {
        'unused-imports': unusedImports,
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    // package.json
    {
      ...packageJsonRecommended,
      rules: {
        'package-json/require-files': 'error',
      },
    },
    // prettier
    eslintPluginPrettierRecommended,
    {
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: false,
          },
        ],
      },
    },
  )
}
