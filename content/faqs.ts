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
    {
      question: "Is there a limit to how much I can overpay?",
      answer:
        "Most UK repayment mortgages allow you to overpay up to 10% of your outstanding balance each year without incurring a penalty. However, this limit can vary depending on your lender and mortgage terms. Always check your mortgage agreement or speak to your lender before making large overpayments to avoid unexpected charges.",
    },
    {
      question: "Should I overpay my mortgage or save instead?",
      answer:
        "Overpaying your mortgage can reduce the total interest you pay and help you become mortgage-free sooner. However, if savings accounts or investments offer higher returns than your mortgage interest rate, it may make more sense to save instead. The right choice depends on your financial goals, risk tolerance, and need for accessible cash.",
    },
    {
      question: "What are Early Repayment Charges (ERCs)?",
      answer:
        "Early Repayment Charges (ERCs) are fees some lenders apply if you repay more than your allowed overpayment limit or pay off your mortgage early. These charges are typically a percentage of the amount overpaid and are most common during fixed or discounted rate periods. Checking for ERCs before overpaying is essential to avoid reducing or cancelling out your potential savings.",
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
