export type Product = {
  id: string;
  name: string;
  description: string;
  specs: string[];
  features: string[];
  useCases: string[];
  image: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "power-system-emulators",
    title: "Power System Emulators",
    description:
      "Experience the future of grid innovation in Power System Emulators with Silov's cutting-edge product range across PV Emulators and Wind Energy Conversion System.",
    products: [
      {
        id: "solar-pv-emulator-1kw",
        name: "1 kW Solar PV Emulator",
        description:
          "High power density PV emulator for realistic solar array behavior in lab environments.",
        specs: [
          "Voltage: 0–50V DC",
          "Current: 0–20A DC",
          "AC Input: 180–230V AC",
          "1kW high power density",
        ],
        features: [
          "Simulation of I-V characteristics",
          "Dynamic irradiation and temperature profiles",
          "MPPT efficiency testing",
        ],
        useCases: [
          "Testing MPPT algorithms",
          "Effect of shadow/cloud",
          "De-rated PV operation",
          "Series/parallel connections",
        ],
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "solar-pv-emulator-2kw",
        name: "2 kW Solar PV Emulator",
        description:
          "Functions as both a solar array emulator and simulator.",
        specs: [
          "Voltage: 0–96V DC",
          "Current: 0–20A DC",
          "AC Input: 220–240V AC",
        ],
        features: [
          "Precision voltage & current measurements",
          "Auto I-V program",
          "Low leakage current",
        ],
        useCases: [
          "Calculation of MPP/fill factor",
          "Efficiency vs load characteristics",
          "Temperature effects on output",
        ],
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "wecs",
        name: "Wind Energy Conversion System (WECS)",
        description:
          "Replicates dynamic behavior of wind turbines and grid interaction.",
        specs: [
          "Output Voltage: 0–96V",
          "Current: 20–200A",
          "Capacity: ~1–10 kVA",
          "PMSG: 1kW–5kW",
        ],
        features: [
          "Dynamic torque-speed control",
          "Grid interaction emulation",
          "Wind profile simulation",
        ],
        useCases: [
          "Torque-speed validation",
          "Tip-speed ratio optimization",
          "Wind gust simulation",
        ],
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "iot-infrastructure",
    title: "IoT Infrastructure",
    description:
      "Unlock the full potential of connectivity with Silov's IoT Infrastructure delivering seamless and secure solutions.",
    products: [
      {
        id: "smart-data-logger",
        name: "Smart Data Logger",
        description:
          "Reliable data acquisition platform with flexible channel support.",
        specs: [
          "32 Channels",
          "Analog Input: 0–5V (0.1V accuracy)",
          "Input Voltage: 15V DC",
        ],
        features: [
          "Cloud integration available",
          "Software for control and data storage",
        ],
        useCases: [
          "Interfacing with temperature, humidity, voltage, and current sensors",
        ],
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "iv-curve-tracer",
        name: "IV Curve Tracer",
        description:
          "Measures and plots IV characteristics of solar panels and semiconductors.",
        specs: [
          "Rating: 450V / 10A",
          "Touch controls",
          "Internal battery backup",
          "Cloud integration",
        ],
        features: ["Rapid capture of I-V/P-V curves", "Portable diagnostics"],
        useCases: ["Analysis of Voc, Vmpp, MPPT, Isc"],
        image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "power-conditioning-units",
    title: "Power Conditioning Units (Standard)",
    description:
      "Optimize energy efficiency with stable and clean power delivery.",
    products: [
      {
        id: "unidirectional-dc-dc-converter",
        name: "Unidirectional DC-DC Converter",
        description:
          "High-performance buck/boost converter for lab and pilot setups.",
        specs: [
          "Buck: In 10–80V, Out up to 80V",
          "Boost: In 10–50V, Out 11–80V",
          "Current: 20A",
        ],
        features: [
          "Non-isolated type",
          "MOSFET driver",
          "Control via Matlab/LabVIEW/Microcontroller",
        ],
        useCases: [
          "Open/closed loop control",
          "MPPT control",
          "Modbus communication",
        ],
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "bidirectional-inverter",
        name: "Bidirectional Inverter",
        description:
          "Grid-tied inverter for advanced power flow experiments.",
        specs: [
          "3-Phase Voltage: 440V",
          "DC Voltage: 690–800V",
          "Current: 75A RMS",
        ],
        features: [
          "Grid-tied (SMINV-800/70)",
          "LabVIEW GUI with Modbus",
          "4.3 inch onboard display",
        ],
        useCases: [
          "DC bus precharging",
          "Grid-to-battery flow",
          "Battery-to-grid flow",
          "Id-Iq control",
        ],
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "bidirectional-dc-dc-converter",
        name: "Bidirectional DC-DC Converter",
        description:
          "Efficient bidirectional conversion for storage and regenerative use cases.",
        specs: [
          "Buck: In 10–80V",
          "Boost: In 10–50V",
          "Current: 20A",
          "Efficiency: 90%",
        ],
        features: [
          "Non-isolated",
          "Sensors for input/output V & I",
          "PWM provision",
        ],
        useCases: [
          "Battery charging/discharging",
          "Regenerative braking simulation",
        ],
        image:
          "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "grid-sync-inverter",
        name: "Lab Scale Bidirectional Grid Sync Inverter",
        description:
          "Integrates with the grid by matching phase, frequency, and voltage.",
        specs: [
          "Rating: 450V / 10A",
          "Touch controls",
          "Bidirectional DC charger capable",
        ],
        features: ["Grid synchronization control", "High-accuracy sensing"],
        useCases: [
          "Battery charging from grid",
          "Powering local equipment",
          "Active/reactive power control",
        ],
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "ev-ecosystem",
    title: "EV Ecosystem",
    description:
      "Power the future of mobility with scalable solutions for EV charging and management.",
    products: [
      {
        id: "ev-emulator",
        name: "EV Emulator",
        description:
          "Simulates behavior of electric vehicles for validation of charging systems.",
        specs: [
          "AC Input: 230V",
          "Output: 3.3 / 7.4 / 11.0 kW",
          "CCS communication stack",
        ],
        features: ["Programmable vehicle profiles", "Charging scenario library"],
        useCases: [
          "4 stages of EV-EVSE connection",
          "OCPP protocol control",
          "BMS interaction",
        ],
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "dc-fast-ev-charger",
        name: "DC Fast EV Charger",
        description:
          "Rapid DC delivery for highways and fleet operations.",
        specs: [
          "Input: 440V AC (3 Phase)",
          "Output: 80V, 90A",
          "Efficiency: 95%",
          "GB/T compatible",
        ],
        features: ["High-density power cabinet", "Smart monitoring"],
        useCases: [
          "Solar interconnection",
          "Analyzing EV data (SoC, voltage demand)",
          "Bi-directional flow",
        ],
        image:
          "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "smart-ac-evse",
        name: "Smart AC EVSE",
        description:
          "AC charging with remote monitoring and load management.",
        specs: [
          "Input: 230V AC",
          "Output: 80V, 90A",
          "OCPP 1.6J compatible",
          "CCS based",
        ],
        features: ["Remote monitoring", "Load management"],
        useCases: ["PWM generation current control", "Solar emulator integration"],
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

