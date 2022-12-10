const path = require('path')

const SOURCE_DIR = 'src'
const STATIC_DIR = 'static'
const IMAGE_DIR = 'images'
const COMPONENT_DIR = 'components'
const HOOKS_DIR = 'services/hooks'
const UTIL_DIR = 'utils'

const STATIC_ALIAS = {
  '@/static': path.resolve(__dirname, '..', SOURCE_DIR, STATIC_DIR),
}

const IMAGE_ALIAS = {
  '@/images': path.resolve(__dirname, '..', SOURCE_DIR, STATIC_DIR, IMAGE_DIR),
}

const COMPONENT_ALIAS = {
  '@/components': path.resolve(__dirname, '..', SOURCE_DIR, COMPONENT_DIR),
}

const HOOKS_ALIAS = {
  '@/hooks': path.resolve(__dirname, '..', SOURCE_DIR, HOOKS_DIR),
}

const UTIL_ALIAS = {
  '@/utils': path.resolve(__dirname, '..', SOURCE_DIR, UTIL_DIR),
}

module.exports = {
  STATIC_ALIAS,
  IMAGE_ALIAS,
  COMPONENT_ALIAS,
  HOOKS_ALIAS,
  UTIL_ALIAS
}