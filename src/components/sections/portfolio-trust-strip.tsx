"use client";

// Client logos for trust strip
// Note: These are placeholder text - replace with actual logo images when available
const CLIENTS = [
  {
    name: "Australian Antarctic Division",
    // src: "/images/logos/aad.svg", // Add when available
    width: 120,
    height: 40,
  },
  {
    name: "DCCEEW",
    // src: "/images/logos/dcceew.svg",
    width: 120,
    height: 40,
  },
  {
    name: "ASIC",
    // src: "/images/logos/asic.svg",
    width: 100,
    height: 40,
  },
  {
    name: "University of Canberra",
    // src: "/images/logos/uc.svg",
    width: 140,
    height: 40,
  },
  {
    name: "Rio Tinto",
    // src: "/images/logos/rio-tinto.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Icon Water",
    // src: "/images/logos/icon-water.svg",
    width: 120,
    height: 40,
  },
  {
    name: "MDBA",
    // src: "/images/logos/mdba.svg",
    width: 100,
    height: 40,
  },
  {
    name: "Attorney-General's Department",
    // src: "/images/logos/agd.svg",
    width: 160,
    height: 40,
  },
];

export const PortfolioTrustStrip = () => {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center mb-8">
        <h2 className="text-balance text-xl font-semibold tracking-tight lg:text-3xl">
          Trusted by government and complex organisations.
          <br />
          <span className="text-muted-foreground">
            From regulatory agencies to enterprise transformation.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="flex shrink-0 items-center gap-12" style={{ animation: 'marquee 25s linear infinite' }}>
            {CLIENTS.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 min-w-[120px]"
              >
                {/* Placeholder - replace with actual logo when available */}
                <div className="text-muted-foreground/60 text-sm font-medium text-center px-4">
                  {client.name}
                </div>
                {/* Uncomment when logos are available:
                <img
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain transition-opacity hover:opacity-70 grayscale hover:grayscale-0"
                />
                */}
              </div>
            ))}
          </div>
          {/* Second marquee group for seamless loop */}
          <div className="flex shrink-0 items-center gap-12" style={{ animation: 'marquee 25s linear infinite' }}>
            {CLIENTS.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center p-6 min-w-[120px]"
              >
                <div className="text-muted-foreground/60 text-sm font-medium text-center px-4">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

