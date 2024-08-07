import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store }) => {
  const authStore = useAuthStore(store);
  await authStore.getUser();
});
