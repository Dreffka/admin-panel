<template>
<div class="flex justify-between mr-3">
    <!-- Календарь со стрелками -->
    <div class="flex">
        <Calendar/>

        <!-- Поиск -->
        <Search/>
    </div>
    <!-- Фильтр -->
    <Filter/>
</div>
    
</template>

<script>
import Calendar from './filters/Calendar.vue'
import Search from './filters/Search.vue'
import Filter from './filters/Filter.vue'

export default {
    components: {
        Calendar,
        Search,
        Filter
    }
}
</script>


