<template>
  <div class="absolute h-screen w-full flex flex-col items-center justify-center">
    <div class="inner">
      <p class="change text-3xl">
        <span class="dropcap font-harley text-primary">w</span> hen you change the way you look at things, the things
        you look at change.
      </p>
      <p class="believe text-3xl">When someone shows you who they are, believe them the first time.</p>
      <p class="life">
        Life will break you. Nobody can protect you from that, and being alone won't either, for solitude will also
        break you with its yearning. You have to love. You have to feel. It is the reason you are here on earth. You
        have to risk your heart. You are here to be swallowed up. And when it happens that you are broken, or betrayed,
        or left, or hurt, or death brushes too near, let yourself sit by an apple tree and listen to the apples falling
        all around you in heaps, wasting their sweetness. Tell yourself that you tasted as many as you
        <a
          class="text-primary underline"
          href="https://www.reddit.com/r/quotes/comments/1c9ggxs/comment/l0nfp2v/"
          target="_blank"
          >could</a
        >.
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropcap {
  font-size: 25rem;
  line-height: 0.3;
  float: left;
  shape-outside: polygon(88.43% -36px, 74.1% 34.9%, 93.99% 33.85%, 84.79% 55.17%, 74.15% 98.49%, 0px 100%, 5px -25px);
  padding-right: 2rem;
}

.inner {
  width: 34rem;
}

.inner p {
  margin-block: 2rem;
  margin-inline: auto;
}

.change {
  @apply tracking-tight;
}

.believe {
  @apply tracking-tight;
  text-align: right;
  padding-left: 4rem;
}

.life {
  text-align: justify;
  padding-left: 4rem;
}
</style>
