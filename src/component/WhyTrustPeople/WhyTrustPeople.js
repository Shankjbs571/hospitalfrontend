import React from "react";

const sharedClasses = {
  accent: "bg-accent text-accent-foreground",
  muted: "text-muted-foreground",
  rounded: "rounded-full",
  shadow: "shadow-lg",
};

const WhyPeopleTrustUs = () => {
  return (
    <div className="bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <div className={`rounded-lg overflow-hidden ${sharedClasses.shadow}`}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/vMGrPZG7MrI?si=-MFER5VsOJ9EDeSd"
              title="Hospital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center">
            <img
              aria-hidden="true"
              alt="play-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=▶️"
              className="mr-2"
            />
            Play The Video
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold mb-4">Why People Trust Us</h2>
          <p className={sharedClasses.muted + " mb-8"}>
            At our hospital, we’re dedicated to providing top-notch care with
            cutting-edge facilities and a team of experts. Our commitment to
            excellence ensures you receive the best possible treatment. Choose
            us for the trusted, personalized care you deserve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <TrustItem
              icon="🔬"
              title="High-Quality Lab"
              description="
              Our high-quality lab delivers accurate diagnostics with advanced technology and expert staff."
            />
            <TrustItem
              icon="👨‍🔬"
              title="Unmatched Expertise"
              description="Our team of specialists is highly trained. "
            />
            <TrustItem
              icon="📊"
              title="Precise Results"
              description="We understand the importance of accuracy in diagnostics. "
            />
            <TrustItem
              icon="👩‍⚕️"
              title="Qualified Staff"
              description="Our hospital boasts a team of highly qualified staff, ensuring the highest standard of medical care."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div
        className={`${sharedClasses.accent} p-6 ${sharedClasses.rounded} text-3xl flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={sharedClasses.muted}>{description}</p>
      </div>
    </div>
  );
};

export default WhyPeopleTrustUs;
