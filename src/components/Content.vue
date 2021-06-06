<template>
    <TopMenu/>
    <AddData
        :data = '"Сегодня, 10 июля"'

    >
    <ul>
        <Card
            v-for="transaction in TRANSACTIONS_ONE" :key="transaction.id"
            :id =     'transaction.id'
            :bool =   'transaction.bool'
            :score =  'transaction.score'
            :name =   'transaction.name'
            :title =  'transaction.title'
            :description = 'transaction.description'
            :body =   'transaction.body'
            :status = 'transaction.status'
            :price =  'transaction.price'
            draggable="true"
            @dragstart="startDrag($event, transaction)"
            @dragend="endDrag()"
        />
    </ul>
        <Copy v-if="isDrag"/>
    </AddData>
    <AddData
        :data = '"Вчера, 9 июля"'
    >
    <ul>
        <Card
            v-for="transaction in TRANSACTIONS_TWO" :key="transaction.id"
            :id =     'transaction.id'
            :bool =   'transaction.bool'
            :score =  'transaction.score'
            :name =   'transaction.name'
            :title =  'transaction.title'
            :description = 'transaction.description'
            :body =   'transaction.body'
            :status = 'transaction.status'
            :price =  'transaction.price'
            draggable="true"
            @dragstart="startDrag($event, transaction)"
            @dragend="endDrag()"

        />
    </ul>
        <Copy v-if="isDrag"/>
        
    </AddData>
    <Delete v-if="isDrag"/>
    <BigPlus/>
</template>


<script>
import TopMenu from './top-menu/TopMenu.vue'
import AddData from './contentTable/AddData.vue'
import Card from './contentTable/Card.vue'
import Copy from './contentTable/Copy.vue'
import Delete from './contentTable/Delete.vue'
import BigPlus from './contentTable/BigPlus.vue'

import {mapGetters} from 'vuex'

export default {
    components: {
        TopMenu,
        AddData,
        Card,
        Copy,
        Delete,
        BigPlus
    },
    data(){
        return{
            isDrag: false
        }
    },
    computed: {
        ...mapGetters([
            'TRANSACTIONS_ONE',
            'TRANSACTIONS_TWO'
        ]),
    },
    methods: {
        startDrag(event, transaction) {
            console.log(transaction)
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            // event.dataTransfer.setData('transactionID', transaction.id)
            this.isDrag = true
        },
        endDrag() {
            this.isDrag = false
        }
    }
}
</script>

