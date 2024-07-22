// app/about/page.tsx

export default function AboutPage() {
  return (
      <div className="px-8 py-12 sm:py-16 md:px-20 relative min-h-screen  overflow-hidden">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg">
          Welcome to our "About Us" page. Here, you can learn more about who we are, what we do, and our mission.
          We are committed to providing the best service and creating a positive impact in the community.
        </p>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            Our mission is to deliver top-notch services while fostering a culture of innovation and inclusivity.
            We strive to make a difference in every project we undertake.
          </p>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p>
            Our team is composed of dedicated professionals with diverse expertise. We work collaboratively to
            achieve our goals and exceed expectations.
          </p>
        </section>
      </div>
  );
}
