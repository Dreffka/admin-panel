<template>
    <div class=" bg-mediumGray w-312px h-100  rounded-lg pt-4">
        <div class="flex justify-between items-center px-36px">
            <h2 class="text-xl">Все деньги</h2>
            <img src="/sidebar/logo.png" alt="miniLogo">
        </div>
        <MoneyBlock/>
        <Links/>
        <BottomProfile/>
    </div>
</template>

<script>
import MoneyBlock from './sideMenu/MoneyBlock.vue'
import Links from './sideMenu/Links.vue'
import BottomProfile from './sideMenu/BottomProfile.vue'

export default {
    components: {
        MoneyBlock,
        Links,
        BottomProfile
    }
}
</script>