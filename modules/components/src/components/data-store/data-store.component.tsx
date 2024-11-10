import { component$, createContextId, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { IInitialUserData } from "./data-store.root";

export const userContext = createContextId<IInitialUserData>("user");

/*const getUser = async (supabaseClient: SupabaseClient) => {
	const { data: user } = await supabaseClient.auth.getUser();
	return user;
};*/

export const DataStore = component$(() => {
	/*const supabaseClient = useSupabaseClient().value;*/

	/*const user = useComputed$(async () => {
		return await supabaseClient.auth.getUser();
	});*/

	const userData = useStore<IInitialUserData>({
		username: "Ayes",
		status: "busy"
	});

	useContextProvider(userContext, userData);

	return <Slot />;
});
