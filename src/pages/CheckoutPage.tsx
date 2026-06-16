import {useState, useEffect, useMemo} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ArrowLeft, Share2, Truck, Wallet, MessageCircle} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {toast} from "@/hooks/use-toast";
import {getSelection, clearSelection} from "@/lib/orderSelection";
import {sendOrderEmail} from "@/services/api";

const quantityOptions = ["1-15 MT", "16 MT", "16-30 MT", "30+ MT"];

const CHEMISTRY_OPTIONS = ["Indoor", "Outdoor"];
const FINISH_OPTIONS = ["Smooth", "Structure", "Texture", "Antique", "Metallic", "Crinkle", "Transparent", "Aligator"];
const GLOSS_OPTIONS_POWDER = ["Glossy", "Semi Glossy", "Satin"];
const GLOSS_OPTIONS_LIQUID = ["Glossy", "Semi Glossy", "Satin", "Metallic", "Galaxy"];

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [selection, setSel] = useState(getSelection());
    const [quantity, setQuantity] = useState("16 MT");
    const [company, setCompany] = useState("");
    const [pincode, setPincode] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [chemistry, setChemistry] = useState("");
    const [finish, setFinish] = useState("");
    const [gloss, setGloss] = useState("");

    const isPowderCoating = selection.categoryId === "powder-coating";
    const isLiquidPaints = selection.categoryId === "liquid-paints";

    useEffect(() => {
        setSel(getSelection());
    }, []);

    const title = useMemo(() => {
        const parts = [selection.productName || selection.categoryName || "Powder Coating Material"];
        if (selection.colorName || selection.colorCode) {
            parts.push("in", selection.colorName || selection.colorCode!);
        }
        return parts.join(" ");
    }, [selection]);


    const sendOtp = () => {
        if (!/^\d{10}$/.test(mobile)) {
            toast({title: "Enter a valid 10-digit mobile number", variant: "destructive"});
            return;
        }
        setOtpSent(true);
        toast({title: "OTP sent", description: "Use 123456 to verify (demo)."});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!company.trim()) return toast({title: "Company name required", variant: "destructive"});
        if (!/^\d{6}$/.test(pincode)) return toast({title: "Enter a valid 6-digit pincode", variant: "destructive"});
        if (!/^\d{10}$/.test(mobile)) return toast({title: "Enter a valid mobile number", variant: "destructive"});
        if (!otpSent || otp.length < 4) return toast({title: "Verify OTP first", variant: "destructive"});

        const colour = [selection.colorCode, selection.colorName, selection.colorHex]
            .filter(Boolean)
            .join(" - ");

        try {
            await sendOrderEmail({
                subject: "order request",
                quantity,
                companyname: company.trim(),
                pincode,
                contactnumber: mobile,
                category: selection.categoryName || "",
                product: selection.productName || "",
                industry: selection.industryName || "",
                colour,
                chemistry,
                finish,
                gloss,
                email,
            });

            toast({title: "Order Captured!", description: "Our team will contact you shortly."});
            clearSelection();
            setTimeout(() => navigate("/"), 800);
        } catch {
            toast({
                title: "Failed to submit order",
                description: "Please try again in a moment.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-500">
            <Navbar/>
            <div className="container py-4">
                <Link to="/" className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                    <ArrowLeft className="h-3.5 w-3.5"/> Home
                </Link>
            </div>

            <div className="container pb-10">
                <div className="bg-card rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-[1fr_1.2fr_1fr] gap-0">
                    {/* Image / color swatch */}
                    <div className="p-6 flex items-start justify-center bg-card">
                        <div
                            className="w-full aspect-square rounded-lg border border-border flex items-center justify-center overflow-hidden"
                            style={selection.colorHex ? {backgroundColor: selection.colorHex} : {}}>
                            {!selection.colorHex && (
                                <div className="text-muted-foreground text-sm">Product</div>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-5">
                        <div className="flex items-start justify-between gap-3">
                            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight">
                                {title}
                            </h1>
                            <button
                                className="h-9 w-9 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Share2 className="h-4 w-4"/>
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                            <span
                                className="bg-secondary text-foreground px-2 py-0.5 rounded-full font-medium">0%</span>
                            <span className="text-muted-foreground">just now</span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-amber-500"/> Pan
                                India Delivery
                            </div>
                            <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-emerald-500"/> Get
                                Credit
                            </div>
                        </div>

                        {selection.categoryName && (
                            <Field label="Category"><Chip>{selection.categoryName}</Chip></Field>
                        )}
                        {selection.productName && (
                            <Field label="Product"><Chip>{selection.productName}</Chip></Field>
                        )}
                        {selection.industryName && (
                            <Field label="Industry"><Chip>{selection.industryName}</Chip></Field>
                        )}
                        {(selection.colorCode || selection.colorName || selection.colorHex) && (
                            <Field label={selection.colorSystem || "Color"}>
                                <div
                                    className="inline-flex items-center gap-2 border border-border rounded-md px-2.5 py-1">
                                    {selection.colorHex && (
                                        <span className="h-4 w-4 rounded-sm border border-border"
                                              style={{backgroundColor: selection.colorHex}}/>
                                    )}
                                    <span className="text-sm">
                    {[selection.colorCode, selection.colorName].filter(Boolean).join(" — ")}
                                        {selection.colorHex && <span
                                            className="text-muted-foreground ml-2">{selection.colorHex.toUpperCase()}</span>}
                  </span>
                                </div>
                            </Field>
                        )}

                        <Field label="Brand"><Chip>Imported</Chip></Field>
                        <Field label="Packaging Type"><Chip>Bulk</Chip></Field>

                        <div
                            className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <MessageCircle className="h-4 w-4 text-primary"/>
                                Can't find what you are looking for?
                            </div>
                            <Link to="/" className="text-sm font-semibold text-primary hover:underline">Click
                                Here</Link>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 bg-card border-l border-border space-y-4">
                        <h2 className="text-xl font-display font-bold text-orange-500">Get Prices for Bulk Deals!</h2>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Required Quantity</label>
                            <div className="flex flex-wrap gap-2">
                                {quantityOptions.map((q) => (
                                    <button
                                        type="button"
                                        key={q}
                                        onClick={() => setQuantity(q)}
                                        className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                                            quantity === q ? "border-primary text-primary bg-primary/5" : "border-border text-foreground"
                                        }`}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Powder Coating conditional dropdowns */}
                        {isPowderCoating && (
                            <>
                                <FormSelect label="Chemistry" value={chemistry} onChange={setChemistry}
                                            options={CHEMISTRY_OPTIONS} placeholder="Select Chemistry"/>
                                <FormSelect label="Finish" value={finish} onChange={setFinish} options={FINISH_OPTIONS}
                                            placeholder="Select Finish"/>
                                <FormSelect label="Gloss" value={gloss} onChange={setGloss}
                                            options={GLOSS_OPTIONS_POWDER} placeholder="Select Gloss"/>
                            </>
                        )}

                        {/* Liquid Paints conditional dropdown */}
                        {isLiquidPaints && (
                            <FormSelect label="Gloss" value={gloss} onChange={setGloss} options={GLOSS_OPTIONS_LIQUID}
                                        placeholder="Select Gloss"/>
                        )}

                        <FormInput label="Your Company Name" value={company} onChange={setCompany}
                                   placeholder="Enter Your Company Name"/>
                        <FormInput label="Delivery Pincode" value={pincode}
                                   onChange={(v) => setPincode(v.replace(/\D/g, "").slice(0, 6))}
                                   placeholder="Enter Pincode"/>

                        <div>
                            <label className="block text-sm font-semibold mb-1.5">Mobile Number</label>
                            <div className="relative">
                                <input
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    placeholder="Enter mobile number"
                                    className="w-full rounded-md border border-input px-3 py-2.5 pr-20 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
                                />
                                <button type="button" onClick={sendOtp}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary">
                                    {otpSent ? "Resend" : "Get OTP"}
                                </button>
                            </div>
                        </div>


                        <FormInput label="OTP" value={otp} onChange={(v) => setOtp(v.replace(/\D/g, "").slice(0, 6))}
                                   placeholder="Enter OTP"/>
                        <div>
                            <label className="block text-sm font-semibold mb-1.5">Email</label>
                            <div className="relative">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    className="w-full rounded-md border border-input px-3 py-2.5 pr-20 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
                                />
                            </div>
                        </div>
                        <Button type="submit" size="lg"
                                className="w-full h-12 text-base bg-indigo-600 hover:bg-indigo-700">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

const Field = ({label, children}: { label: string; children: React.ReactNode }) => (
    <div>
        <div className="text-sm font-semibold text-foreground mb-1.5">{label}</div>
        {children}
    </div>
);

const Chip = ({children}: { children: React.ReactNode }) => (
    <span className="inline-block border border-border rounded-md px-3 py-1 text-sm">{children}</span>
);

const FormInput = ({label, value, onChange, placeholder}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string
}) => (
    <div>
        <label className="block text-sm font-semibold mb-1.5">{label}</label>
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
        />
    </div>
);

const FormSelect = ({label, value, onChange, options, placeholder}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
    placeholder?: string
}) => (
    <div>
        <label className="block text-sm font-semibold mb-1.5">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
        >
            <option value="" disabled>{placeholder || `Select ${label}`}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default CheckoutPage;
