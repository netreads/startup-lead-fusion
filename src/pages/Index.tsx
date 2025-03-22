
import React, { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import BenefitCard from "../components/BenefitCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";
import BonusCard from "../components/BonusCard";
import AudienceCard from "../components/AudienceCard";
import CTAButton from "../components/CTAButton";
import { 
  CheckCircle, Clock, Mail, Users, TrendingUp, BadgeDollarSign, 
  BarChart, Shield, Target, Zap, LucideIcon, CheckCheck, Database,
  UserCheck, Building, Briefcase, Lightbulb
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    benefits: false,
    audience: false,
    testimonials: false,
    pricing: false,
    faq: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const benefits = [
    {
      icon: Database,
      title: "Fresh & Verified Data",
      description: "All startups registered within the last 90 days, ensuring you're connecting with businesses at their most receptive stage.",
      delay: 100
    },
    {
      icon: UserCheck,
      title: "Direct Decision-Maker Access",
      description: "Bypass gatekeepers and reach founders instantly with direct contact information for key decision-makers.",
      delay: 200
    },
    {
      icon: TrendingUp,
      title: "Massive ROI Potential",
      description: "Convert just ONE lead to earn back your investment 16x over. Our customers report average conversion values of ₹48,000 per client.",
      delay: 300
    },
    {
      icon: Target,
      title: "Laser-Targeted Prospecting",
      description: "Stop wasting resources on unqualified leads. Every contact in our database represents a genuine opportunity.",
      delay: 400
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description: "Reach these startups before your competitors and position yourself as the go-to solution in their early stages.",
      delay: 500
    },
    {
      icon: Clock,
      title: "Time-Efficiency",
      description: "Start sending proposals immediately after purchase. Our organized format lets you import directly into your CRM system.",
      delay: 600
    }
  ];

  const audiences = [
    {
      icon: Building,
      title: "Marketing Agencies",
      description: "Connect with startups needing branding, website development, and digital marketing services at their formation stage.",
      roi: "Average ₹75,000 per client acquisition",
      delay: 100
    },
    {
      icon: Briefcase,
      title: "B2B Software Companies",
      description: "Offer your SaaS solutions to startups building their tech stack from scratch, without competing against established relationships.",
      roi: "Lifetime value of ₹240,000+ per client",
      delay: 200
    },
    {
      icon: BadgeDollarSign,
      title: "Financial Services",
      description: "Provide banking, accounting, and funding options to startups with immediate financial needs and fresh capital.",
      roi: "₹120,000+ in service fees per client",
      delay: 300
    },
    {
      icon: Lightbulb,
      title: "Business Consultants",
      description: "Deliver expertise to founders navigating the challenging early stages of business development and growth planning.",
      roi: "Consulting packages worth ₹50,000-₹200,000",
      delay: 400
    }
  ];

  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rajesh Sharma",
      position: "Marketing Agency Owner",
      testimonial: "Within 2 weeks of using this database, we secured 3 new startup clients for our web design services. The ROI has been incredible—these leads converted 5x faster than our regular prospecting methods.",
      delay: 100
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Mehta",
      position: "SaaS Founder",
      testimonial: "As a software provider, we struggle to identify new businesses before our competitors. This email list changed everything—we've already onboarded 6 new clients who needed our exact solution.",
      delay: 200
    },
    {
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Vikram Patel",
      position: "Business Consultant",
      testimonial: "The quality of these leads is outstanding. These startups are actively looking for guidance, making my outreach significantly more effective. I've converted 4 new consulting clients so far.",
      delay: 300
    }
  ];

  const bonuses = [
    {
      number: 1,
      title: "100 FREE Sample Emails",
      description: "Test the quality before full deployment and start generating leads immediately.",
      value: "₹600",
      delay: 100
    },
    {
      number: 2,
      title: "Premium Email Templates",
      description: "Copy-and-paste templates proven to get 30%+ response rates from startup founders.",
      value: "₹1,500",
      delay: 200
    },
    {
      number: 3,
      title: "Video Training",
      description: "Comprehensive guide on converting cold emails into paying clients with proven strategies.",
      value: "₹3,500",
      delay: 300
    }
  ];

  const faqs = [
    {
      question: "How fresh is this data?",
      answer: "All startups in our database have been registered within the last 90 days. We update our database weekly to ensure you're always working with the freshest leads."
    },
    {
      question: "What information is included for each contact?",
      answer: "Each entry includes: founder/decision-maker email, company name, industry category, location, registration date, and when available, phone number and company size."
    },
    {
      question: "How are these emails verified?",
      answer: "We use a multi-step verification process including API validation, manual checks, and bounce rate testing to ensure deliverability rates exceeding 95%."
    },
    {
      question: "Can I get a sample before purchasing?",
      answer: "Yes! Your purchase includes 100 free sample emails that you can use immediately to test quality before deploying the full database."
    },
    {
      question: "What format will I receive the data in?",
      answer: "You'll receive an organized Excel/CSV file for easy import into any CRM or email marketing system. We also provide import instructions for popular platforms."
    },
    {
      question: "Do you offer a refund if I'm not satisfied?",
      answer: "We offer a 7-day satisfaction guarantee. If the data quality doesn't meet our promised standards, we'll provide a full refund."
    },
    {
      question: "Is this data GDPR compliant?",
      answer: "Yes. All data is collected from publicly available business registration records and follows proper compliance guidelines for B2B marketing communications."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    // Implement the purchase flow here
    alert("Thank you for your interest! This would connect to a payment processor in a real implementation.");
  };

  return (
    <div className="bg-gradient-to-b from-white to-brand-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 to-transparent z-0"></div>
        <div className="container max-w-7xl mx-auto z-10">
          <div className="text-center mb-6">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              EXCLUSIVE LIMITED-TIME OFFER
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 leading-tight animate-in animate-delay-100">
              1,000 Freshly Registered <br className="hidden md:block" />
              Startup Emails for <span className="text-brand-orange">ONLY ₹3,000</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-in animate-delay-200">
              Connect directly with decision-makers who <span className="font-semibold">NEED</span> your services now | 100% verified contacts | Instant delivery
            </h2>
          </div>

          <div className="mt-8 mb-12 animate-in animate-delay-300">
            <div className="text-center mb-4">
              <p className="text-brand-navy font-semibold">This Offer Expires In:</p>
            </div>
            <CountdownTimer hours={24} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in animate-delay-400">
            <CTAButton 
              text="SECURE YOUR LEADS NOW" 
              onClick={handleBuyNow} 
              className="w-full md:w-auto"
            />
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-brand-blue underline font-medium hover:text-brand-navy transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-in animate-delay-500">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-brand-navy/10 p-2 mb-2">
                <Shield className="h-5 w-5 text-brand-navy" />
              </div>
              <p className="text-xs md:text-sm text-center text-gray-600">Secure Payment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-brand-navy/10 p-2 mb-2">
                <CheckCheck className="h-5 w-5 text-brand-navy" />
              </div>
              <p className="text-xs md:text-sm text-center text-gray-600">100% Verified Data</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-brand-navy/10 p-2 mb-2">
                <Mail className="h-5 w-5 text-brand-navy" />
              </div>
              <p className="text-xs md:text-sm text-center text-gray-600">Instant Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-brand-navy/10 p-2 mb-2">
                <CheckCircle className="h-5 w-5 text-brand-navy" />
              </div>
              <p className="text-xs md:text-sm text-center text-gray-600">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>

        <div className="mt-16 py-8 w-full bg-brand-navy text-center z-10 animate-in animate-delay-600">
          <p className="text-xl md:text-2xl font-bold text-white max-w-5xl mx-auto px-4">
            "Stop chasing cold leads. Start connecting with founders actively seeking YOUR solutions."
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why This Email Database Is Different
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Most lead lists contain outdated contacts who've been bombarded with pitches. Our database gives you exclusive access to businesses in their critical formation stage.
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isVisible.benefits ? "" : "opacity-0"
            }`}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={benefit.delay}
              />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <CTAButton 
              text="GET INSTANT ACCESS" 
              onClick={handleBuyNow} 
            />
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section id="audience" className="py-24 px-4 md:px-6 bg-brand-gray/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              IDEAL FOR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Who Can Benefit From This Database
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our startup email database is specially curated for businesses providing essential services to new companies. See how various industries achieve exceptional ROI:
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              isVisible.audience ? "" : "opacity-0"
            }`}
          >
            {audiences.map((audience, index) => (
              <AudienceCard
                key={index}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                roi={audience.roi}
                delay={audience.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              INCLUDED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What You'll Receive
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              More than just emails—a complete toolkit for successful outreach:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-brand-gray p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-in animate-delay-100">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <Mail className="mr-2 text-brand-blue" /> Email Database Contents
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>1,000+ verified email contacts of newly registered Indian startups (last 3 months)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>Direct contact information for founders and key decision-makers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>Company details including industry, location, and registration date</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>Organized CSV/Excel file for easy import into your CRM</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-in animate-delay-200">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center">
                  <BarChart className="mr-2 text-brand-blue" /> Key Advantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>95%+ email deliverability rate (industry average is 75%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>22% average email open rate (industry average is 15%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>5.8% average response rate (industry average is 1%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                    <span>Categorized by industry for targeted campaigns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <CTAButton 
              text="START GENERATING CLIENTS TODAY" 
              onClick={handleBuyNow} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 md:px-6 bg-brand-gray/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              SUCCESS STORIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it—see the results our customers have achieved:
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
              isVisible.testimonials ? "" : "opacity-0"
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
                delay={testimonial.delay}
              />
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-navy rounded-xl text-center text-white">
            <h3 className="text-2xl font-bold mb-6">Achieve Similar Results For Your Business</h3>
            <CTAButton 
              text="GET YOUR LEADS NOW" 
              onClick={handleBuyNow} 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              LIMITED OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Exclusive Introductory Pricing
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our databases typically sell for ₹6,000, but for a limited time we're offering special introductory pricing:
            </p>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-lg border border-brand-gray overflow-hidden max-w-3xl mx-auto ${
              isVisible.pricing ? "animate-in" : "opacity-0"
            }`}
          >
            <div className="bg-brand-navy text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Premium Startup Email Database</h3>
              <p className="text-lg opacity-90">1,000 Verified Decision-Maker Contacts</p>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-gray-500 line-through text-2xl">₹6,000</div>
                <div className="ml-4 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded font-bold">
                  50% OFF
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-brand-navy">₹3,000</div>
                <p className="text-gray-500 mt-2">One-time payment, no subscription</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                  <span>1,000+ verified startup email contacts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                  <span>All startups registered in the last 90 days</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                  <span>Direct founder and decision-maker contacts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                  <span>Excel/CSV format with detailed company info</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-blue shrink-0 mr-2 mt-0.5" />
                  <span>Instant delivery to your email</span>
                </div>
              </div>

              <div className="text-center">
                <CTAButton 
                  text="BUY NOW - LIMITED AVAILABILITY" 
                  onClick={handleBuyNow} 
                  className="w-full"
                />
                <p className="text-red-500 font-medium mt-4">Only 50 copies available at this price</p>
                <p className="text-gray-500 text-sm mt-2">Price increases by ₹500 every 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-gray/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-orange/15 text-brand-orange font-semibold px-4 py-1 rounded-full text-sm">
              FREE EXTRAS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Exclusive Bonuses Included
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Order today and receive these valuable bonuses completely free:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {bonuses.map((bonus, index) => (
              <BonusCard
                key={index}
                number={bonus.number}
                title={bonus.title}
                description={bonus.description}
                value={bonus.value}
                delay={bonus.delay}
              />
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border border-brand-orange animate-in">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
                <h4 className="text-xl font-bold text-brand-navy mb-2">
                  First 20 Buyers Special Bonus
                </h4>
                <p className="text-gray-600">
                  Act now and receive an additional 200 premium leads from fast-growing startups with recent funding (₹1,200 value) absolutely FREE!
                </p>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <CTAButton 
                  text="CLAIM THIS OFFER" 
                  onClick={handleBuyNow} 
                  className="whitespace-nowrap"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm">
              QUESTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know before making your purchase:
            </p>
          </div>

          <div 
            className={`max-w-3xl mx-auto ${
              isVisible.faq ? "animate-in" : "opacity-0"
            }`}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a 
              href="mailto:support@example.com"
              className="text-brand-blue font-medium hover:text-brand-navy transition-colors"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-6 bg-brand-navy text-white">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Stop wasting time on low-quality leads. Connect with responsive startup founders actively seeking your solutions.
          </p>
          
          <div className="max-w-md mx-auto">
            <CTAButton 
              text="GET 1,000 STARTUP EMAILS NOW" 
              onClick={handleBuyNow} 
              className="w-full mb-4"
            />
            <p className="text-white/80 text-sm">
              Secure payment • Instant delivery • 7-day satisfaction guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-gray-900 text-white/70">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Contact Us</h4>
              <p className="mb-2">Email: support@example.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Payment Methods</h4>
              <p>All major credit cards accepted</p>
              <p>UPI and Net Banking available</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© 2023 Premium Startup Database. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
