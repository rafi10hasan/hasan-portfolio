import { cn } from "@/lib/utils";


const P = ({ children, className }) => (
    <p className={cn('text-base leading-relaxed text-gray-400', className)}>
      {children}
    </p>
  );

const Span = ({ children, className }) => (
    <span className={cn('text-sm text-gray-600', className)}>
      {children}
    </span>
  );

export {P,Span}