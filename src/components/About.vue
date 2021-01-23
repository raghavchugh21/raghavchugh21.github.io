<template>
  <section class="container" id="about">
    <div class="grid-two">
      <div>
        <a href="https://github.com/raghavchugh21" rel="noopener" aria-label="Github" title="Logo">
          <div class="profile-img"></div>
        </a>
      </div>
      <div class="introduction">
        <h4>About Me</h4>
        <p>
          I've  worked on projects in the domain of social network analysis, natural language processing and image processing (namely page segmentation and document analysis). 
        </p>
        <br />
        <p>
          <span>Data science</span> and
          <span>Machine Learning</span> are my specializations. However, programming is not my only field of focus, 
          I’m interested in design, UX/UI, new technologies and much more.
        </p>

        <picture v-if="darkTheme">
          <source srcset="../assets/images/quote-1-white.webp" type="image/webp" />
          <source srcset="../assets/images/quote-1-white.png" type="image/jpeg" />
          <img class="quote-1" src="../assets/images/quote-1-white.png" alt="Quotes 1" />
        </picture>

         <picture v-if="!darkTheme">
          <source srcset="../assets/images/quote-1.webp" type="image/webp" />
          <source srcset="../assets/images/quote-1.png" type="image/jpeg" />
          <img class="quote-1" src="../assets/images/quote-1.png" alt="Quotes 1" />
        </picture>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style>
</style>
