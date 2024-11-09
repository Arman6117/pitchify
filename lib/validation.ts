import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(5).max(20),
  description: z.string().min(10).max(200),
  category: z.string().min(3).max(20),
  pitch: z.string(),
  link: z
    .string()
    .url()
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("Content-Type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
});
