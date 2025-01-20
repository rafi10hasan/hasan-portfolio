import { cn } from "@/lib/utils";


const H1 = ({ children, className }) => (
    <h1
      className={cn(
        'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
        className
      )}
    >
      {children}
    </h1>
  );
  
  const H2 = ({ children, className }) => (
    <h2
      className={cn(
        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug',
        className
      )}
    >
      {children}
    </h2>
  );
  
  const H3 = ({ children, className }) => (
    <h3
      className={cn(
        'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-normal',
        className
      )}
    >
      {children}
    </h3>
  );
  
  const H4 = ({ children, className }) => (
    <h4
      className={cn(
        'text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed',
        className
      )}
    >
      {children}
    </h4>
  );
  
  const H5 = ({ children, className }) => (
    <h5
      className={cn(
        'text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-loose',
        className
      )}
    >
      {children}
    </h5>
  );
  
  const H6 = ({ children, className }) => (
    <h6
      className={cn(
        'text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-loose',
        className
      )}
    >
      {children}
    </h6>
  );
  
  

// Export all heading components
export { H1, H2, H3, H4, H5, H6 };
