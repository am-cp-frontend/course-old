const obj = {
    data: 'sample strings in 2017',
    getData: function () {
        return this.data + ' LUL'
    },
    setData: function (data) {
        if (typeof data === 'string')
            this.data = data
        else
            throw new Error('NOPE.')
    }
}

obj.getData() // => 'sample strings in 2017 LUL'
obj.setData(2) // => NOPE.