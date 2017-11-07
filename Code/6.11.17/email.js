function verfiy_username(username) {
  return username.length > 7
}

function make_username_handler(cb) {
  return function username_handler(event) {
    const username = event.target.value
    const isValid = verfiy_username(username)
    
    cb(isValid, username)
  }
}

const handler = make_username_handler(checkUsed)
$username.addEventLister('keyup', handler)