import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface RequirementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

const RequirementDialog = ({ open, onOpenChange, productName = "" }: RequirementDialogProps) => {
  const [product, setProduct] = useState(productName);
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("MT");
  const [company, setCompany] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    if (open) setProduct(productName);
  }, [open, productName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.trim()) {
      toast({ title: "Product is required", variant: "destructive" });
      return;
    }
    if (!quantity.trim()) {
      toast({ title: "Quantity is required", variant: "destructive" });
      return;
    }
    if (!company.trim()) {
      toast({ title: "Company is required", variant: "destructive" });
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      toast({ title: "Invalid mobile number", description: "Enter a valid 10-digit mobile.", variant: "destructive" });
      return;
    }
    toast({ title: "Requirement Submitted", description: "Our team will reach out shortly." });
    onOpenChange(false);
    setQuantity(""); setCompany(""); setPincode(""); setEmail(""); setMobile("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden gap-0 border-0 rounded-xl"
        style={{ background: "linear-gradient(180deg, hsl(190 85% 50%) 0%, hsl(220 90% 56%) 100%)" }}
      >
        <div className="px-5 py-4">
          <h2 className="text-lg font-display font-bold text-white">Tell Us Your Requirements</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-background m-2 mt-0 rounded-lg p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Enter Product<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Quantity<span className="text-destructive">*</span>
            </label>
            <div className="flex rounded-md border border-input overflow-hidden focus-within:ring-2 focus-within:ring-ring">
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
                className="flex-1 px-3 py-2.5 text-sm bg-background outline-none"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="px-2 bg-secondary text-sm font-medium border-l border-input outline-none"
              >
                <option value="MT">MT</option>
                <option value="KG">KG</option>
                <option value="TON">TON</option>
                <option value="LTR">LTR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Company<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company"
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter Pincode"
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full rounded-md border border-input px-3 py-2.5 text-sm bg-background outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Mobile Number<span className="text-destructive">*</span>
            </label>
            <div className="flex rounded-md border border-input overflow-hidden focus-within:ring-2 focus-within:ring-ring">
              <div className="flex items-center gap-1 px-3 bg-secondary text-sm font-medium border-r border-input">
                <span className="text-xs">IN</span>
                <span>+91</span>
              </div>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="Enter mobile"
                className="flex-1 px-3 py-2.5 text-sm bg-background outline-none"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-12 text-base">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequirementDialog;
