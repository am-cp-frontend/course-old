const obj = {
    dataProp: 'sample strings in 2017',
    get data () {
        return this.dataProp + ' LUL'
    },
    set data (data) {
        if (typeof data === 'string')
            this.dataProp = data
        else
            throw new Error('NO WAY.')
    }
}

obj.data // => 'sample strings in 2017 LUL'
obj.data = 2 // => NO WAY.