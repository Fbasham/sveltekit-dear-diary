<div class="app">
  <header>
    <div>Dear Diary</div>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    &copy; {new Date().getFullYear()}
  </footer>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap");
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    min-height: 100vh;
  }
  header {
    background-color: rebeccapurple;
    min-height: 3rem;
    color: azure;
    font-size: 3rem;
    padding: 1rem;
    font-family: "Great Vibes", cursive;
  }
  main {
    padding: 0 1rem;
    max-width: 1000px;
    width: 100%;
    margin: 1rem auto;
    flex: 1;
    font-family: "Charm", cursive;
  }
  footer {
    text-align: center;
    padding: 1rem;
    font-size: 0.85rem;
  }
</style>
