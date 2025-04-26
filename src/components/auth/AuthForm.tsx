
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form validation
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
    });
    
    // Validate form
    let hasError = false;
    if (!email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      hasError = true;
    }

    if (!password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }

    if (hasError) return;

    // Process sign in
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have successfully signed in.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      email: "",
      password: "",
      confirmPassword: "",
    });
    
    // Validate form
    let hasError = false;
    if (!email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      hasError = true;
    }

    if (!password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      hasError = true;
    } else if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
      hasError = true;
    }

    if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      hasError = true;
    }

    if (hasError) return;

    // Process sign up
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Account created successfully. Please sign in.",
      });
      // Reset form and switch to sign in tab
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      document.getElementById("signin-tab")?.click();
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8 bg-gradient-to-r from-stegoshield-accent/20 to-stegoshield-accent/30 backdrop-blur-sm border border-stegoshield-accent/30 rounded-xl overflow-hidden">
          <TabsTrigger 
            id="signin-tab" 
            value="signin" 
            className="relative py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-stegoshield-accent data-[state=active]:to-stegoshield-accent/90 data-[state=active]:text-stegoshield-dark text-stegoshield-light transition-all duration-300"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger 
            value="signup"
            className="relative py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-stegoshield-accent data-[state=active]:to-stegoshield-accent/90 data-[state=active]:text-stegoshield-dark text-stegoshield-light transition-all duration-300"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        
        <div className="glass-card p-8 rounded-2xl border border-stegoshield-accent/20 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10">
          <TabsContent value="signin">
            <form onSubmit={handleSignIn} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-stegoshield-light/90">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stegoshield-light/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 bg-white/5 border-stegoshield-accent/20 text-stegoshield-light placeholder:text-stegoshield-light/30 focus:border-stegoshield-accent/50 transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-stegoshield-light/90">Password</Label>
                  <a href="#" className="text-sm text-stegoshield-accent hover:text-stegoshield-accent/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stegoshield-light/50" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 bg-white/5 border-stegoshield-accent/20 text-stegoshield-light placeholder:text-stegoshield-light/30 focus:border-stegoshield-accent/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stegoshield-light/50 hover:text-stegoshield-light/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-destructive text-sm mt-1">{errors.password}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-stegoshield-accent to-stegoshield-accent/90 text-stegoshield-dark font-medium hover:from-stegoshield-accent/90 hover:to-stegoshield-accent transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-stegoshield-dark/30 border-t-stegoshield-dark rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email-signup" className="text-stegoshield-light/90">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stegoshield-light/50" />
                  <Input
                    id="email-signup"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 bg-white/5 border-stegoshield-accent/20 text-stegoshield-light placeholder:text-stegoshield-light/30 focus:border-stegoshield-accent/50 transition-colors"
                  />
                </div>
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password-signup" className="text-stegoshield-light/90">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stegoshield-light/50" />
                  <Input
                    id="password-signup"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 bg-white/5 border-stegoshield-accent/20 text-stegoshield-light placeholder:text-stegoshield-light/30 focus:border-stegoshield-accent/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stegoshield-light/50 hover:text-stegoshield-light/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-destructive text-sm mt-1">{errors.password}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-stegoshield-light/90">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stegoshield-light/50" />
                  <Input
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-11 pr-11 bg-white/5 border-stegoshield-accent/20 text-stegoshield-light placeholder:text-stegoshield-light/30 focus:border-stegoshield-accent/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stegoshield-light/50 hover:text-stegoshield-light/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-destructive text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-stegoshield-accent to-stegoshield-accent/90 text-stegoshield-dark font-medium hover:from-stegoshield-accent/90 hover:to-stegoshield-accent transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-stegoshield-dark/30 border-t-stegoshield-dark rounded-full animate-spin" />
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
