import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { sendEnquiry } from "@/services/api.ts";

type RequirementType =
  | "New product formulation"
  | "Modify existing product"
  | "Private label"
  | "Testing and analysis"
  | "Speciality / protective"
  | "Not sure";

const requirementTypes: RequirementType[] = [
  "New product formulation",
  "Modify existing product",
  "Private label",
  "Testing and analysis",
  "Speciality / protective",
  "Not sure",
];

const CustomSolutionsPage = () => {
  const [selectedType, setSelectedType] = useState<RequirementType>("New product formulation");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [substrate, setSubstrate] = useState("");
  const [environment, setEnvironment] = useState("");
  const [details, setDetails] = useState("");
  const [quantityRange, setQuantityRange] = useState("");
  const [timeline, setTimeline] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!company.trim() || !industry.trim() || !details.trim() || !email.trim()) {
      toast({
        title: "Please complete required fields",
        description: "Company, industry, requirement details, and email are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      await sendEnquiry({
        subject: `Custom Solutions - ${selectedType}`,
        companyname: company.trim(),
        sector: industry.trim(),
        contactnumber: phone.trim(),
        contactperson: "",
        surface: substrate.trim(),
        environment: environment.trim(),
        requirement: details.trim(),
        quantity: quantityRange.trim(),
        timeline: timeline.trim(),
        email: email.trim(),
      });

      toast({
        title: "Requirement submitted",
        description: "Our technical team will review and contact you shortly.",
      });

      setCompany("");
      setIndustry("");
      setSubstrate("");
      setEnvironment("");
      setDetails("");
      setQuantityRange("");
      setTimeline("");
      setEmail("");
      setPhone("");
      setSelectedType("New product formulation");
    } catch {
      toast({
        title: "Submission failed",
        description: "We could not submit your enquiry right now. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative z-10 grid gap-8 py-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Custom coating solutions</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
              Can&apos;t find what you need off the shelf? Describe your requirement and our technical team
              will match you with the right formulation partners.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border border-white/20 bg-white/5 p-5">
            {[
              ["Submit your requirement", "Describe your surface, environment, and performance needs"],
              ["Technical review", "Experts assess feasibility and match with formulators"],
              ["Proposal in 48 hours", "Receive specification, timeline, and cost estimate"],
              ["Sample and approval", "Trial batch, sign-off, then full production"],
            ].map(([title, copy], index) => (
              <div key={title} className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-slate-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold text-foreground">What type of requirement do you have?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Select the closest match so we can route your request to the right specialist.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {requirementTypes.map((type) => {
              const isActive = selectedType === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/60",
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Tell us about your project</h3>
              <p className="text-sm text-muted-foreground">
                Add as much detail as you can for a faster and more accurate proposal.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Company name *</span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your company name"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Industry / sector *</span>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select sector</option>
                  <option value="Architectural">Architectural</option>
                  <option value="Automotive">Automotive</option>
                  <option value="General industrial">General industrial</option>
                  <option value="Infrastructure">Infrastructure</option>
                </select>
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Substrate / surface</span>
                <input
                  value={substrate}
                  onChange={(e) => setSubstrate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. steel, aluminium, wood"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Target environment / exposure</span>
                <input
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. outdoor, humidity, chemical splash"
                />
              </label>

              <label className="text-sm md:col-span-2">
                <span className="mb-1.5 block font-medium text-foreground">Describe your requirement in detail *</span>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Performance requirements, standards, colour, finish, and application method"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Estimated quantity (litres / year)</span>
                <select
                  value={quantityRange}
                  onChange={(e) => setQuantityRange(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select range</option>
                  <option value="Below 5,000">Below 5,000</option>
                  <option value="5,000 - 25,000">5,000 - 25,000</option>
                  <option value="25,000 - 100,000">25,000 - 100,000</option>
                  <option value="Above 100,000">Above 100,000</option>
                </select>
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Timeline</span>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 30 days">Within 30 days</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="Exploring options">Exploring options</option>
                </select>
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Contact email *</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@company.com"
                />
              </label>

              <label className="text-sm">
                <span className="mb-1.5 block font-medium text-foreground">Phone / WhatsApp</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+91 XXXXX XXXXX"
                />
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Submit requirement to technical team
            </Button>
          </form>
        </div>
      </section>

      <section className="border-y border-border bg-card/60 py-5">
        <div className="container grid gap-4 text-center text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          <p className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> 35+ formulators in our partner network
          </p>
          <p className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> 48-hour initial proposal target
          </p>
          <p className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> NDA options available
          </p>
          <p className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" /> IS / BIS compliant pathways
          </p>
        </div>
      </section>

      <section className="container py-8">
        <p className="text-center text-sm text-muted-foreground">
          Need product pricing too? Visit <Link to="/prices" className="text-primary hover:underline">All Prices</Link>.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSolutionsPage;

