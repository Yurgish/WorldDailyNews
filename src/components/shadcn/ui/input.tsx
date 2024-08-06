import * as React from "react";
import { cn } from "@/utils/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onEnterPress?: (value: string) => void;
    setInputValue: (value: string) => void; // додайте цю пропс
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, onEnterPress, setInputValue, ...props }, ref) => {
        const [inputValue, setInputValueState] = React.useState("");

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter" && onEnterPress) {
                onEnterPress(inputValue);
            }
        };

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setInputValueState(value);
            setInputValue(value);
        };

        return (
            <input
                type={type}
                className={cn(
                    "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={inputValue}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
