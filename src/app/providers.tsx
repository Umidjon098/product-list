"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

interface ProviderProps extends React.PropsWithChildren {}

const Providers = ({ children }: ProviderProps) => {
  const [client] = React.useState(() => queryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
