const yargs=require('yargs')
//console.log(process.argv)
console.log(yargs.argv) //it is used for parsing the arguements via cmdline
/*[ '/Users/paishwa/.nvm/versions/node/v8.9.1/bin/node',
  '/Users/paishwa/Desktop/nodejs-practise/04-file-system-cmd-line-args/4-2_argument-parsin
g-with-yargs.js',
  '--title=hi there' ]
{ _: [],  title: 'hi there',
  '$0': '4-2_argument-parsing-with-yargs.js' }*/

  //yargs.version('1.1.0') 

  yargs.command({
    command: 'add', //what is the command you are providing
    describe: 'ADD A NOTE TO A FILE',
    handler:function () {
        console.log("i am a handler for add")      
      }
  })
//remove , list ,read
yargs.command({
    command: 'remove',
    describe: 'Remove A NOTE TO A FILE',
    handler:function () {
        console.log("i am a handler for remove")      
      }
  })
  yargs.command({
    command: 'list',
    describe: 'list the files',
    handler:function () {
        console.log("i am a handler for list")      
      }
  })
  yargs.command({
    command: 'read',
    describe: 'read the files',
    handler:function () {
        console.log("i am a handler for read")      
      }
  })

