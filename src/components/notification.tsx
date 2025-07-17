"use client";

import { useNotificationStore } from "@/lib/notifications";
import { CheckCircle, XCircle, Info, AlertTriangle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import parse from "html-react-parser";

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

export const Notification = () => {
  const { notification, clearNotification } = useNotificationStore();

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      clearNotification();
    }, 6000);

    return () => clearTimeout(timer);
  }, [notification, clearNotification]);

  const Icon = iconMap[notification?.type || "info"];

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          key='notification'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
          className={`alert fixed top-5 left-1/2 -translate-x-1/2 shadow-lg max-w-md w-full z-[999] ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : notification.type === "error"
              ? "bg-red-500 text-white"
              : notification.type === "info"
              ? "bg-blue-500 text-white"
              : "bg-yellow-400 text-black"
          }`}
        >
          <div className='flex items-center gap-3'>
            <Icon className='w-6 h-6 flex-shrink-0' />
            <span>{notification.message}</span>
          </div>
          <button
            className='btn btn-sm btn-ghost btn-circle absolute right-2 top-2'
            onClick={clearNotification}
            aria-label='Close'
          >
            <X className='w-4 h-4' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
