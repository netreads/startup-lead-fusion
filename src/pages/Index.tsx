
import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import BenefitCard from "../components/BenefitCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";
import BonusCard from "../components/BonusCard";
import AudienceCard from "../components/AudienceCard";
import CTAButton from "../components/CTAButton";
import ROICalculator from "../components/ROICalculator";
import { 
  CheckCircle, Clock, Mail, Users, TrendingUp, BadgeDollarSign, 
  BarChart, Shield, Target, Zap, CheckCheck, Database,
  UserCheck, Building, Briefcase, Lightbulb, Calculator,
  DollarSign, Headphones, ArrowRight, MessageSquare,
  Award, Star, ThumbsUp, Sparkles, Gift
} from "lucide-react";

const Index = () => {
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
      valueProposition: "Generate multiple high-value web design projects & retainer contracts with startups building their online presence from scratch.",
      delay: 100
    },
    {
      icon: Briefcase,
      title: "B2B Software Companies",
      description: "Offer your SaaS solutions to startups building their tech stack from scratch, without competing against established relationships.",
      roi: "Lifetime value of ₹240,000+ per client",
      valueProposition: "Secure long-term recurring revenue through SaaS subscriptions as startups adopt your solution into their core workflow.",
      delay: 200
    },
    {
      icon: BadgeDollarSign,
      title: "Financial Services",
      description: "Provide banking, accounting, and funding options to startups with immediate financial needs and fresh capital.",
      roi: "₹120,000+ in service fees per client",
      valueProposition: "Establish yourself as the trusted financial partner from day one, creating relationships that grow with each business success.",
      delay: 300
    },
    {
      icon: Lightbulb,
      title: "Business Consultants",
      description: "Deliver expertise to founders navigating the challenging early stages of business development and growth planning.",
      roi: "Consulting packages worth ₹50,000-₹200,000",
      valueProposition: "Position yourself as an essential advisor during the critical formation period, creating loyal clients who value your guidance.",
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 to-transparent z-0"></div>
        <div className="container max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-3/5 text-left mb-8 md:mb-0 md:pr-12">
              <div className="mb-4 inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1 rounded-full text-sm animate-fade-in">
                EXCLUSIVE LIMITED-TIME OFFER
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 leading-tight animate-fade-in">
                1,000 Fresh Indian Startup Emails <br className="hidden md:block" />
                for <span className="text-brand-orange">JUST ₹1,200</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl animate-fade-in">
                Connect with new Indian businesses & founders who <span className="font-semibold">NEED</span> your services right now | 100% verified | Instant delivery
              </h2>
              
              <div className="flex flex-wrap items-center mt-8 gap-3 animate-fade-in">
                <div className="flex items-center text-sm text-brand-navy bg-white py-1 px-3 rounded-full shadow-sm">
                  <CheckCircle className="h-4 w-4 text-brand-blue mr-1" />
                  <span>100% Verified</span>
                </div>
                <div className="flex items-center text-sm text-brand-navy bg-white py-1 px-3 rounded-full shadow-sm">
                  <Headphones className="h-4 w-4 text-brand-blue mr-1" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center text-sm text-brand-navy bg-white py-1 px-3 rounded-full shadow-sm">
                  <DollarSign className="h-4 w-4 text-brand-blue mr-1" />
                  <span>Money-back Guarantee</span>
                </div>
                <div className="flex items-center text-sm text-brand-navy bg-white py-1 px-3 rounded-full shadow-sm">
                  <MessageSquare className="h-4 w-4 text-brand-blue mr-1" />
                  <span>WhatsApp Proof</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/5 bg-white p-8 rounded-xl shadow-lg border border-brand-gray animate-fade-in">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-brand-navy">Limited Time Offer</h3>
                <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold mt-2">
                  <span className="text-3xl line-through opacity-70">₹2,400</span>
                  <span className="bg-brand-orange/10 p-1 rounded text-sm">50% OFF</span>
                  <span className="text-3xl">₹1,200</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-center mb-4">
                  <p className="text-brand-navy font-semibold">This Offer Expires In:</p>
                </div>
                <CountdownTimer hours={24} />
              </div>
              
              <CTAButton 
                text="GET INSTANT ACCESS NOW" 
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={handleBuyNow} 
                className="w-full"
              />
              
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Secure payment • Instant delivery • 7-day guarantee</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in">
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

        <div className="mt-16 py-8 w-full bg-brand-navy text-center z-10 animate-fade-in">
          <p className="text-xl md:text-2xl font-bold text-white max-w-5xl mx-auto px-4">
            "Stop chasing cold leads. Start connecting with Indian founders actively seeking YOUR solutions."
          </p>
        </div>
      </section>

      {/* Social Proof WhatsApp Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-brand-light to-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-2 inline-block bg-[#25D366]/10 text-[#25D366] font-semibold px-4 py-1 rounded-full text-sm">
              REAL RESULTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              See What Our Customers Are Saying
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real WhatsApp conversations from customers who purchased our startup email database:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-md border border-gray-200 max-w-xs mx-auto">
              <div className="bg-[#128C7E] text-white p-2 rounded-t-lg flex items-center">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden mr-3"></div>
                <div>
                  <p className="font-medium">Rajesh Malhotra</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-3 px-2 bg-[#E5DDD5] h-80 overflow-y-auto rounded-b-lg">
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Hi
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Hello
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Did any leads work for you?
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Bro, this list actually works! Sent emails yesterday, got 2 replies already
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Both are founders. This was worth it.
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    That's Great! Keep sending more emails to leads.
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-md border border-gray-200 max-w-xs mx-auto">
              <div className="bg-[#128C7E] text-white p-2 rounded-t-lg flex items-center">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden mr-3"></div>
                <div>
                  <p className="font-medium">+91 98362 53332</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-3 px-2 bg-[#E5DDD5] h-80 overflow-y-auto rounded-b-lg">
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Hello Sir
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Hi, Did you get your email list?
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Yes, I got the email list instantly after Payment. Are these really verified?
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Yep, all fresh and verified
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Thankyou
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-md border border-gray-200 max-w-xs mx-auto">
              <div className="bg-[#128C7E] text-white p-2 rounded-t-lg flex items-center">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden mr-3"></div>
                <div>
                  <p className="font-medium">+91 97423 70822</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-3 px-2 bg-[#E5DDD5] h-80 overflow-y-auto rounded-b-lg">
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Hi
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Hello
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Ji, ye leads freelancers ke liye bhi useful hai kya?
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Aapki niche kya hai?
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Website Development and Logo Design
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Sir, startup founders ko website and logo chahiye hote hai. Aapke liye toh perfect hai.
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    ok, send me the link.
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    www.netreads.in/fresh_business_leads
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%]">
                    Payment Done. Leads email pe milengi?
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left">
                    Ji sir
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton 
              text="GET YOUR STARTUP LEADS NOW" 
              onClick={handleBuyNow}
              icon={<ArrowRight className="w-5 h-5" />}
            />
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              icon={<ArrowRight className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-16 px-4 md:px-6 bg-brand-navy/5">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-2 inline-block bg-brand-orange/15 text-brand-orange font-semibold px-4 py-1 rounded-full text-sm">
              WHY TRUST US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Database Quality Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-brand-gray/50 flex flex-col items-center text-center">
              <div className="rounded-full bg-brand-blue/10 p-4 mb-4">
                <Award className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every email is manually verified to ensure highest deliverability rates.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-brand-gray/50 flex flex-col items-center text-center">
              <div className="rounded-full bg-brand-blue/10 p-4 mb-4">
                <Star className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Premium Support</h3>
              <p className="text-gray-600">Dedicated WhatsApp support to help maximize your campaign success.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-brand-gray/50 flex flex-col items-center text-center">
              <div className="rounded-full bg-brand-blue/10 p-4 mb-4">
                <ThumbsUp className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">95%+ Accuracy</h3>
              <p className="text-gray-600">Our data accuracy exceeds industry standards with bounce rates under 5%.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-brand-gray/50 flex flex-col items-center text-center">
              <div className="rounded-full bg-brand-blue/10 p-4 mb-4">
                <Sparkles className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Premium Targeting</h3>
              <p className="text-gray-600">Contacts are categorized by industry and location for precise targeting.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl shadow-md border border-brand-gray flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-start mb-6 md:mb-0 md:mr-8">
              <div className="rounded-full bg-green-100 p-2 mr-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Our 7-Day Satisfaction Guarantee</h3>
                <p className="text-gray-600">If our data doesn't meet your expectations, we'll provide a full refund. No questions asked.</p>
              </div>
            </div>
            <CTAButton 
              text="CLAIM YOUR DATABASE" 
              onClick={handleBuyNow}
              className="md:whitespace-nowrap"
              icon={<Gift className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-2 inline-block bg-brand-orange/15 text-brand-orange font-semibold px-4 py-1 rounded-full text-sm">
              CALCULATE YOUR RETURN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Calculate Your Potential ROI
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See the potential return on your investment based on different conversion scenarios:
            </p>
          </div>

          <ROICalculator />

          <div className="mt-12 p-6 bg-white rounded-xl border border-brand-gray/80 shadow-md max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-brand-orange/10 mr-4 mt-1">
                <Lightbulb className="h-5 w-5 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">How We Calculate ROI</h3>
                <p className="text-gray-600">
                  ROI = (Net Profit / Cost of Investment) × 100. For example, in the Conservative Scenario, 
                  the net profit is ₹40,000 - ₹1,200 = ₹38,800. The ROI is then (₹38,800 / ₹1,200) × 100 = 3,233%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section id="audience" className="py-24 px-4 md:px-6 bg-brand-light">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((audience, index) => (
              <AudienceCard
                key={index}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                roi={audience.roi}
                valueProposition={audience.valueProposition}
                delay={audience.delay}
              />
            ))}
          </div>
          
          <div className="mt-16 p-6 bg-white rounded-xl border border-brand-gray shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Transform Your Client Acquisition Strategy</h3>
                <p className="text-gray-600">No matter your industry, freshly registered startups represent the most responsive and high-converting prospect pool available. These businesses are actively looking for service providers right now.</p>
              </div>
              <div className="md:w-1/3">
                <CTAButton 
                  text="GET STARTED TODAY" 
                  onClick={handleBuyNow} 
                  className="w-full"
                  icon={<ArrowRight className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-light to-white">
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
              <div>
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
              
              <div>
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
              icon={<ArrowRight className="w-5 h-5" />}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="mt-16 p-8 bg-brand-navy/95 rounded-xl text-center text-white glass-effect relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Achieve Similar Results For Your Business</h3>
              <CTAButton 
                text="GET YOUR LEADS NOW" 
                onClick={handleBuyNow} 
                className="bg-brand-orange border-brand-orange hover:bg-white hover:text-brand-orange"
                icon={<ArrowRight className="w-5 h-5" />}
              />
            </div>
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
              Our databases typically sell for ₹2,400, but for a limited time we're offering special introductory pricing:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-brand-gray overflow-hidden max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Premium Startup Email Database</h3>
              <p className="text-lg opacity-90">1,000 Verified Decision-Maker Contacts</p>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="text-gray-500 line-through text-2xl">₹2,400</div>
                <div className="ml-4 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded font-bold">
                  50% OFF
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-brand-navy">₹1,200</div>
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
                  icon={<ArrowRight className="w-5 h-5" />}
                />
                <p className="text-red-500 font-medium mt-4">Only 50 copies available at this price</p>
                <p className="text-gray-500 text-sm mt-2">Price increases by ₹200 every 24 hours</p>
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

          <div className="bg-white p-6 rounded-xl border border-brand-orange shadow-md">
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
                  icon={<ArrowRight className="w-5 h-5" />}
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

          <div className="max-w-3xl mx-auto">
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
      <section className="py-16 px-4 md:px-6 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Stop wasting time on low-quality leads. Connect with responsive Indian startup founders actively seeking your solutions.
          </p>
          
          <div className="max-w-md mx-auto">
            <CTAButton 
              text="GET 1,000 STARTUP EMAILS NOW" 
              onClick={handleBuyNow} 
              className="w-full mb-4 bg-brand-orange border-brand-orange hover:bg-white hover:text-brand-orange"
              icon={<ArrowRight className="w-5 h-5" />}
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
              <p>WhatsApp: +91 98765 43210</p>
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
            <p>© 2023 Fresh Indian Startup Database. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
