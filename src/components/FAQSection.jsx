import React, { useState } from "react";
import { faqItems } from "../data/faq.js";
import { IconChevron } from "./Icons.jsx";
import { AnimatedSection } from "./AnimatedSection.jsx";

function FaqItem({ item, open, onToggle }) {
  const panelId = `faq-panel-${item.question.replace(/\s+/g, "-").slice(0, 24)}`;

  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <IconChevron open={open} />
      </button>
      <div id={panelId} className="faq-answer" hidden={!open}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-aqua" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-container">
        <AnimatedSection className="section-header section-header--center">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
        </AnimatedSection>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
