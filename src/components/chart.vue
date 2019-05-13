<template>
    <div class="vbg">
        <div class="long">
            <long ></long>
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
    .vbg {
        background: red;
    }
    .long,.post,.strip{
        border: 1px solid transparent;
        border-radius: 10px;
        background: white;
    }
    .long {
        margin-bottom: 25px;
    }
    .post {
        display: inline-block;
    }
    .strip {
        display: inline-block;
        margin-left: 20px;
    }

</style>
