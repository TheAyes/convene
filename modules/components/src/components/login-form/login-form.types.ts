import * as z from "zod";

export const SLoginForm = z.object({
	email: z.string().min(5).email(),
	password: z.string().min(6)
});

export type TLoginForm = z.infer<typeof SLoginForm>;
