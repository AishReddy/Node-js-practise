console.log(process.argv)

//path to nodejs on your machine -different on individual machine 
//path to your file where your file lives on your machine
//the string which we provided in our program

/*[ '/Users/paishwa/.nvm/versions/node/v8.9.1/bin/node',
  '/Users/paishwa/Desktop/nodejs-practise/04-file-system-cmd-line-args/4-1_getInputFromUser.js',
  'aish' ]*/
  console.log(process.argv[2])

  if(process.argv[2]==='add')
  {
      console.log("Hey are you trying to add something??")
  }
  else{
      console.log("hey chill out for now!!!")
  }