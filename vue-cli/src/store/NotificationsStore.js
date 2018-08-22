class NotificationsStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    increment () {
        this.state.count++
    }

    decrement () {
        this.state.count--
    }

    autoIncrement () {
        setInterval(() => {
            this.state.count++
        }, 1000)
    }

    stop () {
        this.state.count = 0
    }
}

export default new NotificationsStore()