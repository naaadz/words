<template>
  <div class="container mx-auto h-full flex flex-col items-center justify-center">
    <div class="inner relative flex gap-12">
      <div class="col col-1 flex-1">
        <p>
          <span class="dropcap-spacer"></span>
          <span class="dropcap font-harley absolute text-primary">A</span>
          m not "mansplaining" or trying to discount how you feel - I'm offering a perspective that might help. Believe
          me - I know what it's like to dislike my body. I got zapped in Iraq and I've got some unsightly scars, and I
          sometimes struggle to accept that I'll never be as physically capable as I used to be.
        </p>
        <p>
          Anyway...I wish I could let you into a man's head as he's falling in love with a woman. It's a process that's
          so alien, so strange, that I'm afraid you've got to experience it to believe it.
        </p>
        <p>
          Sometimes, a guy will meet a girl and think nothing of it. <span class="pullout-spacer"></span> Maybe she's a
          co-worker, classmate, or his buddy's friend. She gets mentally categorized as "Female, acquaintance, feelings
          neutral". Then, he gets to know her better. If they mesh personality-wise, something fascinating happens in
          the man's mind. He starts to <em>notice</em> things about her appearance - pleasant things. It starts small -
          one day he realizes he <em>likes</em> looking at the curve of her nose, or where her ear lobe meets her face.
        </p>
        <p>
          It's nothing he can put his finger on or describe, really...just that looking at that part of her makes him
          feel good. He starts wanting to do that more. Then, he notices an expression she makes - could be her genuine
          belly-laugh, or the way she furrows her brow in concern - and he gets a little flutter in his chest. They stay
          friendly for awhile, get to know each other better.
        </p>
        <p>
          Then, one day, she hugs him goodbye....and he can't stop thinking about it. He plays it over and over in his
          head -
        </p>
      </div>
      <div class="col col-2 flex-1">
        <p>
          the feel of her breasts through two shirts, her arms around his back, her smell... he finds these little
          mental movies of her playing unbidden when he's driving somewhere, squeezing out his other usual daydreams.
        </p>
        <p>
          Shortly thereafter, the guy realizes that whenever he looks at this woman, he feels <em>good</em>. He
          <em>likes</em> her lines, her curves, her sounds and smells...
        </p>
        <p>
          It's like she's gradually turned from a black-and-white photo into a 3D color movie with surround-sound - a
          perfect movie that makes him feel good. He starts wondering what he can do to keep her around, to make her
          happy. He realizes that he likes looking at her more than any other human being in the world. To him, she is
          perfect and beautiful.<span class="pullout-spacer"></span>
        </p>
        <p>
          A man in love with a woman doesn't see her objectively. There is a filter there, or some kind of participatory
          illusion. He does not see who you see in the mirror. He is seeing someone beautiful and perfect and sublime,
          and it's one of the most powerful things in his life.
        </p>
        <p>
          Go watch a happy old couple that's been married for decades. Watch the man's eyes. Sure, he may appreciate
          some young woman's ass in yoga pants or whatever...but watch his eyes when he's looking at his spouse. If
          you're paying close enough attention, you can <em>almost</em> see the filter click on when his gaze settles on
          her. In that moment, he's not seeing the same frumpy empty-nester that you or I see - he's seeing something
          <em>magical</em>.
        </p>
        <p>
          No shit. If I hadn't lived this stuff, I wouldn't believe it either. But it's
          <a
            class="text-primary underline"
            href="https://www.reddit.com/r/AskWomen/comments/29961a/comment/ciir198/"
            target="_blank"
            >true</a
          >.
        </p>
      </div>
      <span class="pullout absolute text-primary inset-0">Ladies, how do you deal with not being 'pretty'?</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropcap-spacer {
  @apply float-left;
  width: 6.25rem;
  height: 10rem;
  shape-outside: polygon(
    81.37% 4px,
    86.81% 58.95%,
    101.54% 64.64%,
    91.46% 87.16%,
    96.67% 105.2%,
    -30px 103.88%,
    27px -9px
  );
  margin-right: 1rem;
}

.pullout-spacer {
  height: 12rem;
  width: 11rem;
  background: white;
}

.col-1 .pullout-spacer {
  @apply float-right;
  margin-right: -1.5rem;
}

.col-2 .pullout-spacer {
  @apply float-left;
  margin-left: -1.5rem;
}

.dropcap {
  @apply mix-blend-multiply;
  font-size: 25rem;
  left: -3.5rem;
  top: -7rem;
}

.pullout {
  @apply tracking-tight m-auto;
  height: min-content;
  width: 22rem;
  font-size: 2.3rem;
  padding: 2.5rem;
  line-height: 1.2;
  transform: translateY(0.5rem);
  /*background: rgba(209, 235, 14, 0.5);*/
}

.inner {
  width: 46.87rem;
}

.inner p {
  @apply text-justify hyphens-auto;
  font-size: 0.85rem;
  margin-block: 1rem;
}
</style>
