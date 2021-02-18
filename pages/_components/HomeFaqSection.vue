<template>
  <section class="py-16 lg:py-32">
    <div class="container xl:px-10">
      <div class="faq">
        <h2 class="faq__title">Frequently Asked Questions</h2>
        <div class="faq__questions">
          <div class="faq__question" v-for="(faq, index) in faqs" :key="index">
            <div class="question__number">Q{{ index + 1 }}</div>

            <h3 class="question__question">{{ faq.question }}</h3>

            <p class="question__answer">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question:
            'What is Motion Array, and what is included in a membership?',
          answer:
            'Motion Array is an all-in-one professional filmmakers platform, with unlimited asset downloads, exclusive Premiere Pro plugins, real-time video collaboration and approvals, and a video website builder all included in Motion Array memberships.'
        },
        {
          question: 'Can I use Motion Array assets for commercial use?',
          answer:
            'Absolutely! Most assets are completely cleared for commercial use. A smaller number of video and image assets are labeled as “Editorial use only.”'
        },
        {
          question: 'How does the unlimited download license work?',
          answer:
            'As a paid member, you can use unlimited assets from our Marketplace in as many projects as you’d like. If you cancel your paid membership, you can no longer use your downloaded assets in new projects.'
        },
        {
          question: 'Can I cancel at any time?',
          answer:
            'Yes! Just switch to a Free plan at any time, and you won’t be billed again!'
        },
        {
          question:
            'What happens to my distributed videos after cancelling my subscription?',
          answer:
            'All videos created and published during an active subscription are cleared forever.'
        },
        {
          question: 'Are the Marketplace asset downloads really unlimited?',
          answer:
            'As a paying member, you can download as many assets as you need. Just remember that memberships only cover a single user, and we don’t allow automatic downloading tools.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faq__title {
  text-align: center;
  --text-opacity: 1;
  color: #4a4a4a;
  color: rgba(74, 74, 74, var(--text-opacity));
  font-size: 30px;
}

.faq__questions {
  margin-top: 80px;
}

.faq__question ~ .faq__question {
  margin-top: 30px;
}

.question__number {
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
  font-size: 14px;
  font-weight: 600;
  border-radius: 9999px;
  background: linear-gradient(90deg, #848484 0%, #151515 100%);
}

.question__question {
  margin-top: 10px;
  --text-opacity: 1;
  color: #4a4a4a;
  color: rgba(74, 74, 74, var(--text-opacity));
  font-size: 20px;
}
.question__answer {
  margin-top: 10px;
  --text-opacity: 1;
  color: #999999;
  color: rgba(153, 153, 153, var(--text-opacity));
  text-align: justify;
}

@media (min-width: 1024px) {
  .faq__title {
    font-size: 36px;
  }

  .faq__questions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 100px;
    -moz-column-gap: 100px;
    column-gap: 100px;
    grid-row-gap: 50px;
    row-gap: 50px;
    margin-top: 60px;
  }
  .question__answer,
  .question__question {
    text-align: left;
  }
}
</style>
