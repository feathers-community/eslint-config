import type { Config } from 'prettier'

/**
 * Shared Prettier configuration for Feathers Community projects.
 *
 * This is the single source of truth for formatting options. It is consumed
 * both by the ESLint `prettier/prettier` rule in this package and directly by
 * standalone Prettier (CLI / editor integrations) when referenced from a
 * project's `package.json` `"prettier"` field:
 *
 * ```jsonc
 * // package.json
 * "prettier": "@feathers-community/eslint-config/prettier"
 * ```
 *
 * Referencing it standalone ensures files ESLint does not process — e.g. the
 * embedded code blocks inside Markdown — are formatted with the same options.
 */
export const prettierConfig: Config = {
  singleQuote: true,
  semi: false,
}

export default prettierConfig
