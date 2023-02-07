<template>
  <article class="weather-settings">
    <button class="weather-settings__close" @click="onCloseClick">
      <img :src="CrossIcon" alt="Settings" width="12" height="12">
    </button>

    <h2 class="weather-settings__title">Settings</h2>
    <weather-draggable-list
      :list="cities"
      @move="onMoveCities"
      @remove="onRemoveClick"
    />

    <section class="weather-settings__add-location">
      <h2 class="weather-settings__title">Add location</h2>
      <weather-add-location-form
        ref="weatherAddLocationFormRef"
        @add-city="onAddCity"
      />
    </section>
  </article>
</template>

<script lang="ts" src="./weather-settings.component.ts"/>
