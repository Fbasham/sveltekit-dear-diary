<script>
  import { getContext } from "svelte";
  let diary = getContext("diary");

  export let form;

  if (form && $diary) {
    $diary = [form, ...$diary];
    localStorage.setItem("diary", JSON.stringify($diary));
  }
</script>

<div class="container">
  <section class="entries">
    {#if $diary}
      {#each $diary as journal}
        <a href={`/${journal.id}`}>
          <div class="journal">
            <p class="title">{journal.title}</p>
            <p class="date">
              {new Date(journal.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </a>
      {/each}
    {/if}
  </section>
  <section class="form">
    <form method="POST">
      {#if form && !form.title}
        <p class="error">You must include a journal entry title</p>
      {/if}
      <label>
        Title:
        <input name="title" required />
      </label>
      {#if form && !form.entry}
        <p class="error">You must include a journal entry</p>
      {/if}
      <label>
        Journal Entry:
        <textarea name="entry" rows="5" required />
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
    border: 2px solid rebeccapurple;
    padding: 1rem;
    border-radius: 5px;
    max-height: 300px;
    overflow: auto;
  }
  .form {
    flex: 1;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 1.2rem;
  }
  input,
  textarea {
    padding: 5px;
    border: 2px solid rebeccapurple;
    border-radius: 5px;
    font-family: "Charm", cursive;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  button {
    max-width: max-content;
    padding: 0.5rem;
    background-color: rebeccapurple;
    color: azure;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
  }
  button:hover {
    background-color: rgb(101, 10, 152);
  }
  .error {
    color: red;
  }
  .journal {
  }
  .title {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .date {
    font-size: 0.8rem;
  }
</style>
