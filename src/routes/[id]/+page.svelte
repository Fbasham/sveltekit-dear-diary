<script>
  import { getContext } from "svelte";
  export let data;
  let diary = getContext("diary");

  let journal = {};
  if ($diary) journal = $diary.find((entry) => entry.id == data.id);
</script>

<h1>Entry {data.id}</h1>
<div>{JSON.stringify(journal)}</div>
