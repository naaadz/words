<template>
  <div class="absolute h-screen w-full flex flex-col items-center justify-center">
    <div class="flex">
      <div class="left flex flex-col gap-6">
        <div class="callout bg-primary p-10 pr-14">
          <span>If you love what you do, you never work a day in your life. Devs, how true is this?</span>
        </div>

        <div class="pullout h-60 relative w-full font-harley text-primary">
          <span class="but">but</span>
          <span class="you">you</span>
          <span class="know">know</span>
          <span class="what">what?</span>
        </div>
      </div>

      <div class="right relative -left-8 mt-10 flex flex-col gap-20">
        <span
          >I love building software. I love the feeling of taking my ideas and making them come to life. I love the
          practice and discipline of writing code, and the pride of writing code that others will use as an example of
          how to make their code better. I love the collaborative process. I love the feeling of solving really
          difficult bugs. I even love testing.</span
        >
        <span class="grind leading-6 font-bold"
          >No matter how much I love it, some days are just a fucking grind. And that’s
          <a
            class="underline"
            href="https://www.reddit.com/r/ExperiencedDevs/comments/weicva/comment/iiogsqo/"
            target="_blank"
            >ok</a
          >.</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.pullout > * {
  position: absolute;
  font-size: 5.4rem;
}

.left {
  width: 18.75rem;
}

.right {
  width: 13.75rem;
}

.callout {
  font-size: 1.6rem;
  line-height: 1.2;
}

.grind {
  font-size: 1.38rem;
  line-height: 1.2;
}

.but {
  font-size: 6rem;
  top: -4%;
  left: 15%;
}

.you {
  font-size: 6.5rem;
  left: 48%;
  top: 3%;
}

.know {
  left: 0;
  top: 18%;
}

.what {
  left: 25%;
  top: 38%;
}
</style>
