<template>
    <TopFilters/>
    <Graphic/>
    <Groups/>
    
</template>

<script>
import TopFilters from './TopFilters.vue'
import Graphic from './Graphic.vue'
import Groups from './filters/Groups.vue'

export default {
    components: {
        TopFilters,
        Graphic,
        Groups
    }
}
</script>

