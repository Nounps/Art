// stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    user: null as { id: number; name: string; email: string } | null,
  }),
  actions: {
    setAuthData(
      token: string,
      user: { id: number; name: string; email: string }
    ) {
      this.token = token;
      this.user = user;
    },
    clearAuthData() {
      this.token = null;
      this.user = null;
    },
  },
});
