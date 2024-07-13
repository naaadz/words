<template>
  <div class="container mx-auto h-full flex flex-col items-center justify-center">
    <div class="flex">
      <div class="w-[300px] flex flex-col gap-4">
        <div class="callout">
          <span>If you love what you do, you never work a day in your life. Devs, how true is this?</span>
        </div>

        <div class="cluster h-60 relative w-full font-harley text-primary">
          <span class="but">but</span>
          <span class="you">you</span>
          <span class="know">know</span>
          <span class="what">what?</span>
        </div>
      </div>

      <div class="w-[220px] relative -left-8 mt-10 flex flex-col gap-20">
        <span
          >I love building software. I love the feeling of taking my ideas and making them come to life. I love the
          practice and discipline of writing code, and the pride of writing code that others will use as an example of
          how to make their code better. I love the collaborative process. I love the feeling of solving really
          difficult bugs. I even love testing.</span
        >
        <span class="text-xl leading-6 font-bold"
          >No matter how much I love it, some days are just a fucking grind. And that’s
          <a
            class="text-primary underline"
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
.cluster > * {
  position: absolute;
  font-size: 5.4rem;
}

.but {
  font-size: 6rem;
  top: -4%;
  left: 15%;
}

.you {
  font-size: 6.5rem;
  left: 48%;
  top: 5%;
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
