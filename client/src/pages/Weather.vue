<script setup lang="ts">
import { reactive } from 'vue';
    const weather = reactive({ data: {} as any});
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=New Paltz&appid=${import.meta.env.VITE_OPENWEATHER_KEY}`)
            .then(x=>x.json())
            .then(x=>{
            console.log(x);
            weather.data = Object.entries(x.main);

    });
</script>

<template>
    <div>
        <h1>Hello</h1>


                    <table class="table">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(currency, index) in weather.data" >
                    <td>{{ currency[0] }}</td>
                    <td>{{ currency[1] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style scoped>
</style> 