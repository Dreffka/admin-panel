<template>
        <li :key="id" class="flex items-center justify-between pr-3 h-70px bxsh hover:bg-mediumGray7 hover:rounded-lg cursor-pointer">
            <!-- Зеленая иконка -->
            <div class="flex items-center">
                <div v-if="bool == '+' " class="w-30px h-30px bg-lightGreen rounded-lg flex justify-center items-center">
                    <img src="/icons/green-up.svg" alt="up-arrow">
                </div>
            <!-- Красная иконка -->
                <div v-else class="w-30px h-30px bg-rose rounded-lg flex justify-center items-center">
                    <img src="/icons/red-down.svg" alt="up-arrow">
                </div>


                <div class="flex flex-col ml-3 w-240px">
                    <span class="text-sm">{{ name }}</span>
                    <span class="text-xs"><span class="text-darkGray">Со счёта:</span> {{ score }}</span>
                </div>
            </div>
            
            <div class="flex flex-col ml-18px w-180px">
                <span class="text-sm">{{ title }}</span>
                <span class="text-xs text-darkGray">{{ description }}</span>
            </div>
            <div class="ml-18px w-190px leading-3">
                <p class="text-sm modd"> {{ body }}</p>
            </div>
            <div class="w-82px h-28px rounded-lg bg-lightGreen flex justify-center items-center">
                <span class="text-hardGreen text-xs"> {{ status }}</span>
            </div>

            <div class="flex justify-end items-center ml-3 w-98px">
                <span v-if=" bool == '+' " class="text-hardGreen text-base">{{ price }} ₴</span>
                <span v-else class="text-red text-base">{{ price }} ₴</span>
            </div>
        </li>
</template>

<script>

export default {
    props: {
        id: Number,
        bool: String,
        score: String,
        name: String,
        description: String,
        title: String,
        body: String,
        status: String,
        price: String
    }
}
</script>

<style scoped>
 
    .bxsh:hover{
        margin-left: 0;
        /* box-shadow: 0px 5px 2px 1px rgba(0, 0, 0, .03); */
        box-shadow: 0px 5px 5px 1px rgba(0,0,0, 0.04);
        border-radius: 8px;
    }
</style>