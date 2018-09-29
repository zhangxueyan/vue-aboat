<template>
    <div class="star" :class="starSize">
        <span v-for="(itemClass,key) in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
    export default{
        props:{
            size:{ //尺寸，24,36,48
                type: Number
            },
            score:{
                type: String
            }
        },
        computed:{
            starSize(){
                return 'star-'+ this.size;
            },
            itemClasses(){
                let result = [];
                let score = Math.floor(this.score*2)/2; //将数值调整为整数及.5的形式，例：4.3 => 4；4.6 => 4.5
                let hasDecimal = score %1 !==0;
                let integer = Math.floor(score);
                for(let i =0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF);
                }
                while(result.length<LENGTH){
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">      
.star
    font-size: 0
    text-align: center
    .star-item
        display: inline-block
        background-repeat: no-repeat
    &.star-24
        .star-item
            width: 10px
            height: 10px
            margin-right: 3px
            background-size: 10px 10px
            &.last-child
                margin-right: 0
            &.on
                background-image:url("../../static/images/icons/star24_on@2x.png")
            &.half
                background-image:url("../../static/images/icons/star24_half@2x.png")
            &.off
                background-image:url("../../static/images/icons/star24_off@2x.png")
</style>