// modulo necesario para trabajar con rutas de archivos
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}