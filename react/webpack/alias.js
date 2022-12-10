const path = require('path')

const IMAGE_ALIAS = {
  '@/images': path.resolve(__dirname, '..', 'src', 'static', 'images'),
}

const COMPONENT_ALIAS = {
  '@/components': path.resolve(__dirname, '..', 'src', 'components'),
}

const UTIL_ALIAS = {
  '@/utils': path.resolve(__dirname, '..', 'src', 'utils'),
}

module.exports = {
  IMAGE_ALIAS,
  COMPONENT_ALIAS,
  UTIL_ALIAS
}