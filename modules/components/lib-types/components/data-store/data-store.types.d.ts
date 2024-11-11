import { type QRL } from "@builder.io/qwik";
import { type Database } from "@harmony/shared";
import { type UserResponse } from "@supabase/supabase-js";
export interface IUserData {
    profile?: Database["public"]["Tables"]["profiles"]["Row"];
    account?: UserResponse;
    setUserData: QRL<(this: IUserData, payload: any) => void>;
}
