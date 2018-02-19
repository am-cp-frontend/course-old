const { AbstractRouter } = require('../solution')

const message = {
    type: Math.random().toString(),
    value: 'some value for the event handler'
}

let router

describe('AbstractRouter', () => {
    beforeEach(() => {
        router = new AbstractRouter()
    })

    it('constructs properly', () => {
        expect(router).toBeDefined()
        expect(router.routeMessage).toBeDefined()
        expect(router.on).toEqual({})
    })

    it('routes events', () => {
        const mockCallback = jest.fn()
        router.on[message.type] = mockCallback

        router.routeMessage(message)

        expect(mockCallback).toHaveBeenCalledTimes(1)
        expect(mockCallback).toHaveBeenCalledWith(message.value)
    })

    it('does not share state', () => {
        const anotherRouter = new AbstractRouter()

        const handlerName = Math.random().toString();
        router.on[handlerName] = jest.fn()

        expect(anotherRouter.on[handlerName]).toBeUndefined()
    })
})