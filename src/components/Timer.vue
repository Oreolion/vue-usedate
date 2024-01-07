<template>
  <div class="app">
    <h1>{{ newdate }}</h1>

    <div>
      <p>
        Day: {{ newDay }}
        <span>
          {{ addedDay === 0
            ? null
            : addedDay === 1
            ? ` (+ ${addedDay} day)`
            : ` (+ ${addedDay} days)` }}
        </span>
      </p>
      <button @click="handleAddedDay">Add Days</button>
    </div>

    <div>
      <p>
        Month: {{ newMonth }}
        <span>
          {{ addedMonth === 0
            ? null
            : addedMonth === 1
            ? ` (+ ${addedMonth} month)`
            : ` (+ ${addedMonth} months)` }}
        </span>
      </p>
      <button @click="handleAddedMonth">Add Months</button>
    </div>

    <div class="action-btn">
      <button
        @click="handleAddedDaysAndMonths"
        class="change-btn"
        title="Click to set new date"
      >
        Change The World!
      </button>
      <button @click="handleReset" class="reset-btn">Reset</button>
    </div>
  </div>
</template>

<script setup> 
import { ref } from 'vue';
import useDate from "../index"



   
    const { date, addDay, addMonth } = useDate();
    const addedDay = ref(0);
    const addedMonth = ref(0);
    const newdate = ref(date.value.toString());

    const handleAddedDay = () => {
      addedDay.value += 1;
    };

    const handleAddedMonth = () => {
      addedMonth.value += 1;
    };

    const handleAddedDaysAndMonths = () => {
      const resultDate = addMonth(addedMonth.value, addDay(addedDay.value));
      newdate.value = resultDate.toString();
    };

    const newMonth = () => {
      return addMonth(addedMonth.value).getMonth() + 1;
    };

    const newDay = () => {
      return addDay(addedDay.value).getDate();
    };

    const handleReset = () => {
      newdate.value = date.value.toString();
      addedDay.value = 0;
      addedMonth.value = 0;
    };

    
  
;
</script>

<style scoped>

</style>
