import {ref} from "vue"

export default function useDate() {
    const date = ref(new Date());
  
    const addDay = (numberOfDays, baseDate = date.value) => {
      const newDate = new Date(baseDate);
      newDate.setDate(newDate.getDate() + numberOfDays);
  
      return newDate;
    };
  
    const addMonth = (numberOfMonths, baseDate = date.value) => {
      const newDate = new Date(baseDate);
      newDate.setMonth(newDate.getMonth() + numberOfMonths);
  
      return newDate;
    };
  
    return { date, addDay, addMonth };
  }