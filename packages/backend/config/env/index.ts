import developmentConfig from './dev'
import productionConfig from './prod'

const configs = {
  development: developmentConfig,
  production: productionConfig,
}
const env = process.env.NODE_ENV || 'development'

export default () => ({
  ...configs[env],
})
