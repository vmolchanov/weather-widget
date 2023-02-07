<template>
  <article class="weather-card">
    <h2 class="weather-card__title">{{getHeaderText}}</h2>
    <div class="weather-card__row weather-card__temperature-block">
      <p class="weather-card__icon" :style="getIconStyle"></p>
      <p class="weather-card__temperature">{{getCurrentTemperature}}</p>
    </div>
    <p class="weather-card__description weather-card__spacing">{{getDescriptionText}}</p>
    <div class="weather-card__row weather-card__spacing">
      <p class="weather-card__wind-speed">{{getWindSpeed}}</p>
      <p class="weather-card__pressure">{{getPressure}}</p>
    </div>
    <div class="weather-card__row weather-card__spacing">
      <p class="weather-card__humidity">{{getHumidity}}</p>
    </div>
    <div class="weather-card__row">
      <p class="weather-card__visibility">{{getVisibility}}</p>
    </div>
  </article>
</template>

<script type="ts" src="./weather-card.component.ts"/>
