<template>
    <div style="text-align: center;margin-top: 100px">
        页面开发中。。。
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
    }
</script>

<style scoped>

</style>
