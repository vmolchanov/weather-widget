<template>
  <div class="weather-main">
    <button class="weather-main__settings" @click="onSettingsClick">
      <img :src="SettingsIcon" alt="Settings" width="30" height="30">
    </button>

    <p v-if="isLoaderShown" class="weather-main__loader">
      Receiving data...
    </p>

    <p v-else-if="isErrorMessageShown" class="weather-main__error-message">
      Error for the receiving data
    </p>

    <ul v-else class="weather-main__list">
      <li v-for="(card, i) in weatherData" class="weather-main__card" :key="i">
        <weather-card
          :city="card.city"
          :country="card.country"
          :current-temperature="card.currentTemperature"
          :description="card.description"
          :feels-like="card.feelsLike"
          :humidity="card.humidity"
          :icon="card.icon"
          :main-info="card.mainInfo"
          :pressure="card.pressure"
          :visibility="card.visibility"
          :wind-speed="card.windSpeed"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./weather-main.component.ts"/>
