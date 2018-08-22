<template>
    <div>
        <h1>Page B</h1>
        <p>{{ $route.params.id }}</p>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Salut'
            }
        },
        beforeRouteEnter (route, redirect, next) {
            window.setTimeout(() => {
                next(vm => {
                    vm.msg = 'La route est chargée'
                })
            }, 2000)
        },
        beforeRouteLeave (route, redirect, next) {
            if(window.confirm('Voulez-vous vraiment quitter')) {
                next()
            }
        }
    }
</script>