import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import { sendEnquiry } from "@/services/api.ts";
import { useSeo } from "@/hooks/useSeo";

const BuildYourPaintShopPage = () => {
  useSeo({
    title: "Build Your Industrial Paint Shop | CoatingBazaar",
    description:
      "Plan and launch your industrial paint shop with support for design, compliance, equipment procurement, and commissioning.",
    canonicalPath: "/build-your-paint-shop",
    keywords: ["paint shop setup", "industrial paint plant", "powder coating line setup"],
  });

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [location, setLocation] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const handleSubmitInquiry = async (e: FormEvent) => {
    e.preventDefault();

    if (!companyName.trim() || !emailAddress.trim() || !projectDetails.trim()) {
      toast({
        title: "Please complete required fields",
        description: "Company Name, Email Address, and project details are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      await sendEnquiry({
        subject: "Build Your Paint Shop - Consultation Request",
        companyname: companyName.trim(),
        sector: industryType.trim(),
        contactnumber: mobileNumber.trim(),
        contactperson: contactPerson.trim(),
        surface:"",
        environment: location.trim(),
        requirement: projectDetails.trim(),
        quantity: "",
        timeline: "",
        email: emailAddress.trim(),
      });

      toast({
        title: "Inquiry submitted",
        description: "Our team will contact you soon.",
      });

      setCompanyName("");
      setContactPerson("");
      setEmailAddress("");
      setMobileNumber("");
      setIndustryType("");
      setLocation("");
      setProjectDetails("");
    } catch {
      toast({
        title: "Submission failed",
        description: "We could not submit your inquiry right now. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#f5f7fa", color: "#1f2937", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Navbar />

      <section className="px-5 py-[90px] text-center text-white" style={{ background: "var(--hero-gradient)" }}>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-[52px]">Build Your Industrial Paint Shop</h1>
        <p className="mx-auto max-w-[800px] text-lg leading-relaxed md:text-[20px]">
          From concept and licensing to procurement, installation and commissioning. CoatingBazaar helps
          manufacturers set up world-class powder coating and liquid paint facilities.
        </p>
        <a
          href="#contact"
          className="mt-[30px] inline-block rounded-[10px] bg-white px-7 py-[14px] font-bold no-underline"
          style={{ color: "#0284c7" }}
        >
          Request Free Consultation
        </a>
      </section>

      <section className="mx-auto my-[70px] max-w-[1200px] px-5">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[36px]">How We Help</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Paint Shop Design", "Layout planning, process design and capacity estimation.", "🏭"],
            ["Licensing & Compliance", "Pollution control, safety approvals and statutory guidance.", "📜"],
            ["Equipment Procurement", "Booths, ovens, conveyors, compressors and pretreatment systems.", "⚙"],
            ["Paint Selection", "Powder coating and liquid paint recommendations.", "🎨"],
            ["Installation", "Vendor coordination and project execution support.", "🔧"],
            ["Commissioning", "Production trials and go-live assistance.", "🚀"],
          ].map(([title, copy, icon]) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-[30px]"
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,.08)" }}
            >
              <h3 className="mb-2 text-xl font-bold" style={{ color: "#0284c7" }}>
                {icon} {title}
              </h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto my-[70px] max-w-[1200px] px-5">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[36px]">Industries We Serve</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "🚲 Cycle Manufacturers",
            "🚗 Automotive Components",
            "🪑 Furniture",
            "🏠 Appliances",
            "🔩 Fabrication Industries",
            "⚙ Industrial Equipment",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white px-4 py-[22px] text-center font-bold"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,.05)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto my-[70px] max-w-[1200px] px-5">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-[36px]">Our Process</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["1. Consultation", "2. Planning", "3. Vendor Selection", "4. Procurement", "5. Installation", "6. Go Live"].map((step) => (
            <div key={step} className="rounded-full px-5 py-[14px] text-white" style={{ background: "#0284c7" }}>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto my-[70px] max-w-[1200px] px-5">
        <form
          onSubmit={handleSubmitInquiry}
          className="rounded-[20px] bg-white p-[40px]"
          style={{ boxShadow: "0 6px 20px rgba(0,0,0,.08)" }}
        >
          <h2 className="mb-10 text-center text-3xl font-bold md:text-[36px]">Request Consultation</h2>

          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
            <input
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              placeholder="Contact Person"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
          </div>

          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
            <input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
          </div>

          <div className="mb-5 flex flex-col gap-5 md:flex-row">
            <input
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
              placeholder="Industry Type"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full rounded-[10px] border px-[14px] py-[14px]"
              style={{ borderColor: "#d5dce5" }}
            />
          </div>

          <textarea
            rows={5}
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            placeholder="Tell us about your project"
            className="w-full rounded-[10px] border px-[14px] py-[14px]"
            style={{ borderColor: "#d5dce5" }}
          />

          <button
            type="submit"
            className="mt-8 rounded-[10px] border-0 px-[30px] py-[15px] text-white"
            style={{ background: "#0284c7" }}
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      <section className="px-5 py-[60px] text-center text-white" style={{ background: "#0f172a" }}>
        <h2 className="text-3xl font-bold md:text-[36px]">Planning a New Manufacturing Facility?</h2>
        <p className="mx-auto mt-3 max-w-[800px] text-lg">
          Let CoatingBazaar connect you with the right paint shop partners, suppliers and consultants.
        </p>
      </section>
    </div>
  );
};

export default BuildYourPaintShopPage;

