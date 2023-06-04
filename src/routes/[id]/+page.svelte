<script>
  import { getContext } from "svelte";
  export let data;
  export let form;
  let diary = getContext("diary");

  if (form && $diary) {
    localStorage.setItem("diary", JSON.stringify([form, ...$diary]));
    $diary = JSON.parse(localStorage.getItem("diary"));
  }
  let journal = {};
  if ($diary) journal = $diary.find((entry) => entry.id == data.id);
  let edit = false;
</script>

{#if edit}
  <form method="POST">
    <input type="hidden" name="id" value={journal.id} />
    <label>
      Title:
      <input name="title" required value={journal.title} />
    </label>
    <label>
      Journal Entry:
      <textarea name="entry" rows="5" required value={journal.entry} />
    </label>
    <button>Submit</button>
  </form>
{:else}
  <h1>{journal.title}</h1>
  <p class="entry">{journal.entry}</p>
  <p class="date">
    <strong>Last updated:</strong>
    {new Date(journal.updatedAt).toLocaleDateString()}
  </p>
  <button on:click={() => (edit = !edit)} class="btn">Edit</button>
{/if}

<style>
  .entry {
    margin: 2rem 0;
  }
  .date {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  .btn {
    max-width: max-content;
    padding: 0.5rem;
    background-color: rebeccapurple;
    color: azure;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgb(101, 10, 152);
  }
</style>
