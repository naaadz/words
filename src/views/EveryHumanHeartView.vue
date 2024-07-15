<template>
  <div class="absolute h-screen w-full flex flex-col items-center justify-center">
    <div class="inner relative">
      <div class="first absolute">
        <span class="dropcap font-harley text-primary">t</span>
        <p class="the-line">he line dividing good from evil</p>
      </div>
      <div class="second absolute z-10">
        <span class="dropcap font-harley text-primary">t</span>
        <p class="runs-thru">
          runs through the center of every human
          <a class="underline" href="https://www.reddit.com/r/AskMen/comments/110xc8l/comment/j8bq15f/" target="_blank"
            >heart</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.inner {
  width: 31.25rem;
  top: -8rem;
  left: 10rem;
}

.dropcap {
  font-size: 40rem;
  transform: rotate(10deg);
  pointer-events: none;
}

.first .dropcap {
  float: left;
  line-height: 0.42;
  shape-outside: polygon(
    80.08% -40px,
    53.32% 42.98%,
    48.29% 73.23%,
    94.7% 51.49%,
    64.48% 110.67%,
    -26px 111.7%,
    27px -9px
  );
  padding-right: 1rem;
}

.the-line {
  font-size: 1.6rem;
  line-height: 1;
  width: 20rem;
  font-style: italic;
  padding-top: 4rem;
}

.second {
  left: -11.3rem;
  top: -4.1rem;
}

.second .dropcap {
  float: right;
  line-height: 0.6;
  shape-outside: polygon(72.63% -44px, 59% 108.09%, 8.13% 107.12%, 6.05% 83.46%, 19.46% 58.45%, 70px 44.83%, 91px 13px);
  padding-left: 4.5rem;
}

.runs-thru {
  font-size: 1.6rem;
  line-height: 1;
  width: 21rem;
  font-style: italic;
  text-align: right;
  padding-top: 15rem;
}
</style>
