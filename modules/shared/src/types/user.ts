import { User } from "supabase-auth-helpers-qwik";
import { Database } from "./supabase";

export interface IUserData {
	profile: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
	account?: User;
}