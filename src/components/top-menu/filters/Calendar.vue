<template>
    <div class="w-190px flex">
        <button class="w-6 h-6 border-lightGray border rounded-lg mr-4px"
        @click="prev()"
        >
            <img src="/icons/left-arr.png" alt="" class="mx-auto">
        </button>

        <button class="h-6 w-94 border-lightGray border rounded-lg flex justify-around items-center mr-4px">
            <img src="/icons/calendar.png" alt="" class="pl-4px">
            <span class="pr-4px text-dark">{{ Months[index] }}</span>
        </button>

        <button class="w-6 h-6 border-lightGray border rounded-lg"
        @click="next()"
        >
            <img src="/icons/right-arr.png" alt="" class="mx-auto">
        </button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            index: 6
        }
    },
    computed: {
        ...mapGetters(['Months'])
    },
    methods: {
        next() {
            if(this.index == 11){
                this.index = 0
            }
            else {
                this.index++
            }
            
        },
        prev() {
            if(this.index == 0){
                this.index = 11
            }
            else {
                this.index--
            }
        }
    }
}
</script>