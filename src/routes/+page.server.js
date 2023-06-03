import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    let data = await request.formData();
    let title = data.get("title");
    let entry = data.get("entry");

    if (!title) return fail(401, { title });
    if (!entry) return fail(401, { entry });

    return { id: Number(new Date()), title, entry, updatedAt: new Date() };
  },
};
