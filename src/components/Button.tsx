import { Button } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "destructive";
}

const CustomButton = ({ children, onClick, variant = "default" }: ButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className="px-4 py-2">
      {children}
    </Button>
  );
};

export default CustomButton;
