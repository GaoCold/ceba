<template>
  <div>
    <top></top>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
