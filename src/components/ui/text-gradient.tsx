"use client";

import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  variant?: "gold" | "warm" | "aurora";
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function TextGradient({
  children,
  variant = "gold",
  className,
  as: Component = "span",
}: TextGradientProps) {
  const gradients = {
    gold: "from-[#AEBBA4] via-gold to-[#6E7D67]",
    warm: "from-gold via-[#AEBBA4] to-gold",
    aurora: "from-gold via-lavender to-[#AEBBA4]",
  };

  return (
    <Component
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
