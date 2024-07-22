// app/layouts/Layout.tsx

import React from 'react';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          {children}
        </div>
      
      </div>
    </>
  );
}
