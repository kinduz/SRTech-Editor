"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@app/shared/lib/utils";

function ShadcnCheckbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

interface CustomCheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  className = "",
  children,
}: CustomCheckboxProps) {
  const handleLabelClick = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <ShadcnCheckbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="border-white/20 bg-white/10 data-[state=checked]:bg-pink-500 data-[state=checked]:to-pink-500 data-[state=checked]:border-transparent data-[state=checked]:shadow-lg data-[state=checked]:shadow-purple-500/25 hover:border-purple-400 focus-visible:ring-purple-500/50"
      />
      {children && (
        <label
          className="text-sm text-gray-300 cursor-pointer select-none leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          onClick={handleLabelClick}
        >
          {children}
        </label>
      )}
    </div>
  );
}
