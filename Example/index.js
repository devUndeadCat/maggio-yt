async function run(){
  try {
    
  let gameplay = await searchVideo("resident evil 8 gameplay")
  console.log(gameplay[0])
  
  /* // download
  let dow = await ytDownload("url", "./video.mp4")
  if (dow) console.log('sucess')
  */
  
} catch(err) {
  console.log(err)
}
}
run()