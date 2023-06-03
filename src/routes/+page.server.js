export const actions = {
  default: async ({ request }) => {
    let data = await request.formData();
    let title = data.get("title");
    let entry = data.get("entry");
    return {
      title,
      entry,
    };
  },
};
