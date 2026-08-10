import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function toast({ title, description, variant }: ToastOptions) {
  const message = title ?? description ?? "";
  const opts = title && description ? { description } : undefined;
  if (variant === "destructive") return sonnerToast.error(message, opts);
  return sonnerToast.success(message, opts);
}

export function useToast() {
  return { toast };
}
