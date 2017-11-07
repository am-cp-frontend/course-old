function do_smth(cb) {
  let data = undefined
  
  /* 
    Что то асинхронное
      напримерзапрос к среде 
        например HTTP запрос, после которого data меняется
  */

  cb(data)
}

do_smth(console.log)