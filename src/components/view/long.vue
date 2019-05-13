<template>
    <div>
        <p>柱状图表</p>
        <div id="myChart" :style="{width: '1250px', height: '500px'}">
        </div>
    </div>
</template>

<script>
    export default {
        name: "long",
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                myChart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    legend: {
                        data:['利润', '支出', '收入']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    yAxis : [
                        {
                            type : 'category',
                            axisTick : {show: false},
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    series : [
                        {
                            name:'利润',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data:[200, 170, 240, 244, 200, 220, 210]
                        },
                        {
                            name:'收入',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            data:[320, 302, 341, 374, 390, 450, 420]
                        },
                        {
                            name:'支出',
                            type:'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                }
                            },
                            data:[-120, -132, -101, -134, -190, -230, -210]
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped lang="less">
    #myChart{
        padding: 15px;
    }
    p {
        padding-left: 20px;
        border-bottom: 1px dashed #7e8c8d;
        height: 30px;
        line-height: 30px;
        font-weight: 800;
    }
</style>
