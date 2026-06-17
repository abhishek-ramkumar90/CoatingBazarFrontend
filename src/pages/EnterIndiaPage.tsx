import { FormEvent, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { sendEnquiry } from "@/services/api.ts";

const stats = [
  { title: "1.4B+", description: "Consumers" },
  { title: "Fast Growth", description: "Manufacturing Economy" },
  { title: "Skilled Talent", description: "Engineering Workforce" },
  { title: "Competitive Costs", description: "Production & Operations" },
];

const helpCards = [
  ["📊 Market Research", "Industry analysis, competitor mapping and demand assessment."],
  ["🏢 Company Formation", "Wholly owned subsidiaries, LLPs, branches and JVs."],
  ["📜 Licensing & Compliance", "GST, IEC, BIS, factory approvals and regulatory guidance."],
  ["🤝 Distributor Network", "Find dealers, distributors and channel partners across India."],
  ["🏭 Manufacturing Setup", "Site selection, supplier sourcing and plant setup assistance."],
  ["🚚 Supply Chain", "Warehousing, logistics, procurement and inventory planning."],
] as const;

const supportedIndustries = [
  "Industrial Coatings",
  "Powder Coatings",
  "Chemicals",
  "Industrial Equipment",
  "Automotive Components",
  "Construction Materials",
];

const processSteps = [
  "1. Discovery",
  "2. Market Validation",
  "3. Strategy",
  "4. Company Setup",
  "5. Supplier Network",
  "6. Launch & Scale",
];

const EnterIndiaPage = () => {
  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lookingFor, setLookingFor] = useState("Looking For");
  const [investmentBudget, setInvestmentBudget] = useState("");
  const [expansionPlans, setExpansionPlans] = useState("");

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!companyName.trim() || !contactPerson.trim() || !emailAddress.trim() || !phoneNumber.trim() || !expansionPlans.trim()) {
      toast({
        title: "Please complete required fields",
        description: "Company name, contact person, email address, phone number, and expansion plans are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      await sendEnquiry({
        subject: "Enter India - Market Entry Consultation",
        companyname: companyName.trim(),
        sector: lookingFor === "Looking For" ? "" : lookingFor,
        contactnumber: phoneNumber.trim(),
        contactperson: contactPerson.trim(),
        surface: "",
        environment: investmentBudget.trim(),
        requirement: expansionPlans.trim(),
        quantity: "",
        timeline: "",
        email: emailAddress.trim(),
      });

      toast({
        title: "Inquiry submitted",
        description: "Our India market entry team will contact you soon.",
      });

      setCompanyName("");
      setContactPerson("");
      setEmailAddress("");
      setPhoneNumber("");
      setLookingFor("Looking For");
      setInvestmentBudget("");
      setExpansionPlans("");
    } catch {
      toast({
        title: "Submission failed",
        description: "We could not submit your inquiry right now. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#f5f7fa",
        color: "#1f2937",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <Navbar />

      <section
        className="px-5 py-[100px] text-center text-white"
        style={{
          background: "var(--hero-gradient)",
        }}
      >
        <h1 className="mb-5 text-4xl font-bold md:text-[56px]">Enter the Indian Market</h1>
        <p className="mx-auto max-w-[900px] text-xl md:text-[22px]">
          End-to-end India market entry services for global manufacturers, coating companies,
          equipment suppliers and industrial brands.
        </p>
        <button
          type="button"
          onClick={scrollToContact}
          className="mt-[30px] inline-block rounded-[10px] border-0 bg-white px-[30px] py-[15px] font-bold"
          style={{ color: "#0284c7" }}
        >
          Schedule Consultation
        </button>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 py-[70px]">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[38px]">Why India?</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl px-6 py-[25px] text-center text-white"
              style={{ background: "#0284c7" }}
            >
              <h3 className="text-2xl font-bold">{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 py-[70px]">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[38px]">How We Help</h2>
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {helpCards.map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-[30px]"
              style={{ boxShadow: "0 5px 15px rgba(0,0,0,.08)" }}
            >
              <h3 className="mb-3 text-xl font-bold" style={{ color: "#0284c7" }}>
                {title}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 py-[70px]">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[38px]">Industries We Support</h2>
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {supportedIndustries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl bg-white p-[30px] text-lg"
              style={{ boxShadow: "0 5px 15px rgba(0,0,0,.08)" }}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 py-[70px]">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[38px]">Market Entry Process</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {processSteps.map((step) => (
            <div
              key={step}
              className="rounded-[40px] px-5 py-[14px] text-white"
              style={{ background: "#0284c7" }}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <div ref={contactSectionRef} className="mx-auto max-w-[1200px] px-5 py-[70px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] bg-white p-[40px]"
          style={{ boxShadow: "0 5px 15px rgba(0,0,0,.08)" }}
        >
          <h2 className="mb-10 text-center text-3xl font-bold md:text-[38px]">
            Request India Market Entry Consultation
          </h2>
          <div className="grid gap-[15px] md:grid-cols-2">
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="w-full rounded-[8px] border px-[14px] py-[14px]"
              style={{ borderColor: "#ddd" }}
            />
              <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-[8px] border px-[14px] py-[14px]"
                  style={{ borderColor: "#ddd" }}
              />
          </div>
          <div className="mt-[15px] grid gap-[15px] md:grid-cols-2">
            <input
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder="Contact Person"
              className="w-full rounded-[8px] border px-[14px] py-[14px]"
              style={{ borderColor: "#ddd" }}
            />
            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-[8px] border px-[14px] py-[14px]"
              style={{ borderColor: "#ddd" }}
            />
          </div>

          <div className="mt-[15px] grid gap-[15px] md:grid-cols-2">
            <select
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              className="w-full rounded-[8px] border px-[14px] py-[14px]"
              style={{ borderColor: "#ddd" }}
            >
              <option>Looking For</option>
              <option>Distributor Network</option>
              <option>Manufacturing Setup</option>
              <option>Supplier Identification</option>
              <option>Market Research</option>
              <option>Complete Market Entry Support</option>
            </select>
            <input
              value={investmentBudget}
              onChange={(e) => setInvestmentBudget(e.target.value)}
              placeholder="Investment Budget"
              className="w-full rounded-[8px] border px-[14px] py-[14px]"
              style={{ borderColor: "#ddd" }}
            />
          </div>
            <div className="mt-[15px] grid gap-[15px] md:grid-cols-2">
                <div className="hidden md:block" />
            </div>
          <textarea
            rows={5}
            value={expansionPlans}
            onChange={(e) => setExpansionPlans(e.target.value)}
            placeholder="Tell us about your India expansion plans"
            className="w-full rounded-[8px] border px-[14px] py-[14px]"
            style={{ borderColor: "#ddd" }}
          />
          <div className="mt-8">
            <button
              type="submit"
              className="rounded-[10px] border-0 px-[30px] py-[15px] text-white"
              style={{ background: "#0284c7" }}
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>

      <section className="px-5 py-[70px] text-center text-white" style={{ background: "#0f172a" }}>
        <h2 className="text-3xl font-bold md:text-[38px]">Ready to Expand into India?</h2>
        <p className="mx-auto mt-3 max-w-[900px] text-lg">
          We connect global manufacturers with India&apos;s supplier, distributor, manufacturing and
          logistics ecosystem.
        </p>
      </section>
    </div>
  );
};

export default EnterIndiaPage;

