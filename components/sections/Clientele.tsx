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
    <section className="bg-sky-50/60 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Key Clientele
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Trusted by academic and research leaders
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
            Over the past few years, Silov Solutions has dedicated itself to
            fostering strong relationships built on transparency and commitment.
            We continue to maintain this reputation while cultivating even
            stronger partnerships.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-4 rounded-3xl border border-white/70 bg-white/70 px-6 py-8 text-center shadow-sm"
            >
              <div className="flex h-32 w-32 items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-foreground">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

