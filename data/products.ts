export type Product = {
  id: string;
  name: string;
  description: string;
  specs: string[];
  features: string[];
  useCases: string[];
  images: string[];
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
        images: [
          "/products/1 kW Solar PV Emulator/screenshot-2025-07-21-at-6.30.58a-pm-dOqDnMeLVRIL6woe.avif",
          "/products/1 kW Solar PV Emulator/screenshot-2025-07-22-at-10.43.21a-am-dJobQg0gK5SboapV.avif",
          "/products/1 kW Solar PV Emulator/screenshot-2025-07-29-at-2.05.22a-pm-Yg2yZ5VDkGTW8k6L.avif",
        ],
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
        images: [
          "/products/2 kW Solar PV Emulator/screenshot-2025-07-29-at-2.06.18a-pm-Yyv0W2p70DHO21xy.avif",
          "/products/2 kW Solar PV Emulator/screenshot-2025-07-29-at-2.07.28a-pm-AR03jVEerpfBR5EN.avif",
          "/products/2 kW Solar PV Emulator/screenshot-2025-07-30-at-1.56.33a-pm-AMq8BR3R4zHlLQ2w.avif",
        ],
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
        images: [
          "/products/Wind Energy Conversion System/screenshot-2025-07-22-at-10.57.59a-am-YbNJ70aW87U7rEDq.avif",
          "/products/Wind Energy Conversion System/screenshot-2025-07-29-at-1.57.38a-pm-mjEG15K7RVF7y92n.avif",
        ],
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
        images: [
          "/products/Smart Data Logger/screenshot-2025-07-22-at-1.49.45a-pm-m7VbQ7VWRzIke364.avif",
          "/products/Smart Data Logger/screenshot-2025-07-22-at-3.28.06a-pm-m7VbQeeo57so5J1v.avif",
          "/products/Smart Data Logger/screenshot-2025-07-29-at-2.08.42a-pm-A3Q7LrMB8GujBqrq.avif",
          "/products/Smart Data Logger/screenshot-2025-07-29-at-2.08.42a-pm-A3Q7LrMB8GujBqrq (1).avif",
        ],
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
        images: [
          "/products/IV Curve Tracer/screenshot-2025-07-22-at-3.28.06a-pm-m7VbQeeo57so5J1v.avif",
          "/products/IV Curve Tracer/screenshot-2025-07-29-at-2.08.42a-pm-A3Q7LrMB8GujBqrq.avif",
          "/products/IV Curve Tracer/screenshot-2025-07-29-at-2.08.53a-pm-YanJlzkxRlIXzVx2.avif",
        ],
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
        images: [
          "/products/Unidirectional DC-DC Converter/screenshot-2025-07-29-at-2.22.32a-pm-dOqDObjkRzF4wO5G.avif",
        ],
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
        images: [
          "/products/Bidirectional Inverter/screenshot-2025-07-25-at-12.44.24a-pm-mjEGe8zDMDHGG2gB.avif",
          "/products/Bidirectional Inverter/screenshot-2025-07-25-at-12.44.34a-pm-YrDJ599K5vfGxpqK.avif",
          "/products/Bidirectional Inverter/whatsapp-image-2025-07-18-at-9.37.35-pm-mp8Jggxj66IX4n4e.avif",
          "/products/Bidirectional Inverter/whatsapp-image-2025-07-18-at-9.37.36-pm-A3Q766zqpWsJ76EW.avif",
        ],
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
        images: [
          "/products/Bidirectional DC-DC Convertor/screenshot-2025-07-29-at-2.21.26a-pm-YbNJPa6x9Gi0JMvB (1).avif",
        ],
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
        images: [
          "/products/Bidirectional Inverter/screenshot-2025-07-25-at-12.44.24a-pm-mjEGe8zDMDHGG2gB.avif",
        ],
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
        images: [
          "/products/EV Emulator/screenshot-2025-07-29-at-2.15.37a-pm-AGBbDvwO7RiDBgk7.avif",
          "/products/EV Emulator/screenshot-2025-07-30-at-1.53.35a-pm-Awv9NlK1w0Iez2kR.avif",
          "/products/EV Emulator/whatsapp-image-2025-07-23-at-9.32.08-pm-Y4LvBoEqzJT4JZWO.avif",
        ],
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
        images: [
          "/products/DC Fast EV Charger/ba1b675b-f0e8-40f6-ab8d-808fcf4e5dbe-YZ9xeNZZPvcBDzBk.avif",
          "/products/DC Fast EV Charger/screenshot-2025-07-22-at-2.28.40a-pm-m7VbQ7J85RHb52NO.avif",
        ],
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
        images: [
          "/products/Smart AC EVSE/screenshot-2025-07-29-at-2.13.25a-pm-mjEG15Jbp1SOlXn9.avif",
          "/products/Smart AC EVSE/screenshot-2025-07-30-at-1.54.10a-pm-mePJDzKkkEHbBrrl.avif",
        ],
      },
    ],
  },
];

