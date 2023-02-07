<template>
  <draggable
    :list="list"
    :disabled="!enabled"
    item-key="name"
    class="list-group"
    ghost-class="ghost"
    @start="dragging = true"
    @end="dragging = false"
    @update="onMove"
  >
    <template #item="{element}">
      <div class="list-group-item" :class="{'not-draggable': !enabled}">
        <div class="list-group-item__col list-group-item__burger">
          <img :src="BurgerIcon" alt="Drag" width="20" height="20">
        </div>
        <div class="list-group-item__col list-group-item__content">
          {{element.name}}
        </div>
        <div class="list-group-item__col list-group-item__remove">
          <button @click="onRemoveClick(element)">
            <img :src="BasketIcon" alt="Remove" width="20" height="20">
          </button>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" src="./weather-draggable-list.component.ts"/>
