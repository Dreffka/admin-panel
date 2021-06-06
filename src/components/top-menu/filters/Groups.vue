<template>
    <div class="flex justify-between">
    <div class="mt-30px flex">
        <!-- сортировака по дате -->
        <div>
            <span class="text-darkGray">Группировать: </span>
            <select size="1" class=" bg-easyGray w-180px h-30px px-10px border border-lightGray rounded-lg">
                <option disabled>По дате</option>
                <option>По дате</option>
            </select>
        </div>

         <!-- сортировака по виду -->
        <div class="flex items-center ml-4">
            <span class="text-darkGray ">Вид: </span>
            <input type="radio" id="one" name="view" value="one" checked>
            <label for="one" class="h-30px w-30px bg-easyGray flex justify-center items-center rounded-lg border border-lightGray ml-1">
                <img src="/icons/burger.png" alt="">
            </label>
            <input type="radio" id="two" name="view" value="two">
            <label for="two" class="h-30px w-30px bg-easyGray flex justify-center items-center rounded-lg border border-lightGray ml-1">
                <img src="/icons/calendar.png" alt="">
            </label>
        </div>
    </div>

        <!-- сортировака по времени -->
        <div class="flex items-center ml-4 justify-end mt-30px mr-3">
             <input type="radio" id="all" name="operations" value="all" checked>
            <label for="all" class="h-30px w-125px bg-easyGray flex justify-center items-center rounded-lg border border-lightGray ml-1">
                <span>Все операции</span>
            </label>
            <input type="radio" id="next" name="operations" value="next">
            <label for="next" class="h-30px w-125px bg-easyGray flex justify-center items-center rounded-lg border border-lightGray ml-1">
                <span>Будущие</span>
            </label>
            <input type="radio" id="prev" name="operations" value="prev">
            <label for="prev" class="h-30px w-125px bg-easyGray flex justify-center items-center rounded-lg border border-lightGray ml-1">
                <span>Прошедшие</span>
            </label>
        </div>
    </div>
</template>

<style scoped>

input[type=radio] {
	display: none;
}

label {
    opacity: 60%;
    cursor: pointer;
}

input[type=radio]:checked + label {
	background: #EEEEEE;
    opacity: 100%;
}

</style>