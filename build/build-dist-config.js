const fs = require('fs')
const DIST_PATH = './dist/'

// https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/
// If you add a .nojekyll file, your source files will be published without any modifications.
fs.writeFileSync(DIST_PATH + '.nojekyll', '')
