function fizzbuzz (_) {
    for(i=0;i<_;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
    // while(--_)console.log((_%3?'':'fizz')+(_%5?'':'buzz')||_)
}

fizzbuzz(15)