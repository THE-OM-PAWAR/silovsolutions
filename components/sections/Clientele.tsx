import Image from "next/image";

const clients = [
  {
    name: "IIT Goa",
    src: "/Silovhome/indian_institute_of_technology_goa_logo.svg-Yg2q8zNllgCGkqJN.avif",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Bhubaneswar",
    src: "/Silovhome/indian_institute_of_technology_bhubaneswar_logo.svg-Yleq3Jwlx6I04qGj.avif",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Roorkee",
    src: "/Silovhome/indian_institute_of_technology_roorkee_logo-d957RLX631Trrrya.svg",
    width: 140,
    height: 140,
  },
  {
    name: "NIT Meghalaya",
    src: "/Silovhome/national_institute_of_technology-_meghalaya_logo-YanqrLNn4MHxn3OV.png",
    width: 140,
    height: 140,
  },
  {
    name: "IIT Patna",
    src: "/Silovhome/459265-1600x960347050-iit-patna-phd-admission-2023-application-form-exam-date-eligibility-removebg-preview-A1aB4GjergtbwPzB.avif",
    width: 140,
    height: 140,
  },
  {
    name: "NIT Jaipur",
    src: "/Silovhome/mnit_logo-A85Eoxb5WRion2O7.avif",
    width: 140,
    height: 140,
  },
];

export function Clientele() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:space-y-16">
        <div className="space-y-6 text-left">
          <h2 className="text-4xl font-normal leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Trusted by academic and research leaders
          </h2>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-silov-dark-gray sm:text-lg">
            Over the past few years, Silov Solutions has dedicated itself to
            fostering strong relationships built on transparency and commitment.
            We continue to maintain this reputation while cultivating even
            stronger partnerships.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-5 border-b border-border/40 pb-8 text-center transition-all hover:border-border"
            >
              <div className="flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-full w-full object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
              <p className="text-sm font-normal text-muted-foreground sm:text-base">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

