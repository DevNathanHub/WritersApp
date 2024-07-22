// app/dashboard/profile/page.tsx

import { auth } from '@clerk/nextjs';
import React from 'react';
import { SessionDetails, UserDetails } from '../details'; // Adjust path if needed
// import { OnboardingDetails } from '../onboarding-details'; // Uncomment if needed

export const metadata = {
  metadataBase: new URL('http://localhost:3000/dashboard/profile'),
  title: 'User Profile',
  description: 'View and manage your user profile and session details.',
};

export default function Profile() {
  const { userId, sessionClaims } = auth();

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {userId ? (
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hi, {sessionClaims?.firstName || 'User'}
          </h1>
          <div className="grid gap-4 mt-8 lg:grid-cols-3">
            <UserDetails />
            <SessionDetails />
            {/* <OnboardingDetails /> */}
          </div>
        </>
      ) : (
        <p>Loading user data...</p> // Optionally handle the case when userId is not available
      )}
    </div>
  );
}
