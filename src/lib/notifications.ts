// lib/stores/notification.ts
import { create } from "zustand";

type Notification = {
  type: "success" | "error" | "info" | "warning";
  message: string;
};

type NotificationStore = {
  notification: Notification | null;
  showNotification: (notification: Notification) => void;
  clearNotification: () => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  notification: null,
  showNotification: (notification) => set({ notification }),
  clearNotification: () => set({ notification: null }),
}));
