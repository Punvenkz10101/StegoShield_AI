
import AuthForm from "@/components/auth/AuthForm";

export default function Auth() {
  return (
    <div className="min-h-screen w-full bg-stegoshield-dark flex flex-col lg:flex-row">
      {/* Left side: Auth form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-stegoshield-accent flex items-center justify-center">
                <span className="font-bold text-xl text-stegoshield-dark">S</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-stegoshield-light">AI-Powered StegoShield</h1>
            <p className="text-stegoshield-light/70 mt-2">
              Secure your digital communications
            </p>
          </div>
          
          <AuthForm />
        </div>
      </div>
      
      {/* Right side: Info panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-stegoshield-dark">
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center px-12 glass-dark">
          <h2 className="text-3xl font-bold mb-6 tracking-wide text-stegoshield-light">
            Advanced Protection Against Hidden Threats
          </h2>
          
          <p className="text-xl text-stegoshield-light/80 mb-8 leading-relaxed max-w-lg">
            AI-driven real-time hidden malware & steganography detection platform with blockchain auditing.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-stegoshield-accent/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-stegoshield-light">AI-powered threat detection</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-stegoshield-accent/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="text-stegoshield-light">Real-time email & messenger protection</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-stegoshield-accent/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <polyline points="9 4 12 7 15 4" />
                  <polyline points="15 20 12 17 9 20" />
                  <path d="M4 15h3v4" />
                  <path d="M17 15h3v4" />
                  <path d="M4 9h3V5" />
                  <path d="M17 9h3V5" />
                </svg>
              </div>
              <span className="text-stegoshield-light">Immutable blockchain security logs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
