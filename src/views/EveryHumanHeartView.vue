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
  top: -5rem;
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
    72.63% -44px,
    49.6% 43.32%,
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
}

.second {
  left: -10.3rem;
  top: -2.1rem;
}

.second .dropcap {
  float: right;
  line-height: 0.5;
  shape-outside: polygon(
    72.63% -44px,
    44.17% 96.83%,
    12.61% 98.25%,
    12.25% 77.71%,
    15.3% 61.09%,
    47px 46.27%,
    91px 13px
  );
  padding-left: 4.5rem;
}

.runs-thru {
  font-size: 1.6rem;
  line-height: 1;
  width: 20rem;
  font-style: italic;
  text-align: right;
  padding-top: 9rem;
}
</style>
