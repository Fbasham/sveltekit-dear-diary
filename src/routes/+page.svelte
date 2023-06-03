<script>
  export let form;
  export let data;
  import { enhance } from "$app/forms";
  import { browser } from "$app/environment";

  let diary = data.diary ?? [];
  if (form?.title && form?.entry) {
    if (browser) {
      diary = [...diary, form];
      localStorage.setItem("diary", JSON.stringify(diary));
    }
  }
</script>

<h1>Index</h1>
<div class="container">
  <section class="entries">
    <div>Data</div>
    {#each diary as entry}
      <div>
        <p>{entry.title}</p>
        <p>{entry.entry}</p>
      </div>
    {/each}
  </section>
  <section class="form">
    <form
      method="POST"
      use:enhance={({ form, data }) => {
        console.log(form);
        console.log(data);
      }}
    >
      <label>
        Title:
        <input name="title" />
      </label>
      <label>
        Journal Entry:
        <textarea name="entry" rows="5" />
      </label>
      <button>Submit</button>
    </form>
  </section>
</div>

<style>
  .container {
    display: flex;
    gap: 2rem;
    justify-content: space-evenly;
  }
  .entries {
    flex: 1;
    border: 1px solid red;
    padding: 1rem;
  }
  .form {
    flex: 1;
    padding: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  label {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 1.1rem;
  }
  input,
  textarea {
    padding: 5px;
  }
  button {
    max-width: max-content;
    padding: 0.5rem;
  }
</style>
