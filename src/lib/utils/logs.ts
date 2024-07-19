import { supabase } from '$lib/supabaseClient';
import { PUBLIC_ENV } from '$env/static/public';

export const sendGumroadLog = async (link: string, description: string) => {
	try {
		const { error } = await supabase
			.from('link_clicks')
			.insert([{ link, env: PUBLIC_ENV, description }]);

		if (error) throw error;
	} catch (error) {
		console.error('Error sending gumroad log:', error);
	}
};
