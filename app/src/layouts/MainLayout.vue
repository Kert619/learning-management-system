<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header class="bg-primary text-grey-1 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon name="school" color="white" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            E-Learn App
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-1" icon="message">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-1" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-primary">
          <q-item v-for="link in links" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="primary" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const links: { icon: string; text: string }[] = [
  { icon: 'calendar_month', text: 'School Year' },
  { icon: 'library_books', text: 'Courses' },
  { icon: 'group', text: 'Instructors' },
  { icon: 'cable', text: 'Course Assignment' },
];
</script>
