import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export default function Loader({ className, size = 24, color = "currentColor" }: { className?: string; size?: number; color?: string }) {
    return (
        <div
            className={cn(
                `w-screen h-screen flex items-center justify-center bg-transparent z-50`,
                className
            )}
        >
            <LoaderCircle
                className="animate-spin"
                style={{ width: size, height: size, color }}
            />
        </div>
    );
}