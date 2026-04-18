export const FAQS_BY_PAGE = {
  home: [
    {
      question: "Is this calculator free?",
      answer:
        "Yes. The calculator is free to use and does not ask you to create an account before seeing your result.",
    },
    {
      question: "Do I need to sign up?",
      answer:
        "No. You can enter your figures and get an answer straight away without signing up or linking any accounts.",
    },
    {
      question: "Does this work for UK mortgages?",
      answer:
        "It is designed for UK-style repayment mortgages and uses a monthly repayment model to estimate the effect of overpayments.",
    },
    {
      question: "Will overpaying always save money?",
      answer:
        "Overpaying usually reduces total interest on a repayment mortgage, but the best choice still depends on your own mortgage terms, flexibility, and other financial priorities.",
    },
  ],
  calculator: [
    {
      question: "Are there overpayment limits?",
      answer:
        "Some mortgages have annual overpayment limits or charges above a certain level. The calculator does not know your lender terms, so always check your paperwork before making extra payments.",
    },
    {
      question: "What if I make a one-off lump sum payment?",
      answer:
        "A lump sum reduces the balance immediately in the model, which can shorten the term and reduce future interest.",
    },
    {
      question: "Do I need to know my exact monthly payment?",
      answer:
        "No. If you leave the monthly payment blank, the calculator estimates a standard repayment from your balance, rate, and remaining term.",
    },
  ],
  shouldIOverpay: [
    {
      question: "When does overpaying make the most sense?",
      answer:
        "Overpaying often makes sense when you want to reduce long-term interest, shorten your mortgage term, and you already have enough day-to-day financial flexibility.",
    },
    {
      question: "When might saving instead make more sense?",
      answer:
        "Saving may feel more suitable if you need easier access to the money, want a larger emergency buffer, or expect near-term spending that matters more than reducing the mortgage balance quickly.",
    },
  ],
  overpaymentLimit: [
    {
      question: "What is an overpayment limit?",
      answer:
        "It is a cap written into some mortgage terms that limits how much extra you can repay without a charge during a set period.",
    },
    {
      question: "Do all mortgages have the same limit?",
      answer:
        "No. Limits vary, so the only safe approach is to check your own mortgage terms before making larger overpayments or lump sums.",
    },
  ],
  payOffEarly: [
    {
      question: "Is a regular overpayment better than a one-off lump sum?",
      answer:
        "Both can help. A regular overpayment builds momentum month after month, while a lump sum can make a noticeable one-time cut to the balance.",
    },
    {
      question: "Can I pay off my mortgage early by shortening the term?",
      answer:
        "Yes. In practice, paying off early usually means reducing the balance faster than planned, which shortens the term if the payment level is maintained.",
    },
  ],
} as const
