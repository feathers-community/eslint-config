import type {
  ConfigArray,
  FeathersEslintConfigOptions,
} from './default-config.js'
import { defaultConfig } from './default-config.js'

export * from './default-config.js'

export default (
  options?: FeathersEslintConfigOptions,
  ...userConfigs: ConfigArray
): ConfigArray => {
  return defaultConfig(options, ...userConfigs)
}
