const { CompoundRouter } = require('../solution')

const message = {
    type: Math.random().toString(),
    value: 'some value for the event handler'
}

let router

describe('CompoundRouter', () => {
    beforeEach(() => {
        router = new CompoundRouter()
    })

    it('constructs properly', () => {
        expect(router).toBeDefined()
        expect(router.log).toBeDefined()
        expect(router.messages)
        expect(router._log).toEqual([])

        expect(router.routeMessage).toBeDefined()
        expect(router.on).toEqual({})
    })

    it('logs messages', () => {
        router.log(message)

        expect(router._log.length).toBe(1)
        expect(router._log[0]).toEqual(message)
    })

    it('allows to retrieve an Array of logged messages', () => {
        router.log(message)
        const messages = router.messages()

        expect(messages.length).toBe(1)
        expect(messages[0]).toEqual(message)
    })

    it('does not share logger state', () => {
        const anotherRouter = new CompoundRouter()

        router.log(message)

        expect(router._log.length).toBe(1)
        expect(anotherRouter._log.length).toBe(0)
    })

    it('routes events', () => {
        const mockCallback = jest.fn()
        router.on[message.type] = mockCallback

        router.routeMessage(message)

        expect(mockCallback).toHaveBeenCalledTimes(1)
        expect(mockCallback).toHaveBeenCalledWith(message.value)
    })

    it('does not share router state', () => {
        const anotherRouter = new CompoundRouter()

        const handlerName = Math.random().toString();
        router.on[handlerName] = jest.fn()

        expect(anotherRouter.on[handlerName]).toBeUndefined()
    })
})