import { fail } from "@sveltejs/kit";

export const load = async ({ params }) => {
  return {
    id: params.id,
  };
};

export const actions = {
  default: async ({ request }) => {
    let data = await request.formData();
    let id = data.get("id");
    let title = data.get("title");
    let entry = data.get("entry");

    if (!title) return fail(401, { title });
    if (!entry) return fail(401, { entry });
    return { id, title, entry, updatedAt: new Date() };
  },
};
