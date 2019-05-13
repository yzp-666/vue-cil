<template>
    <div>
        <long></long>
        <post></post>
        <strip></strip>
    </div>
</template>

<script>
    import long from '@/components/view/long.vue'
    import post from '@/components/view/post.vue'
    import strip from '@/components/view/strip.vue'

    export default {
        name: "chart",
        components:{
            long,
            post,
            strip
        }
    }
</script>

<style scoped>

</style>
