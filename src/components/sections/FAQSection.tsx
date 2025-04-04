import React, { useState } from 'react';
import Section from './Section';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <span className="text-stone-400 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is MOUSA?",
      answer: "MOUSA is a music platform built to create a more sustainable ecosystem for artists and a more meaningful experience for music lovers. We combine direct music purchases, artist subscriptions, and personal cloud storage in one unified platform, giving artists multiple ways to earn while providing fans with a better way to support creators they love."
    },
    {
      question: "How is MOUSA different from other music platforms?",
      answer: "Unlike traditional streaming services that pay artists fractions of a penny per stream, MOUSA prioritizes direct artist support through multiple revenue channels. We also give artists unprecedented control over their presence, including custom domain options and page customization. What truly sets us apart is our community-driven approach—artists help design the features they need, and listeners have a voice in platform development. As early users of MOUSA the first artists will directly have a say on what features they want to see. As a Public Benefit Company, we're legally committed to creating a positive impact for artists, not just maximizing profits."
    },
    {
      question: "What does it mean that MOUSA is a Public Benefit Company?",
      answer: "As a Public Benefit Company (PBC), Mousa has a legal obligation to consider the impact of our decisions on artists, listeners, and the broader music community—not just shareholders. This structure ensures our commitment to fair artist compensation and community-centered development remains at the core of our business, even as we grow."
    },
    {
      question: "Who is behind MOUSA?",
      answer: "MOUSA isn't being built by a large corporation or backed by major labels. It's being created by a solo founder with a passion for music and a vision for a more artist-centered platform. As an independent developer, I'm building MOUSA to address the real problems I've seen in the music industry, with the freedom to prioritize artist success and community values over corporate interests. This independence allows MOUSA to truly focus on what matters: creating a sustainable ecosystem for artists and a meaningful experience for music lovers."
    },
    {
      question: "How does MOUSA pay artists?",
      answer: `MOUSA is still in development, but we’re building the platform around one core belief: artists should keep as much of their earnings as possible.

Right now, we’re planning to use Stripe Connect to power artist payouts. This allows artists to get paid directly to their bank accounts, quickly and securely — and it also means MOUSA won’t be holding onto your money.

We’re currently thinking about a default 10% platform fee on sales and subscription revenue to help support the platform. However, we know that as artists grow, they deserve to keep more of what they earn. That’s why we’re also planning optional artist subscription tiers, where paying a small monthly fee could reduce that cut — or even bring it down to 0%.

In short:

"The more you grow, the less we take."

This system isn’t final, and we’re still testing what makes the most sense for artists. But one thing that won’t change is our commitment to being transparent and fair. MOUSA exists to serve artists, not squeeze them.

If you’re an artist and want to be part of shaping this, we’d love to hear from you.`
    },
    {
      question: "Do artists need to pay to use MOUSA?",
      answer: "No. Artists can join Mousa and sell their music with no upfront costs. We offer a free tier with standard revenue sharing, as well as optional subscription tiers that provide reduced commission rates and advanced features like custom domains and enhanced page customization."
    },
    {
      question: "How does the MOUSA community influence the platform?",
      answer: "We believe those who use MOUSA should help shape its future. After initial release of the service, artists will start participating in regular roundtables to guide the development of creator tools and economic models. Listeners can vote on feature priorities and participate in beta testing. This collaborative approach ensures we're building features that truly serve our community rather than imposing a corporate vision. From major features to interface improvements, your voice matters in how MOUSA evolves."
    },
    {
      question: "How does the music purchasing work?",
      answer: "When you purchase music on MOUSA, you truly own it. Your purchases can be stored in your personal cloud library if you are a MOUSA subscriber, accessible from any device. You can also upload music you've purchased elsewhere to create a unified collection of all your owned music."
    },
    {
      question: `What is the "artist subscription" feature?`,
      answer: "Artist subscriptions allow fans to support creators directly through monthly payments in exchange for exclusive content, early access to releases, and other perks defined by the artist. This creates predictable income for artists while giving fans a deeper connection to the music they love."
    },
    {
      question: `How is my privacy protected on MOUSA?`,
      answer: "We're committed to protecting your privacy and giving you control over your data. We don't sell your personal information to third parties, and we're transparent about what data we collect and how it's used. Our business model is based on connecting artists and fans directly, not on monetizing user data."
    },
    {
      question: `How can I contribute to MOUSA'S development?`,
      answer: "When you join MOUSA, you'll have opportunities to participate in our community feedback program. This includes feature voting, user testing sessions, and community discussions about the future of the platform. We regularly share our development roadmap publicly and incorporate feedback into our prioritization. For artists, we host dedicated sessions to ensure our tools meet real-world creative needs."
    },
    {
      question: `How do I become an artist on MOUSA?`,
      answer: "We're currently in development and will be launching with a select group of founding artists. If you're interested in being among our first artists, please join our waitlist and indicate that you're an artist in the signup form. We'll reach out with details as we approach launch."
    },
    {
      question: `When will MOUSA be available?`,
      answer: "I'm currently building MOUSA and I plan to launch with an initial group of artists and listeners in the coming months. I am working on this completely solo, so please be patient with the development timeline. Join our waitlist to be notified when early access becomes available."
    },
  ];

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about MOUSA"
      backgroundColor="#FFFFFF"
      textColor="var(--text-color)"
      padding="large"
    >
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQSection;