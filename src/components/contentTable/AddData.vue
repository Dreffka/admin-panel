<template>
    <div class="flex justify-between mt-36px">
        <div class="flex items-center">
            <span class=" text-2xl">{{ data }}</span>
            <img class="mt-1 ml-1" src="/icons/arrow-down.svg" alt="">
            
        </div>
        <div class="flex mr-3">
            <span>Добавить</span>
            
            <button class="w-28px h-28px rounded-2xl flex items-center justify-center ml-2">
                <img src="/profile/plus-icon.svg" alt="">
            </button>
        </div>
    </div>
    <hr class="border-lightGray mb-13px mt-13px"/>
    <slot></slot>

</template>

<script>
export default {
    props: {
        data: String
    }
}
</script>

<style scoped>
    button {
        background-color: #EEEEEE !important;
    }

</style>