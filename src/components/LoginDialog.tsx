import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      toast({ title: "Invalid mobile number", description: "Please enter a valid 10-digit mobile number.", variant: "destructive" });
      return;
    }
    toast({ title: "OTP Sent", description: `OTP sent to +91 ${mobile}` });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden gap-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left promo panel */}
        <div className="relative hidden md:flex flex-col justify-between p-8 text-white overflow-hidden"
          style={{ background: "linear-gradient(160deg, hsl(220 90% 56%) 0%, hsl(190 85% 50%) 100%)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                <span className="text-lg font-bold">CB</span>
              </div>
              <div>
                <div className="text-lg font-display font-bold leading-tight">CoatingBazaar</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Powder Coating Marketplace</div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold leading-tight">
              India's Largest Powder Coating Raw Material Procurement Platform
            </h2>

            <div className="mt-8 flex gap-6">
              <div>
                <div className="text-2xl font-bold">4 Lakh +</div>
                <div className="text-xs opacity-90">Product Prices</div>
              </div>
              <div className="w-px bg-white/30" />
              <div>
                <div className="text-2xl font-bold">5 Lakh +</div>
                <div className="text-xs opacity-90">Orders Delivered</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-center">
                <div className="text-xl font-bold">4.9 ★</div>
                <div className="text-[10px] opacity-90">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">2024</div>
                <div className="text-[10px] opacity-90">Startup of the Year</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </div>

        {/* Right form panel */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-display font-bold text-primary leading-tight">
            Login Now to Get Free Access to 4,00,000 + Prices
          </h3>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mobile Number<span className="text-destructive">*</span>
              </label>
              <div className="flex items-stretch rounded-md border border-input overflow-hidden focus-within:ring-2 focus-within:ring-ring">
                <div className="flex items-center gap-1 px-3 bg-secondary text-sm font-medium border-r border-input">
                  <span className="text-xs">IN</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter mobile"
                  className="flex-1 px-3 py-2.5 bg-background outline-none text-sm"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox checked={whatsapp} onCheckedChange={(v) => setWhatsapp(!!v)} />
              <span className="text-muted-foreground">Also Get Alerts on</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="h-5 w-5 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[10px]">W</span>
                Whatsapp
              </span>
            </label>

            <Button type="submit" size="lg" className="w-full h-12 text-base">
              Get OTP
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
