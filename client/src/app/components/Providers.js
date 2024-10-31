import QueryClientProviderWrapper from "./QueryClientProviderWrapper";
import { BranchContextProvider } from "@/contexts/branch";

export default function Providers({ children }) {
    return (
      <QueryClientProviderWrapper>
          <BranchContextProvider>
              {children}
          </BranchContextProvider>
      </QueryClientProviderWrapper>
    )
  }