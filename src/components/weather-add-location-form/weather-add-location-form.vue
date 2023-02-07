<template>
  <form action="#" class="weather-add-location-form" @submit.prevent="onFormSubmit">
    <div class="weather-add-location-form__fields">
      <input
        v-model="city"
        type="text"
        name="city"
        class="weather-add-location-form__input"
      >
      <button class="weather-add-location-form__button">
        <img :src="EnterIcon" width="20" height="20">
      </button>
    </div>
    <p class="weather-add-location-form__error-message">{{errorMessage}}</p>
  </form>
</template>

<script lang="ts" src="./weather-add-location-form.component.ts"/>
