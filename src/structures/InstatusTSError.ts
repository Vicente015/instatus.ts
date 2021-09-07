export default class InstatusTSError extends Error {
    constructor(message: string) {
        super(message)

        this.message = message
        this.name = 'InstatusTSError'
    }

    private test(): void {
        throw new InstatusTSError('This is a test, no action is needed :)')
    }
}
