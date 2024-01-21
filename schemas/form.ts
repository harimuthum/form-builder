import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export type formSchemaType = z.infer<typeof formSchema>;

export const formSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
});
