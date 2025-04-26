
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stegoshield-dark">
      <div className="animate-pulse">
        <div className="h-16 w-16 rounded-full bg-stegoshield-accent flex items-center justify-center">
          <span className="font-bold text-2xl text-stegoshield-dark">S</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
