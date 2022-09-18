import React from 'react';

import { ToastProvider } from './toast';

type AppProviderProps = {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
    <ToastProvider>
      {children}
    </ToastProvider>
);

export default AppProvider;