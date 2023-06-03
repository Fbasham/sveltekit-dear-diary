import { browser } from "$app/environment";

export const load = async () => {
  if (browser) {
    return {
      diary: JSON.parse(localStorage.getItem("diary")) || [],
    };
  }
};
