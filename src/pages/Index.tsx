import React, { useState, useEffect } from "react";
import CountdownTimer from "../components/CountdownTimer";
import BenefitCard from "../components/BenefitCard";
import FAQItem from "../components/FAQItem";
import AudienceCard from "../components/AudienceCard";
import CTAButton from "../components/CTAButton";
import ROICalculator from "../components/ROICalculator";
import { useToast } from "@/components/ui/use-toast";
import { 
  CheckCircle, Clock, Mail, Users, TrendingUp, BadgeDollarSign, 
  BarChart, Shield, Target, Zap, CheckCheck, Database,
  UserCheck, Building, Briefcase, Lightbulb, Calculator,
  DollarSign, Headphones, ArrowRight, MessageSquare,
  Award, Star, ThumbsUp, Sparkles
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [priceIncreased, setPriceIncreased] = useState(false);

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

  const handleTimeUp = () => {
    setPriceIncreased(true);
    toast({
      title: "Price Increased!",
      description: "The price has gone up to ₹1,600. Act now before it increases again!",
      variant: "destructive",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    // Implement the purchase flow here
    toast({
      title: "Processing your order",
      description: "Thank you for your interest! We're preparing your email database for delivery.",
    });
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
            
            <div className="md:w-2/5 bg-gradient-to-br from-white to-brand-light p-8 rounded-xl shadow-lg border border-brand-gray animate-fade-in">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-brand-navy">Limited Time Offer</h3>
                <div className="flex items-center justify-center gap-2 text-brand-orange font-semibold mt-2">
                  <span className="text-3xl line-through opacity-70">₹2,400</span>
                  <span className="bg-brand-orange/10 p-1 rounded text-sm">50% OFF</span>
                  <span className="text-3xl">{priceIncreased ? "₹1,600" : "₹1,200"}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-center mb-4">
                  <p className="text-brand-navy font-semibold">This Offer Expires In:</p>
                </div>
                <CountdownTimer hours={24} onComplete={handleTimeUp} />
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

      {/* Social Proof WhatsApp Section - Enhanced */}
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

          {/* Enhanced WhatsApp Cards - Increased Size */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm mx-auto hover:shadow-xl transition-all duration-300">
              <div className="bg-[#128C7E] text-white p-3 rounded-t-lg flex items-center">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden mr-3 flex items-center justify-center text-sm font-bold text-[#128C7E]">
                  RA
                </div>
                <div>
                  <p className="font-medium">Raj** M******</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-4 px-3 bg-[#E5DDD5] h-96 overflow-y-auto rounded-b-lg">
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Hi
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:42 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Hello
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:43 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Did any leads work for you?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:45 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Bro, this list actually works! Sent emails yesterday, got 2 replies already
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:47 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Both are founders. This was worth it.
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:48 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    That's Great! Keep sending more emails to leads.
                    <span className="text-[10px] text-gray-500 block text-right mt-1">12:50 PM</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm mx-auto hover:shadow-xl transition-all duration-300">
              <div className="bg-[#128C7E] text-white p-3 rounded-t-lg flex items-center">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden mr-3 flex items-center justify-center text-sm font-bold text-[#128C7E]">
                  +91
                </div>
                <div>
                  <p className="font-medium">+91 983** ***32</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-4 px-3 bg-[#E5DDD5] h-96 overflow-y-auto rounded-b-lg">
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Hello Sir
                    <span className="text-[10px] text-gray-500 block text-right mt-1">10:15 AM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Hi, Did you get your email list?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">10:17 AM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Yes, I got the email list instantly after Payment. Are these really verified?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">10:20 AM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Yep, all fresh and verified
                    <span className="text-[10px] text-gray-500 block text-right mt-1">10:21 AM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Thankyou
                    <span className="text-[10px] text-gray-500 block text-right mt-1">10:22 AM</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F6F6F6] rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm mx-auto hover:shadow-xl transition-all duration-300">
              <div className="bg-[#128C7E] text-white p-3 rounded-t-lg flex items-center">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden mr-3 flex items-center justify-center text-sm font-bold text-[#128C7E]">
                  +91
                </div>
                <div>
                  <p className="font-medium">+91 974** ***22</p>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="py-4 px-3 bg-[#E5DDD5] h-96 overflow-y-auto rounded-b-lg">
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Hi
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:22 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Hello
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:23 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Ji, ye leads freelancers ke liye bhi useful hai kya?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:25 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Aapki niche kya hai?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:26 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Website Development and Logo Design
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:28 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Sir, startup founders ko website and logo chahiye hote hai. Aapke liye toh perfect hai.
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:30 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    ok, send me the link.
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:31 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    www.netreads.in/fresh_business_leads
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:32 PM</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white rounded-lg py-2 px-3 text-sm max-w-[80%] relative">
                    Payment Done. Leads email pe milengi?
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:40 PM</span>
                  </span>
                </div>
                <div className="mb-4 text-right">
                  <span className="inline-block bg-[#DCF8C6] rounded-lg py-2 px-3 text-sm max-w-[80%] text-left relative">
                    Ji sir
                    <span className="text-[10px] text-gray-500 block text-right mt-1">3:41 PM</span>
                  </span>
                </div>
              </div>
            </div>
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

          {/* Updated Fixed ROI Table */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Conservative Scenario */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-brand-blue/90 to-brand-blue/70 text-white p-4">
                <h3 className="text-xl font-bold text-center">Conservative Scenario</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Investment</span>
                    <span className="font-bold">₹1,200</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Clients Converted</span>
                    <span className="font-bold">2 clients</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Revenue per Client</span>
                    <span className="font-bold">₹20,000</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Total Revenue</span>
                    <span className="font-bold">₹40,000</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold text-brand-blue">ROI</span>
                    <span className="font-bold text-brand-
