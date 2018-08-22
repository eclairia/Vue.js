<template>
    <div class="counter">
        {{ count }}

        <button class="counter-button" @click="autoIncrement">Auto incrément</button>
        <button class="counter-button" @click="increment">Incrémenter</button>
        <button class="counter-button" @click="decrement">Décrémenter</button>
        <button class="counter-button" @click="stop">Stop</button>
    </div>
</template>

<script>
    import store from '../store/NotificationsStore'

    export default {
        data () {
            return {
                state: store.state
            }
        },
        computed: {
            count: function () {
                return this.state.count
            }
        },
        methods: {
            increment () {
                store.increment()
            },
            decrement () {
                store.decrement()
            },
            autoIncrement () {
                store.autoIncrement()
            },
            stop () {
                store.stop()
            }
        }
    }
</script>