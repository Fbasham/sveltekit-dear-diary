import { browser } from "$app/environment";

export async function load() {
  if (browser) {
    return {
      diary: JSON.parse(localStorage.getItem("diary")) ?? [],
    };
  }
}
