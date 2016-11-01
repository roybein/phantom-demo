var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path
console.log(binPath);
 
var childArgs = [
  path.join(__dirname, 'shot.js')
]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  console.log(err);
})
