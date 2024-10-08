import { Role } from 'src/enums/role';
import { useAuthStore } from 'src/stores/auth';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const guest = async (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore();
  if (!authStore.user) return next();

  if (authStore.user.role === Role.ADMIN) {
    next({ path: '/admin' });
  }
};
