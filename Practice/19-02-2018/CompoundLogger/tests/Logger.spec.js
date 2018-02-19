const { Logger } = require('../solution/')

const message = {
    type: 'event',
    value: 'some value for the event handler'
}

let logger

describe('Logger', () => {
    beforeEach(() => {
        logger = new Logger()
    })

    it('constructs properly', () => {
        expect(logger).toBeDefined()
        expect(logger.log).toBeDefined()
        expect(logger.messages)
        expect(logger._log).toEqual([])
    })

    it('logs messages', () => {
        logger.log(message)

        expect(logger._log.length).toBe(1)
        expect(logger._log[0]).toEqual(message)
    })

    it('allows to retrieve an Array of logged messages', () => {
        logger.log(message)
        const messages = logger.messages()

        expect(messages.length).toBe(1)
        expect(messages[0]).toEqual(message)
    })

    it('does not share state', () => {
        const anotherLogger = new Logger()

        logger.log(message)

        expect(logger._log.length).toBe(1)
        expect(anotherLogger._log.length).toBe(0)
    })
})