<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<style>
.error404 {
    background: url(../img/noise.gif);
    background-repeat: repeat;
    background-attachment: fixed;
}

.errorCode{
   font-size: 150px;
    color: wheat;
    text-align: center;
    background-color: #fff;
}
.erroMsg{
  font-size: 15px;
    color: #f1f0ef;
    text-transform: uppercase;
    text-align: center;
}
.back-home {
    color: wheat;
    font-size: 24px;
    text-decoration: none;
}
</style>
<main>
  <h1 class="errorCode">{status}</h1>
  <div style="text-align:center;color: wheat;padding: 5%;"> <a class="btn back-home" href="/">&lt; Go Home  </a>
</div>
  <!-- <p class="erroMsg">{error.message}</p> -->
 
<h2>Oops, something went wrong.</h2>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}



</main>
