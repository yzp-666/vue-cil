<template>
    <div>
        <div class="long">
            <long></long>
        </div>
        <div class="post">
            <post></post>
        </div>
        <div class="strip">
            <strip></strip>
        </div>
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

<style scoped lang="less">
    .post {
        display: inline-block;
    }
    .strip {
        display: inline-block;
    }

</style>
