import { createContextId } from "@builder.io/qwik";
import type { IUserData } from "../types";
import { USER_DATA } from "./tokens";

export const userContext = createContextId<IUserData>(USER_DATA);
