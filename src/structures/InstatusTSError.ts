export default class InstatusTSError extends Error {
    constructor(message: string) {
        super(message)

        this.message = message
        this.name = 'InstatusTSError'
    }

}
