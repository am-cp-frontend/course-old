app.use((req, res, next) => {
  console.log('I am middleware')
  next()
})
