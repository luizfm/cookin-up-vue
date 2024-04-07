<script lang="ts" setup />

<template>
    <header class="banner">
    <div class="presentation">
      <img src="@assets/images/logo.svg" alt="Logo do Cookin' up" />

      <p class="header-lg header-title">
        <span class="green-text">Um banquete de ideias para</span> despertar o chef que há em você
      </p>

      <p class="subtitle-lg">
        Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
      </p>
    </div>

    <img src="@assets/images/foto-banner.png" alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. 
    Ela está sorrindo e está apoiando um celular entre seu rosto e ombro" class="banner-photo"/>
  </header>
</template>

<style scoped>
  .banner {
    padding: 4rem 7.5rem;
    color: var(--cream);

    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 3.25rem;
  }

  .logo {
    height: 4.5rem;
    margin-bottom: 3rem;
  }

  .header-title {
    margin-bottom: 2rem;
  }

  .green-text {
    color: var(--green-medium, #3d6d4a);
  }

  .banner-photo {
    width: 35rem;
  }

  @media only screen and (max-width: 1300px) {
    .banner {
      padding: 4rem 3.75rem;
      flex-direction: column;
      gap: 1rem;
    }

    .logo {
      display: block;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 767px) {
    .banner {
      padding: 4rem 1.5rem;
    }

    .banner-photo {
      width: min(100%, 21.25rem);
    }
  }
</style>