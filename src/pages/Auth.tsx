
import React from 'react';
import AuthForm from '../components/auth/AuthForm';

export default function Auth() {
  return (
    <div className="min-h-screen w-full bg-stegoshield-dark flex flex-col lg:flex-row">
      {/* Left side: Auth form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:px-16 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stegoshield-dark via-stegoshield-dark/95 to-stegoshield-dark/90" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-br from-stegoshield-accent/20 via-stegoshield-accent/5 to-transparent opacity-50" />
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-stegoshield-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-stegoshield-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative w-full max-w-md space-y-8 z-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-stegoshield-accent to-stegoshield-accent/80 flex items-center justify-center shadow-lg shadow-stegoshield-accent/20">
                <span className="font-bold text-2xl text-stegoshield-dark">S</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-stegoshield-light mb-3 bg-gradient-to-r from-stegoshield-light to-stegoshield-light/80 bg-clip-text text-transparent">
              AI-Powered StegoShield
            </h1>
            <p className="text-stegoshield-light/60">
              Secure your digital communications with AI
            </p>
          </div>
          
          <AuthForm />
        </div>
      </div>
      
      {/* Right side: Info panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-stegoshield-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stegoshield-accent/10 to-transparent" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-gradient-to-br from-stegoshield-accent/5 via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-16 py-12">
          <div className="glass-dark rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-stegoshield-light to-stegoshield-light/80 bg-clip-text text-transparent">
              Advanced Protection Against Hidden Threats
            </h2>
            
            <p className="text-xl text-stegoshield-light/70 mb-12 leading-relaxed">
              AI-driven real-time hidden malware & steganography detection platform with blockchain auditing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-stegoshield-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-lg text-stegoshield-light/90">AI-powered threat detection</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-stegoshield-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <span className="text-lg text-stegoshield-light/90">Real-time protection</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-stegoshield-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stegoshield-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-lg text-stegoshield-light/90">Blockchain security logs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
