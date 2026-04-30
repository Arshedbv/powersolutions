// src/data/companies.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  brandColor: string;
  products: Product[];
}

export const companies: Company[] = [

  /* =========================================================
     SIEMENS
  ========================================================= */

  {
    id: "siemens",
    name: "Siemens",
    logo: "/images/brands/siemens.svg",
    brandColor: "#009999",
    description:
      "Siemens is a global technology leader in industrial automation, electrification, and digital transformation. The company delivers advanced drive systems, PLCs, industrial control components, relays, flow measurement instruments, and power distribution solutions designed for reliable performance in demanding environments.",
    products: [
      {
        id: "si-ac-drive",
        name: "AC Drives",
        category: "Automation",
        description: "Variable frequency drives for precision motor control and energy efficiency.",
        image: "/images/products/schneider/drives.jpg"
      },
      {
        id: "si-flow-meter",
        name: "Industrial Flow Meters",
        category: "Instrumentation",
        description: "High-accuracy flow measurement devices for industrial processes.",
        image: "/images/products/siemens/in-flow.jpg"
      },
      {
        id: "si-hrc-fuse",
        name: "HRC Fuses",
        category: "Protection",
        description: "High rupture capacity fuses for reliable circuit protection.",
        image: "/images/products/siemens/hrc.jpg"
      },
      {
        id: "si-overload-relay",
        name: "Overload Relays",
        category: "Motor Protection",
        description: "Thermal and electronic overload relays for motor safety.",
        image: "/images/products/schneider/overload-relay.jpg"
      },
      {
        id: "si-plc",
        name: "PLC Systems",
        category: "Automation",
        description: "Programmable logic controllers for industrial automation control.",
        image: "/images/products/siemens/plc.jpg"
      },
      {
        id: "si-power-contactor",
        name: "Power Contactors",
        category: "Control Components",
        description: "Heavy-duty contactors for industrial switching applications.",
        image: "/images/products/schneider/power-contactor.jpg"
      },
      {
        id: "si-pressure-switch",
        name: "Pressure Switches",
        category: "Instrumentation",
        description: "Industrial pressure control switches for process automation.",
        image: "/images/products/siemens/prs.webp"
      }
    ]
  },

  /* =========================================================
     SCHNEIDER ELECTRIC
  ========================================================= */

  {
    id: "schneider",
    name: "Schneider Electric",
    logo: "/images/brands/schneider.png",
    brandColor: "#3DCD58",
    description:
      "Schneider Electric is a global specialist in energy management and automation. The company provides drives, relays, sensors, circuit breakers, safety systems, and electrical distribution products engineered for industrial, commercial, and residential applications.",
    products: [
      {
        id: "sch-drives",
        name: "Industrial Drives",
        category: "Automation",
        description: "Energy-efficient AC and DC drives for motor control applications.",
        image: "/images/products/schneider/drives.jpg"
      },
      {
        id: "sch-servo",
        name: "Servo Motors",
        category: "Motion Control",
        description: "High-performance servo motors for precision motion systems.",
        image: "/images/products/schneider/servo-motor.jpg"
      },
      {
        id: "sch-glass-relay",
        name: "Control Relays",
        category: "Control Components",
        description: "Reliable glass and control relays for automation panels.",
        image: "/images/products/schneider/glass-relay.jpg"
      },
      {
        id: "sch-overload",
        name: "Motor Overload Relays",
        category: "Motor Protection",
        description: "Thermal overload relays for motor safety.",
        image: "/images/products/schneider/overload-relay.jpg"
      },
      {
        id: "sch-photo-sensor",
        name: "Photoelectric Sensors",
        category: "Sensors",
        description: "Industrial-grade photoelectric sensing devices.",
        image: "/images/products/schneider/photoelectric-sensor.jpg"
      },
      {
        id: "sch-power-contactor",
        name: "Power Contactors",
        category: "Control Components",
        description: "Industrial contactors for switching heavy loads.",
        image: "/images/products/schneider/power-contactor.jpg"
      },
      {
        id: "sch-safety-light",
        name: "Safety Light Curtains",
        category: "Industrial Safety",
        description: "Light curtain systems for operator and machine protection.",
        image: "/images/products/schneider/safety-light-curtain.jpg"
      },
      {
        id: "sch-circuit-breaker",
        name: "Circuit Breakers & Switches",
        category: "Switchgear",
        description: "MCB, MCCB, ACB and isolators for electrical protection.",
        image: "/images/products/schneider/circuit-breaker.jpg"
      }
    ]
  },

  /* =========================================================
     ROCKWELL AUTOMATION (ALLEN BRADLEY)
  ========================================================= */

  {
    id: "rockwell",
    name: "Rockwell Automation",
    logo: "/images/brands/rockwell.png",
    brandColor: "#CC0000",
    description:
      "Rockwell Automation (Allen-Bradley) is a global leader in industrial automation systems. The company provides PLCs, encoders, drives, HMIs, power supplies, and intelligent control components for advanced manufacturing environments.",
    products: [
      {
        id: "rw-encoders",
        name: "Encoders",
        category: "Motion Control",
        description: "Precision encoders for industrial automation systems.",
        image: "/images/products/rockwell/encoder.jpg"
      },
      {
        id: "rw-ac-drive",
        name: "AC Drives",
        category: "Automation",
        description: "Variable frequency drives for motor speed control.",
        image: "/images/products/schneider/drives.jpg"
      },
      {
        id: "rw-micrologix",
        name: "MicroLogix Controllers",
        category: "Automation",
        description: "Compact PLC controllers for small to mid-scale applications.",
        image: "/images/products/rockwell/micro.jpg"
      },
      {
        id: "rw-panelview",
        name: "PanelView HMI",
        category: "HMI Systems",
        description: "Human-machine interface panels for industrial control.",
        image: "/images/products/rockwell/panel.jpg"
      },
      {
        id: "rw-interface-cable",
        name: "Interface Cables",
        category: "Accessories",
        description: "Industrial communication and interface cables.",
        image: "/images/products/rockwell/cabel.jpg"
      },
      {
        id: "rw-power-supply",
        name: "Industrial Power Supplies",
        category: "Control Components",
        description: "Reliable power supply modules for control systems.",
        image: "/images/products/rockwell/power.jpg"
      },
      {
        id: "rw-plc",
        name: "PLC",
        category: "Automation",
        description: "Expansion modules for PLC systems.",
        image: "/images/products/rockwell/plc.jpg"
      },
      {
        id: "rw-input-module",
        name: "Input Modules",
        category: "Automation",
        description: "Expansion modules for PLC systems.",
        image: "/images/products/rockwell/inp.jpg"
      }
    ]
  },

  /* =========================================================
     L&T
  ========================================================= */

  {
    id: "lt",
    name: "Larsen & Toubro (L&T)",
    logo: "/images/brands/lt.png",
    brandColor: "#0033A0",
    description:
      "L&T is a leading manufacturer of low-voltage switchgear and industrial power distribution systems. The company offers circuit breakers, contactors, changeover switches, and protection devices built for harsh operating conditions.",
    products: [
      {
        id: "lt-ac-drive",
        name: "AC Drives",
        category: "Automation",
        description: "Motor drives for industrial applications.",
        image: "/images/products/schneider/drives.jpg"
      },
      {
        id: "lt-power-factor",
        name: "Power Factor Correction Systems",
        category: "Power Management",
        description: "Automatic power factor correction units.",
        image: "/images/products/LandT/power.jpg"
      },
      {
        id: "lt-changeover",
        name: "Changeover Switches",
        category: "Switchgear",
        description: "Manual and automatic power changeover switches.",
        image: "/images/products/LandT/change.jpg"
      },
      {
        id: "lt-power-contactor",
        name: "Power Contactors",
        category: "Control Components",
        description: "Heavy-duty industrial contactors.",
        image: "/images/products/LandT/contractor.jpg"
      },
      {
        id: "lt-hrc-fuse",
        name: "HRC Fuses",
        category: "Protection",
        description: "High rupture capacity protection fuses.",
        image: "/images/products/LandT/hrc.jpg"
      },
      {
        id: "lt-main-switch",
        name: "Main Switches with Fuse",
        category: "Switchgear",
        description: "Primary switching systems for distribution panels.",
        image: "/images/products/LandT/main.jpg"
      },
      {
        id: "lt-mcb",
        name: "MCB & MCCB",
        category: "Switchgear",
        description: "Miniature and molded case circuit breakers.",
        image: "/images/products/LandT/mcb.jpg"
      },
      {
        id: "lt-overload",
        name: "Overload Relays",
        category: "Motor Protection",
        description: "Motor overload safety relays.",
        image: "/images/products/LandT/overload.jpg"
      }
    ]
  },

  /* =========================================================
     LAPP
  ========================================================= */

  {
    id: "lapp",
    name: "LAPP",
    logo: "/images/brands/lapp.png",
    brandColor: "#F39200",
    description:
      "LAPP is a global manufacturer of high-quality industrial cables and connectivity solutions including data cables, fiber optics, and automation wiring systems.",
    products: [
      {
        id: "lapp-classic",
        name: "Industrial Cables",
        category: "Cables",
        description: "Standard industrial data and control cables.",
        image: "/images/products/lapp/cable.jpg"
      },
      {
        id: "lapp-connector",
        name: "Industrial Connectors",
        category: "Connectivity",
        description: "High-performance cable connectors.",
        image: "/images/products/lapp/connector.jpg"
      },
      {
        id: "lapp-encoder",
        name: "Encoder Cables",
        category: "Motion Control",
        description: "Precision cables for encoder systems.",
        image: "/images/products/lapp/encoder.jpg"
      },
      {
        id: "lapp-heat-resistant",
        name: "Heat Resistant Cables",
        category: "Cables",
        description: "Cables for high-temperature environments.",
        image: "/images/products/lapp/heat.jpg"
      },
      {
        id: "lapp-shielded",
        name: "Shielded Signal Cables",
        category: "Cables",
        description: "EMI-protected shielded cables.",
        image: "/images/products/lapp/shielded.jpg"
      },
      {
        id: "lapp-special",
        name: "Special Cables",
        category: "Cables",
        description: "Custom industrial cable solutions.",
        image: "/images/products/lapp/special.jpg"
      },
      {
        id: "lapp-unitronics",
        name: "Unitronics Cables",
        category: "Cables",
        description: "Custom industrial cable solutions.",
        image: "/images/products/lapp/unitronics.jpg"
      }
    ]
  },

  /* =========================================================
     POLYCAB
  ========================================================= */

  {
    id: "polycab",
    name: "Polycab",
    logo: "/images/brands/polycab.png",
    brandColor: "#E31E24",
    description:
      "Polycab is a leading manufacturer of wires, cables, lighting products, switches, and electrical accessories serving residential and industrial markets.",
    products: [
      {
        id: "pc-fan",
        name: "Fans",
        category: "Fans",
        description: "Experience superior air delivery and silent operation with a sleek, modern design.",
        image: "/images/products/polycab/fan.jpg"
      },
      {
        id: "pc-house-wire",
        name: "House Wires",
        category: "Wiring Solutions",
        description: "Domestic electrical wiring solutions.",
        image: "/images/products/polycab/wires.jpg"
      },
      {
        id: "pc-flexible",
        name: "Flexible Cables",
        category: "Cables",
        description: "Flexible power and control cables.",
        image: "/images/products/polycab/cable.jpg"
      },
      {
        id: "pc-led-batten",
        name: "LED Battens",
        category: "Lighting",
        description: "Energy-efficient LED batten fixtures.",
        image: "/images/products/polycab/batten.jpg"
      },
      {
        id: "pc-led-bulb",
        name: "LED Bulbs",
        category: "Lighting",
        description: "Residential and commercial LED bulbs.",
        image: "/images/products/polycab/bulb.jpg"
      },
      {
        id: "pc-mcb",
        name: "MCB",
        category: "Switchgear",
        description: "Miniature circuit breakers.",
        image: "/images/products/polycab/mcb.jpg"
      },
      {
        id: "pc-street-light",
        name: "Street Lighting",
        category: "Lighting",
        description: "Outdoor LED street lighting systems.",
        image: "/images/products/polycab/street.jpg"
      },
      {
        id: "pc-switch",
        name: "Switches & Accessories",
        category: "Electrical",
        description: "Electrical switches and sockets.",
        image: "/images/products/polycab/switch.jpg"
      }
    ]
  },

  /* =========================================================
     FESTO
  ========================================================= */

  {
    id: "festo",
    name: "Festo",
    logo: "/images/brands/festo.png",
    brandColor: "#005BAC",
    description:
      "Festo is a global leader in pneumatic and electromechanical automation solutions, offering drives, valves, sensors, controllers, and air preparation systems.",
    products: [
      {
        id: "festo-pneumatic-cylinder",
        name: "Pneumatic Cylinders",
        category: "Pneumatics",
        description: "High-performance pneumatic drive cylinders.",
        image: "/images/products/festo/cylinder.jpg"
      },
      {
        id: "festo-reed-switch",
        name: "Reed Switches",
        category: "Sensors",
        description: "Magnetic reed switches for cylinder position detection.",
        image: "/images/products/festo/reed.jpg"
      },
      {
        id: "festo-valves",
        name: "Pneumatic Valves",
        category: "Pneumatics",
        description: "Directional and control valves for air systems.",
        image: "/images/products/festo/valve.jpg"
      },
      {
        id: "festo-pu-tubing",
        name: "PU Tubing & Fittings",
        category: "Pneumatics",
        description: "Air tubing and fittings for pneumatic installations.",
        image: "/images/products/festo/tube.jpg"
      },
      {
        id: "festo-filter-regulator",
        name: "Filter Regulators",
        category: "Air Preparation",
        description: "Air filtration and pressure regulation units.",
        image: "/images/products/festo/filter.jpg"
      },
      {
        id: "festo-grippers",
        name: "Industrial Grippers",
        category: "Automation",
        description: "Pneumatic grippers for handling systems.",
        image: "/images/products/festo/gripper.jpg"
      },
      {
        id: "festo-drives",
        name: "Pneumatic Drives",
        category: "Pneumatics",
        description: "Drive systems for industrial automation.",
        image: "/images/products/festo/drive.jpg"
      },
      {
        id: "festo-sensors",
        name: "Industrial Sensors",
        category: "Sensors",
        description: "Sensors for automation applications.",
        image: "/images/products/festo/sensor.jpg"
      }
    ]
  },

  /* =========================================================
     SMC
  ========================================================= */

  {
    id: "smc",
    name: "SMC",
    logo: "/images/brands/smc.png",
    brandColor: "#1C75BC",
    description:
      "SMC manufactures advanced pneumatic automation equipment including cylinders, actuators, filters, vacuum systems, and fluid control components.",
    products: [
      {
        id: "smc-air-cylinder",
        name: "Air Cylinders",
        category: "Pneumatics",
        description: "Industrial pneumatic cylinders.",
        image: "/images/products/smc/air.jpg"
      },
      {
        id: "smc-direction-valve",
        name: "Directional Control Valves",
        category: "Pneumatics",
        description: "Air flow control valves.",
        image: "/images/products/smc/control.jpg"
      },
      {
        id: "smc-rotary-actuator",
        name: "Rotary Actuators",
        category: "Pneumatics",
        description: "Rotary motion pneumatic actuators.",
        image: "/images/products/smc/rotary.jpg"
      },
      {
        id: "smc-industrial-filter",
        name: "Industrial Filters",
        category: "Air Preparation",
        description: "Compressed air filtration systems.",
        image: "/images/products/smc/filter.jpg"
      },
      {
        id: "smc-liquid-valves",
        name: "Chemical Liquid Valves",
        category: "Fluid Control",
        description: "Liquid flow control valves.",
        image: "/images/products/smc/valve.jpg"
      },
      {
        id: "smc-vacuum",
        name: "Vacuum Equipment",
        category: "Pneumatics",
        description: "Vacuum handling and suction systems.",
        image: "/images/products/smc/vaccum.jpg"
      },
      {
        id: "smc-hydraulic",
        name: "Hydraulic Equipment",
        category: "Hydraulics",
        description: "Industrial hydraulic components.",
        image: "/images/products/smc/hydrolic.jpg"
      },
      {
        id: "smc-pressure-sensor",
        name: "Pressure Sensors",
        category: "Sensors",
        description: "Industrial pressure sensing devices.",
        image: "/images/products/smc/sensor.jpg"
      }
    ]
  },

  /* =========================================================
     IFM ELECTRONIC
  ========================================================= */

  {
    id: "ifm",
    name: "IFM Electronic",
    logo: "/images/brands/ifm.png",
    brandColor: "#F39200",
    description:
      "IFM Electronic develops innovative sensor technology including capacitive, inductive, flow, and pressure sensors for industrial automation.",
    products: [
      {
        id: "ifm-capacitive",
        name: "Capacitive Sensors",
        category: "Sensors",
        description: "Capacitive proximity detection sensors.",
        image: "/images/products/ifm/captive.jpg"
      },
      {
        id: "ifm-inductive",
        name: "Inductive Sensors",
        category: "Sensors",
        description: "Inductive proximity sensors.",
        image: "/images/products/ifm/inductive.jpg"
      },
      {
        id: "ifm-retro",
        name: "Retro Reflective Sensors",
        category: "Sensors",
        description: "Object detection photo sensors.",
        image: "/images/products/ifm/retro.jpg"
      },
      {
        id: "ifm-photoelectric",
        name: "Photoelectric Sensors",
        category: "Sensors",
        description: "Object detection photo sensors.",
        image: "/images/products/ifm/photo.jpg"
      },
      {
        id: "ifm-encoder",
        name: "Encoders",
        category: "Motion Control",
        description: "Rotary encoders for automation.",
        image: "/images/products/ifm/encoder.jpg"
      },
      {
        id: "ifm-power-supply",
        name: "Power Supplies",
        category: "Control",
        description: "Industrial power supply modules.",
        image: "/images/products/ifm/power.jpg"
      },
      {
        id: "ifm-flow-sensor",
        name: "Flow Sensors",
        category: "Instrumentation",
        description: "Industrial flow measurement sensors.",
        image: "/images/products/ifm/flow.jpg"
      },
      {
        id: "ifm-pressure-sensor",
        name: "Pressure Sensors",
        category: "Instrumentation",
        description: "Pressure measurement devices.",
        image: "/images/products/ifm/pressure.jpg"
      }
    ]
  },

  /* =========================================================
     SICK
  ========================================================= */

  {
    id: "sick",
    name: "SICK",
    logo: "/images/brands/sick.png",
    brandColor: "#005CA9",
    description:
      "SICK is a global manufacturer of industrial sensors, safety systems, laser scanners, and automation technologies.",
    products: [
      {
        id: "sick-capacitive",
        name: "Capacitive Sensors",
        category: "Sensors",
        description: "Industrial capacitive detection sensors.",
        image: "/images/products/sick/capacitive.jpg"
      },
      {
        id: "sick-photo",
        name: "Photoelectric Sensors",
        category: "Sensors",
        description: "Optical sensing devices.",
        image: "/images/products/sick/photo.jpg"
      },
      {
        id: "sick-laser",
        name: "Laser Scanners",
        category: "Automation",
        description: "Industrial laser scanning systems.",
        image: "/images/products/sick/laser.jpg"
      },
      {
        id: "sick-vision",
        name: "Vision Cameras",
        category: "Machine Vision",
        description: "Industrial vision inspection cameras.",
        image: "/images/products/sick/camera.jpg"
      },
      {
        id: "sick-proximity",
        name: "Proximity Sensors",
        category: "Sensors",
        description: "Industrial proximity detection sensors.",
        image: "/images/products/sick/pro.jpg"
      },
      {
        id: "sick-light-curtain",
        name: "Safety Light Curtains",
        category: "Safety",
        description: "Machine safety light barriers.",
        image: "/images/products/sick/curtain.png"
      },
      {
        id: "sick-encoder",
        name: "Encoders",
        category: "Motion Control",
        description: "Rotary motion encoders.",
        image: "/images/products/sick/encoder.jpg"
      },
      {
        id: "sick-contrast",
        name: "Contrast Cylinder",
        category: "Cylinder",
        description: "High-performance cylinders.",
        image: "/images/products/sick/cylinder.jpg"
      }
    ]
  },

  {
    id: "balluff",
    name: "Balluff",
    logo: "/images/brands/balluff.jpg",
    brandColor: "#F28C00",
    description:
      "Balluff offers high-quality sensors, RFID systems, vision systems, networking solutions, and industrial automation components for precise measurement and detection.",
    products: [
      {
        id: "balluff-vision-camera",
        name: "Vision Cameras",
        category: "Vision Systems",
        description: "Industrial cameras for image processing and inspection applications.",
        image: "images/products/balluff/camera.jpg"
      },
      {
        id: "balluff-distance-sensor",
        name: "Distance Sensors",
        category: "Sensors",
        description: "High-precision distance measurement sensors.",
        image: "/images/products/balluff/distance.jpg"
      },
      {
        id: "balluff-rfid",
        name: "RFID Sensors",
        category: "Identification Systems",
        description: "RFID-based identification and tracking systems.",
        image: "/images/products/balluff/rfid.jpg"
      },
      {
        id: "balluff-encoder",
        name: "Encoders",
        category: "Motion Control",
        description: "Rotary and position encoders for motion feedback.",
        image: "/images/products/balluff/encoder.jpg"
      },
      {
        id: "balluff-lvdt",
        name: "LVDT Sensors",
        category: "Position Measurement",
        description: "Linear Variable Differential Transformers for precise linear measurement.",
        image: "/images/products/balluff/lvdt.jpg"
      },
      {
        id: "balluff-safety-switch",
        name: "Safety Switches & Sensors",
        category: "Safety Components",
        description: "Industrial safety switches and protection sensors.",
        image: "/images/products/balluff/switch.jpg"
      },
      {
        id: "balluff-cam-switch",
        name: "Mechanical Cam Switch",
        category: "Mechanical Components",
        description: "Cam-operated mechanical switching devices.",
        image: "/images/products/balluff/cam.jpg"
      },
      {
        id: "balluff-ultrasonic",
        name: "Ultrasonic Sensors",
        category: "Sensors",
        description: "Ultrasonic sensors for object detection and distance measurement.",
        image: "/images/products/balluff/ultra.jpg"
      }
    ]
  },
  {
    id: "omron",
    name: "Omron",
    logo: "/images/brands/omron.png",
    brandColor: "#005BAC",
    description:
      "Omron provides advanced industrial automation solutions including sensors, relays, controllers, safety devices, motion systems, and power supplies.",
    products: [
      {
        id: "omron-vision-camera",
        name: "Vision Cameras",
        category: "Vision Systems",
        description: "Industrial vision cameras for inspection and automation.",
        image: "/images/products/omron/camera.jpg"
      },
      {
        id: "omron-solid-state-relay",
        name: "Solid State Relays",
        category: "Relays",
        description: "Reliable solid-state relays for industrial switching applications.",
        image: "/images/products/omron/solid.jpg"
      },
      {
        id: "omron-temperature-controller",
        name: "Digital Temperature Controllers",
        category: "Control Components",
        description: "Digital controllers for precise temperature regulation.",
        image: "/images/products/omron/digital.jpg"
      },
      {
        id: "omron-encoder",
        name: "Encoders",
        category: "Motion Control",
        description: "High-accuracy rotary encoders for motion feedback.",
        image: "/images/products/omron/encoder.jpg"
      },
      {
        id: "omron-power-supply",
        name: "Power Supplies",
        category: "Power Components",
        description: "Industrial-grade power supply units.",
        image: "/images/products/omron/power.jpg"
      },
      {
        id: "omron-safety-light-curtain",
        name: "Safety Light Curtains",
        category: "Safety Components",
        description: "Optical safety barriers for machine protection.",
        image: "/images/products/omron/safety.png"
      },
      {
        id: "omron-limit-switch",
        name: "Limit Switches",
        category: "Switches",
        description: "Mechanical limit switches for position detection.",
        image: "/images/products/omron/limit.jpg"
      },
      {
        id: "omron-glass-relay",
        name: "Glass Relays",
        category: "Relays",
        description: "Electromechanical glass-enclosed relays.",
        image: "/images/products/omron/glass.jpg"
      }
    ]
  },
  {
    id: "schmersal",
    name: "Schmersal",
    logo: "/images/brands/schmersal.png",
    brandColor: "#005AA9",
    description:
      "Schmersal is a leading provider of industrial automation products including safety switches, position switches, solenoid interlocks, safety light curtains, safety relays, and machine protection systems.",
    products: [
      {
        id: "schmersal-solenoid-interlock",
        name: "Solenoid Interlocks",
        category: "Safety Components",
        description: "Solenoid interlock switches for machine and access safety.",
        image: "/images/products/schmersal/inter.jpg"
      },
      {
        id: "schmersal-safety-sensors",
        name: "Safety Sensors",
        category: "Safety Components",
        description: "Sensors designed for industrial machine safety applications.",
        image: "/images/products/schmersal/safety.jpg"
      },
      {
        id: "schmersal-pull-wire-switch",
        name: "Pull Wire Emergency Stop Switch",
        category: "Safety Switches",
        description: "Emergency pull-wire switches for conveyor and large machine protection.",
        image: "/images/products/schmersal/pull.jpg"
      },
      {
        id: "schmersal-safety-switch",
        name: "Safety Switches",
        category: "Safety Components",
        description: "Industrial safety switches for position and access monitoring.",
        image: "/images/products/schmersal/switch.jpg"
      },
      {
        id: "schmersal-safety-light-barrier",
        name: "Safety Light Barriers",
        category: "Safety Components",
        description: "Optical safety light barriers for hazardous area protection.",
        image: "/images/products/schmersal/light.jpg"
      },
      {
        id: "schmersal-safety-light-curtain",
        name: "Safety Light Curtains",
        category: "Safety Components",
        description: "Safety light curtains for machine guarding and operator protection.",
        image: "/images/products/schmersal/curtain.jpg"
      },
      {
        id: "schmersal-two-hand-control",
        name: "Two-Hand Control Panels",
        category: "Safety Controls",
        description: "Two-hand control devices for safe machine operation.",
        image: "/images/products/schmersal/control.jpg"
      },
      {
        id: "schmersal-safety-relay",
        name: "Safety Relays",
        category: "Safety Components",
        description: "Safety relay modules for monitoring and control circuits.",
        image: "/images/products/schmersal/safety-relay.jpg"
      }
    ]
  },
  {
    id: "keyence",
    name: "Keyence India",
    logo: "/images/brands/keyence.png",
    brandColor: "#F58220",
    description:
      "Keyence is a leading supplier of factory automation sensors, laser markers, measurement systems, vision systems, PLCs, and industrial automation components.",
    products: [
      {
        id: "keyence-colour-sensor",
        name: "Colour Sensors",
        category: "Sensors",
        description: "High-precision color detection sensors for industrial applications.",
        image: "/images/products/keyence/colour-sensor.jpg"
      },
      {
        id: "keyence-digital-sensor",
        name: "Digital Sensors",
        category: "Sensors",
        description: "Compact digital sensors for accurate object detection.",
        image: "/images/products/keyence/digital-sensor.jpg"
      },
      {
        id: "keyence-fibre-optic-sensor",
        name: "Fibre Optic Sensors",
        category: "Sensors",
        description: "Fiber optic sensors for precision sensing in tight spaces.",
        image: "/images/products/keyence/fibre-optic-sensor.jpg"
      },
      {
        id: "keyence-flow-sensor",
        name: "Flow Sensors",
        category: "Sensors",
        description: "Industrial flow sensors for monitoring liquid and air flow.",
        image: "/images/products/keyence/flow-sensor.jpg"
      },
      {
        id: "keyence-laser-sensor",
        name: "Laser Sensors",
        category: "Sensors",
        description: "Laser displacement and detection sensors for high accuracy measurement.",
        image: "/images/products/keyence/laser-sensor.jpg"
      },
      {
        id: "keyence-level-sensor",
        name: "Level Sensors",
        category: "Sensors",
        description: "Level detection sensors for liquids and materials.",
        image: "/images/products/keyence/level-sensor.jpg"
      },
      {
        id: "keyence-photoelectric-sensor",
        name: "Photoelectric Sensors",
        category: "Sensors",
        description: "Photoelectric sensors for reliable object detection.",
        image: "/images/products/keyence/photoelectric-sensor.jpg"
      },
      {
        id: "keyence-temperature-sensor",
        name: "Temperature Sensors",
        category: "Sensors",
        description: "Temperature measurement sensors for industrial processes.",
        image: "/images/products/keyence/temperature-sensor.jpg"
      }
    ]
  },
  {
    id: "3m",
    name: "3M",
    logo: "/images/brands/3M.png",
    brandColor: "#FF0000",
    description:
      "3M provides advanced safety and industrial solutions including respiratory protection, ear protection, safety eyewear, protective clothing, gloves, and industrial tapes.",
    products: [
      {
        id: "3m-ear-plug",
        name: "Ear Plugs",
        category: "Hearing Protection",
        description: "Disposable and reusable ear plugs for noise protection.",
        image: "/images/products/3m/ear-plug.jpg"
      },
      {
        id: "3m-goggles",
        name: "Safety Goggles",
        category: "Eye Protection",
        description: "Protective industrial safety goggles.",
        image: "/images/products/3m/goggles.jpg"
      },
      {
        id: "3m-jacket",
        name: "Safety Jackets",
        category: "Protective Clothing",
        description: "High-visibility industrial safety jackets.",
        image: "/images/products/3m/jacket.jpg"
      },
      {
        id: "3m-jointing-kit",
        name: "Cable Jointing Kits",
        category: "Electrical Accessories",
        description: "Electrical cable jointing and insulation kits.",
        image: "/images/products/3m/jointing-kit.jpg"
      },
      {
        id: "3m-mask",
        name: "Respiratory Masks",
        category: "Respiratory Protection",
        description: "Industrial respirators and protective masks.",
        image: "/images/products/3m/mask.jpg"
      },
      {
        id: "3m-rubber-gloves",
        name: "Rubber Gloves",
        category: "Hand Protection",
        description: "Industrial rubber safety gloves.",
        image: "/images/products/3m/rubber-gloves.jpg"
      },
      {
        id: "3m-scotch-tape",
        name: "Scotch Tape",
        category: "Adhesives & Tapes",
        description: "Industrial insulation and sealing tapes.",
        image: "/images/products/3m/scotch-tape.jpg"
      },
      {
        id: "3m-tape",
        name: "Industrial Tape",
        category: "Adhesives & Tapes",
        description: "General purpose and electrical tapes.",
        image: "/images/products/3m/tape.jpg"
      }
    ]
  },

  {
    id: "honeywell",
    name: "Honeywell Salisbury",
    logo: "/images/brands/honeywell.png",
    brandColor: "#D71920",
    description:
      "Honeywell Salisbury provides electrical safety equipment including voltage detectors, insulating gloves, helmets, grounding equipment, and arc flash protective wear.",
    products: [
      {
        id: "honeywell-controller",
        name: "Controllers",
        category: "Electrical Safety",
        description: "Industrial control and monitoring devices.",
        image: "/images/products/honeywell/controller.jpg"
      },
      {
        id: "honeywell-gloves",
        name: "Insulated Gloves",
        category: "Hand Protection",
        description: "Electrical insulated safety gloves.",
        image: "/images/products/honeywell/gloves.jpg"
      },
      {
        id: "honeywell-goggles",
        name: "Safety Goggles",
        category: "Eye Protection",
        description: "Electrical and industrial safety goggles.",
        image: "/images/products/honeywell/goggles.jpg"
      },
      {
        id: "honeywell-helmet",
        name: "Safety Helmets",
        category: "Head Protection",
        description: "Electrical safety helmets.",
        image: "/images/products/honeywell/helmet.jpg"
      },
      {
        id: "honeywell-jacket",
        name: "Protective Jackets",
        category: "Protective Clothing",
        description: "Arc flash and protective jackets.",
        image: "/images/products/honeywell/jacket.jpg"
      },
      {
        id: "honeywell-mask",
        name: "Protective Masks",
        category: "Respiratory Protection",
        description: "Industrial and electrical safety masks.",
        image: "/images/products/honeywell/mask.jpg"
      },
      {
        id: "honeywell-shoes",
        name: "Safety Shoes",
        category: "Foot Protection",
        description: "Electrical and industrial safety footwear.",
        image: "/images/products/honeywell/shoes.jpg"
      }
    ]
  },

  {
    id: "karam",
    name: "Karam",
    logo: "/images/brands/karam.png",
    brandColor: "#E31E24",
    description:
      "Karam manufactures personal protective equipment including fall protection systems, helmets, gloves, safety footwear, and protective clothing.",
    products: [
      {
        id: "karam-face-shield",
        name: "Face Shields",
        category: "Head & Face Protection",
        description: "Industrial face shields.",
        image: "/images/products/karam/face.jpg"
      },
      {
        id: "karam-fall-protection",
        name: "Fall Protection Equipment",
        category: "Fall Protection",
        description: "Full body harnesses and fall arrest systems.",
        image: "/images/products/karam/fall-protection.jpg"
      },
      {
        id: "karam-hand-gloves",
        name: "Hand Protective Gloves",
        category: "Hand Protection",
        description: "Industrial safety gloves.",
        image: "/images/products/karam/hand-gloves.jpg"
      },
      {
        id: "karam-helmet",
        name: "Safety Helmets",
        category: "Head Protection",
        description: "Industrial safety helmets.",
        image: "/images/products/karam/helmet.jpg"
      },
      {
        id: "karam-ear-protection",
        name: "Hearing Protection",
        category: "Hearing Protection",
        description: "Ear muffs and plugs.",
        image: "/images/products/karam/ear-protection.jpg"
      },
      {
        id: "karam-workwear",
        name: "Protective Workwear",
        category: "Protective Clothing",
        description: "Industrial protective clothing.",
        image: "/images/products/karam/workwear.jpg"
      },
      {
        id: "karam-protective-eyewear",
        name: "Protective Eyewear",
        category: "Eye Protection",
        description: "Industrial safety eyewear.",
        image: "/images/products/karam/protective-eyewear.jpg"
      },
      {
        id: "karam-safety-shoes",
        name: "Safety Shoes",
        category: "Foot Protection",
        description: "Industrial safety footwear.",
        image: "/images/products/karam/safety-shoes.jpg"
      }
    ]
  },

  {
    id: "black-decker",
    name: "Black + Decker",
    logo: "/images/brands/black-decker.png",
    brandColor: "#F36F21",
    description:
      "Black + Decker manufactures power tools, safety equipment, hand tools, and industrial hardware products.",
    products: [
      {
        id: "black-decker-helmet",
        name: "Head Protection",
        category: "Head Protection",
        description: "Industrial safety helmets.",
        image: "/images/products/black-decker/helmet.jpg"
      },
      {
        id: "black-decker-eye-protection",
        name: "Eye Protection",
        category: "Eye Protection",
        description: "Safety glasses and protective eyewear.",
        image: "/images/products/black-decker/eye-protection.jpg"
      },
      {
        id: "black-decker-face-protection",
        name: "Face Protection",
        category: "Face Protection",
        description: "Industrial face shields.",
        image: "/images/products/black-decker/face-protection.jpg"
      },
      {
        id: "black-decker-hand-protection",
        name: "Hand Protection",
        category: "Hand Protection",
        description: "Industrial safety gloves.",
        image: "/images/products/black-decker/hand-protection.jpg"
      },
      {
        id: "black-decker-safety-footwear",
        name: "Safety Footwear",
        category: "Foot Protection",
        description: "Protective safety shoes and boots.",
        image: "/images/products/black-decker/safety-footwear.jpg"
      },
      {
        id: "black-decker-fall-protection",
        name: "Fall Protection",
        category: "Fall Protection",
        description: "Harnesses and lanyards.",
        image: "/images/products/black-decker/fall-protection.jpg"
      },
      {
        id: "black-decker-harness",
        name: "Full Body Harness",
        category: "Fall Protection",
        description: "Industrial full body harness systems.",
        image: "/images/products/black-decker/harness.jpg"
      },
      {
        id: "black-decker-tools-lanyard",
        name: "Tools & Lanyards",
        category: "Accessories",
        description: "Safety tool lanyards and accessories.",
        image: "/images/products/black-decker/tools-lanyard.jpg"
      }
    ]
  },

  {
    id: "testo",
    name: "Testo",
    logo: "/images/brands/testo.jpg",
    brandColor: "#F58220",
    description:
      "Testo specializes in measuring instruments including data loggers, pressure gauges, leak detectors, thermal imagers, thermometers, and hygrometers.",
    products: [
      {
        id: "testo-data-logger",
        name: "Data Loggers",
        category: "Measuring Instruments",
        description: "Digital temperature and environmental data loggers.",
        image: "/images/products/testo/data-logger.jpg"
      },
      {
        id: "testo-flow-measurement",
        name: "Flow Measurement",
        category: "Measuring Instruments",
        description: "Air and liquid flow measurement devices.",
        image: "/images/products/testo/flow-measurement.jpg"
      },
      {
        id: "testo-leak-detector",
        name: "Leak Detectors",
        category: "Measuring Instruments",
        description: "Gas and refrigerant leak detection tools.",
        image: "/images/products/testo/leak-detector.jpg"
      },
      {
        id: "testo-moisture-meter",
        name: "Moisture Meters",
        category: "Measuring Instruments",
        description: "Material moisture measurement devices.",
        image: "/images/products/testo/moisture-meter.jpg"
      },
      {
        id: "testo-pressure-transmitter",
        name: "Pressure Transmitters",
        category: "Measuring Instruments",
        description: "Digital pressure transmitters and gauges.",
        image: "/images/products/testo/pressure-transmitter.jpg"
      },
      {
        id: "testo-thermal-imager",
        name: "Thermal Imager Camera",
        category: "Thermal Imaging",
        description: "Infrared thermal imaging cameras.",
        image: "/images/products/testo/thermal-imager.jpg"
      },
      {
        id: "testo-thermo-hygrometer",
        name: "Thermo Hygrometers",
        category: "Measuring Instruments",
        description: "Temperature and humidity measuring devices.",
        image: "/images/products/testo/thermo-hygrometer.jpg"
      }
    ]
  },
  /* =========================================================
     FLUKE
  ========================================================= */

  {
    id: "fluke",
    name: "Fluke",
    logo: "/images/brands/fluke.png",
    brandColor: "#FFC20E",
    description:
      "Fluke Corporation is a world leader in electronic test and measurement instruments used in industrial electronics installation, maintenance and service.",
    products: [
      {
        id: "fluke-data-loggers",
        name: "Data Loggers",
        category: "Testing Instruments",
        description: "Industrial data logging instruments.",
        image: "/images/products/fluke/data.jpg"
      },
      {
        id: "fluke-digital-clamp",
        name: "Digital Clamp Meters",
        category: "Testing Instruments",
        description: "True RMS clamp meters.",
        image: "/images/products/fluke/digital.jpg"
      },
      {
        id: "fluke-digital-multimeter",
        name: "Digital Multimeters",
        category: "Testing Instruments",
        description: "Precision digital multimeters.",
        image: "/images/products/fluke/multi.jpg"
      },
      {
        id: "fluke-pro-infrared",
        name: "Professional Infrared Cameras",
        category: "Thermal Imaging",
        description: "Advanced infrared thermal cameras.",
        image: "/images/products/fluke/infra.jpg"
      },
      {
        id: "fluke-t-pro",
        name: "T+ Pro Electrical Testers",
        category: "Electrical Testing",
        description: "Professional electric testers.",
        image: "/images/products/fluke/electrical.jpg"
      },
      {
        id: "fluke-temp-humidity",
        name: "Temperature & Humidity Meters",
        category: "Environmental Measurement",
        description: "Environmental condition meters.",
        image: "/images/products/fluke/temp.jpg"
      },
      {
        id: "fluke-wireless-clamp",
        name: "Wireless Clamp Meters",
        category: "Wireless Testing",
        description: "Remote clamp current measurement devices.",
        image: "/images/products/fluke/wireless.jpg"
      },
      {
        id: "fluke-wireless-current",
        name: "Wireless Current Modules",
        category: "Wireless Testing",
        description: "Wireless current monitoring modules.",
        image: "/images/products/fluke/current.jpg"
      }
    ]
  },
  {
    id: "stanley",
    name: "Stanley",
    logo: "/images/brands/stanley.png",
    brandColor: "#FFD100",
    description:
      "Stanley manufactures power tools, hand tools, measuring instruments, fastening tools, storage solutions, and professional industrial equipment.",
    products: [
      {
        id: "stanley-cutting-power-tool",
        name: "Cutting Power Tools",
        category: "Power Tools",
        description: "Industrial cutting tools including circular saws and grinders.",
        image: "/images/products/stanley/cutting-power-tool.jpg"
      },
      {
        id: "stanley-fastening-tools",
        name: "Fastening Tools",
        category: "Hand Tools",
        description: "Staplers, riveters and fastening equipment.",
        image: "/images/products/stanley/fastening-tools.jpg"
      },
      {
        id: "stanley-machine-tool-set",
        name: "Machine Tool Sets",
        category: "Tool Sets",
        description: "Complete machine tool kits and sets.",
        image: "/images/products/stanley/machine-tool-set.jpg"
      },
      {
        id: "stanley-measuring-layout-tools",
        name: "Measuring & Layout Tools",
        category: "Measuring Tools",
        description: "Measuring tapes, spirit levels and layout tools.",
        image: "/images/products/stanley/measuring-layout-tools.jpg"
      },
      {
        id: "stanley-spanner-set",
        name: "Spanner Sets",
        category: "Hand Tools",
        description: "Professional spanner and wrench sets.",
        image: "/images/products/stanley/spanner-set.jpg"
      },
      {
        id: "stanley-speciality-tools",
        name: "Speciality Tools",
        category: "Specialty Tools",
        description: "Specialized industrial and workshop tools.",
        image: "/images/products/stanley/speciality-tools.jpg"
      },
      {
        id: "stanley-tester",
        name: "Stanley Testers",
        category: "Electrical Tools",
        description: "Electrical testers and voltage detection tools.",
        image: "/images/products/stanley/tester.jpg"
      },
      {
        id: "stanley-tool-storage",
        name: "Tool Storage",
        category: "Storage Solutions",
        description: "Tool boxes, cabinets and storage systems.",
        image: "/images/products/stanley/tool-storage.jpg"
      }
    ]
  },
  {
    id: "bosch",
    name: "Bosch",
    logo: "/images/brands/bosch.png",
    brandColor: "#E2001A",
    description:
      "Bosch offers innovative power tools and industrial equipment including drills, grinders, hammer machines, measuring tools, fuel filters, vacuum cleaners, and accessories for professional applications.",
    products: [
      {
        id: "bosch-blower",
        name: "Blower",
        category: "Power Tools",
        description: "Electric air blowers for cleaning and industrial use.",
        image: "/images/products/bosch/blower.jpg"
      },
      {
        id: "bosch-drill-bit",
        name: "Drill Bits",
        category: "Accessories",
        description: "High-performance drill bits for various materials.",
        image: "/images/products/bosch/drill-bit.jpg"
      },
      {
        id: "bosch-drill-machine",
        name: "Drill Machine",
        category: "Power Tools",
        description: "Cordless and electric drill machines.",
        image: "/images/products/bosch/drill-machine.jpg"
      },
      {
        id: "bosch-fuel-filter",
        name: "Fuel Filter",
        category: "Automotive Components",
        description: "Industrial and automotive fuel filtration systems.",
        image: "/images/products/bosch/fuel-filter.jpg"
      },
      {
        id: "bosch-grinder-cutter",
        name: "Grinder Cutter",
        category: "Power Tools",
        description: "Industrial angle grinders and cutting machines.",
        image: "/images/products/bosch/grinder-cutter.jpg"
      },
      {
        id: "bosch-grinder-wheel",
        name: "Grinder Wheel",
        category: "Accessories",
        description: "Grinding and cutting wheels for metal and masonry.",
        image: "/images/products/bosch/grinder-wheel.jpg"
      },
      {
        id: "bosch-hammer-drill-machine",
        name: "Hammer Drill Machine",
        category: "Power Tools",
        description: "Heavy-duty hammer drilling machines.",
        image: "/images/products/bosch/hammer-drill-machine.jpg"
      },
      {
        id: "bosch-vacuum-cleaner",
        name: "Vacuum Cleaner",
        category: "Industrial Equipment",
        description: "Industrial and workshop vacuum cleaning systems.",
        image: "/images/products/bosch/vacuum-cleaner.jpg"
      }
    ]
  },
  {
    id: "fag",
    name: "FAG",
    logo: "/images/brands/fag.png",
    brandColor: "#D50000",
    description:
      "FAG manufactures high-precision bearings for automotive, industrial and heavy-duty applications including ball bearings, roller bearings, needle bearings and bearing assemblies.",
    products: [
      {
        id: "fag-axial-deep-groove-ball-bearing",
        name: "Axial Deep Groove Ball Bearing",
        category: "Ball Bearings",
        description: "Axial deep groove ball bearings for high-speed and axial load applications.",
        image: "/images/products/fag/axial-deep-groove-ball-bearing.jpg"
      },
      {
        id: "fag-axial-needle-cage-assembly",
        name: "Axial Needle & Cage Assembly",
        category: "Needle Bearings",
        description: "Axial needle roller and cage assemblies for compact designs.",
        image: "/images/products/fag/axial-needle-cage-assembly.jpg"
      },
      {
        id: "fag-barrel-roller-bearing",
        name: "Barrel Roller Bearing",
        category: "Roller Bearings",
        description: "Barrel roller bearings for heavy radial loads and misalignment compensation.",
        image: "/images/products/fag/barrel-roller-bearing.jpg"
      },
      {
        id: "fag-spherical-roller-bearing",
        name: "Spherical Roller Bearing",
        category: "Roller Bearings",
        description: "Spherical roller bearings for high load capacity and self-alignment.",
        image: "/images/products/fag/spherical-roller-bearing.jpg"
      }
    ]
  },

  /* =========================================================
     SKF
  ========================================================= */

  {
    id: "skf",
    name: "SKF",
    logo: "/images/brands/skf.png",
    brandColor: "#003087",
    description:
      "SKF manufactures bearings, seals, lubrication systems, and linear motion products for industrial, automotive, and heavy-duty applications.",
    products: [
      {
        id: "skf-automatic-lubrication",
        name: "Automatic Lubrication Systems",
        category: "Lubrication Systems",
        description: "Centralized automatic lubrication systems for industrial machinery.",
        image: "/images/products/skf/automatic-lubrication.jpg"
      },
      {
        id: "skf-hydraulic-seals",
        name: "Hydraulic Seals",
        category: "Seals",
        description: "High-performance hydraulic sealing solutions.",
        image: "/images/products/skf/hydraulic-seals.jpg"
      },
      {
        id: "skf-industrial-shaft-seals",
        name: "Industrial Shaft Seals",
        category: "Seals",
        description: "Shaft sealing solutions for rotating equipment.",
        image: "/images/products/skf/industrial-shaft-seals.jpg"
      },
      {
        id: "skf-linear-motion",
        name: "Linear Motion Standard Range",
        category: "Linear Motion",
        description: "Linear bearings and motion systems for precision movement.",
        image: "/images/products/skf/linear-motion.jpg"
      },
      {
        id: "skf-maintenance-lubrication",
        name: "Maintenance & Lubrication Products",
        category: "Maintenance Products",
        description: "Lubricants, greases and maintenance accessories.",
        image: "/images/products/skf/maintenance-lubrication.jpg"
      },
      {
        id: "skf-plain-bearing",
        name: "Plain Bearings",
        category: "Bearings",
        description: "Plain bearings for heavy load and oscillating applications.",
        image: "/images/products/skf/plain-bearing.jpg"
      },
      {
        id: "skf-roller-bearing",
        name: "Roller Bearings",
        category: "Bearings",
        description: "High-load roller bearings for industrial machinery.",
        image: "/images/products/skf/roller-bearing.jpg"
      }
    ]
  },
  {
    id: "phoenix-contact",
    name: "Phoenix Contact",
    logo: "/images/brands/phoenix-contact.png",
    brandColor: "#F58220",
    description:
      "Phoenix Contact provides industrial automation, electrical connection technology, interface modules, power supplies, and control systems for industrial applications.",
    products: [
      {
        id: "phoenix-contact-angle-connector",
        name: "Angle Connectors",
        category: "Connectors",
        description: "Industrial angle connectors for electrical connections.",
        image: "/images/products/phoenix-contact/angle-connector.jpg"
      },
      {
        id: "phoenix-contact-automation-card",
        name: "Automation Cards",
        category: "Automation Components",
        description: "Interface and automation modules for industrial control systems.",
        image: "/images/products/phoenix-contact/automation-card.jpg"
      },
      {
        id: "phoenix-contact-circuit-breaker",
        name: "Circuit Breakers",
        category: "Protection Devices",
        description: "Industrial circuit breakers for electrical protection.",
        image: "/images/products/phoenix-contact/circuit-breaker.jpg"
      },
      {
        id: "phoenix-contact-connectors",
        name: "Industrial Connectors",
        category: "Connectors",
        description: "Electrical connectors for industrial automation.",
        image: "/images/products/phoenix-contact/connectors.jpg"
      },
      {
        id: "phoenix-contact-crimping-tool",
        name: "Crimping Tools",
        category: "Tools",
        description: "Crimping tools for secure electrical terminations.",
        image: "/images/products/phoenix-contact/crimping-tool.jpg"
      },
      {
        id: "phoenix-contact-electronics-device",
        name: "Electronic Devices",
        category: "Electronic Components",
        description: "Interface modules and electronic automation devices.",
        image: "/images/products/phoenix-contact/electronics-device.jpg"
      },
      {
        id: "phoenix-contact-hybrid-motor",
        name: "Hybrid Motor Devices",
        category: "Automation Components",
        description: "Hybrid motor control and interface modules.",
        image: "/images/products/phoenix-contact/hybrid-motor.jpg"
      },
      {
        id: "phoenix-contact-industrial-pc",
        name: "Industrial PC",
        category: "Industrial Computing",
        description: "Industrial PCs for automation and control applications.",
        image: "/images/products/phoenix-contact/industrial-pc.jpg"
      }
    ]
  },

  {
    id: "pilz",
    name: "Pilz",
    logo: "/images/brands/pilz.png",
    brandColor: "#FFD100",
    description:
      "Pilz specializes in automation and safety technology including safety relays, safety switches, light curtains, encoders, control systems, and industrial automation solutions.",
    products: [
      {
        id: "pilz-safety-proximity-switch",
        name: "Safety Proximity Switch",
        category: "Safety Components",
        description: "Safety-rated proximity switches for machine monitoring.",
        image: "/images/products/pilz/safety-proximity-switch.jpg"
      },
      {
        id: "pilz-safety-rope-pull-switch",
        name: "Safety Rope Pull Switch",
        category: "Safety Components",
        description: "Emergency rope pull switches for conveyor and machine safety.",
        image: "/images/products/pilz/safety-rope-pull-switch.jpg"
      },
      {
        id: "pilz-safety-gate-switch",
        name: "Safety Gate Switch",
        category: "Safety Components",
        description: "Safety interlock switches for access doors and gates.",
        image: "/images/products/pilz/safety-gate-switch.jpg"
      },
      {
        id: "pilz-safety-light-barrier",
        name: "Safety Light Barrier",
        category: "Safety Components",
        description: "Optical safety light barriers for hazardous zones.",
        image: "/images/products/pilz/safety-light-barrier.jpg"
      },
      {
        id: "pilz-safety-camera-system",
        name: "Safety Camera System",
        category: "Vision & Safety",
        description: "Industrial safety camera monitoring systems.",
        image: "/images/products/pilz/safety-camera-system.jpg"
      },
      {
        id: "pilz-safety-relay",
        name: "Safety Relay",
        category: "Safety Components",
        description: "Safety relay modules for monitoring safety circuits.",
        image: "/images/products/pilz/safety-relay.jpg"
      },
      {
        id: "pilz-safety-encoder",
        name: "Safety Encoder",
        category: "Motion & Safety",
        description: "Safety encoders for speed and position monitoring.",
        image: "/images/products/pilz/safety-encoder.jpg"
      },
      {
        id: "pilz-safety-switch",
        name: "Safety Switch",
        category: "Safety Components",
        description: "Industrial safety switches for machine protection.",
        image: "/images/products/pilz/safety-switch.jpg"
      }
    ]
  },
  {
    id: "harting",
    name: "Harting",
    logo: "/images/brands/harting.png",
    brandColor: "#FFCC00",
    description:
      "Harting provides industrial connectivity solutions including connectors, Ethernet systems, interface components, RFID systems, and industrial cabling for automation and data transmission.",
    products: [
      {
        id: "harting-connectors",
        name: "Industrial Connectors",
        category: "Connectors",
        description: "Heavy-duty and modular industrial connectors.",
        image: "/images/products/harting/connectors.jpg"
      },
      {
        id: "harting-current-measure",
        name: "Current Measurement Devices",
        category: "Measurement Devices",
        description: "Devices for monitoring and measuring electrical current.",
        image: "/images/products/harting/current-measure.jpg"
      },
      {
        id: "harting-ethernet-switch",
        name: "Ethernet Switch",
        category: "Networking",
        description: "Industrial Ethernet switches for automation networks.",
        image: "/images/products/harting/ethernet-switch.jpg"
      },
      {
        id: "harting-interface-connector",
        name: "Interface Connectors",
        category: "Connectors",
        description: "Interface connectors for signal and data transmission.",
        image: "/images/products/harting/interface-connector.jpg"
      },
      {
        id: "harting-pcb-connector",
        name: "PCB Connectors",
        category: "Connectors",
        description: "Printed circuit board connectors.",
        image: "/images/products/harting/pcb-connector.jpg"
      },
      {
        id: "harting-rfid",
        name: "RFID Systems",
        category: "Identification Systems",
        description: "Industrial RFID identification solutions.",
        image: "/images/products/harting/rfid.jpg"
      },
      {
        id: "harting-system-cable",
        name: "System Cables",
        category: "Cables",
        description: "Pre-assembled system cables for industrial connectivity.",
        image: "/images/products/harting/system-cable.jpg"
      },
      {
        id: "harting-tools",
        name: "Crimping & Assembly Tools",
        category: "Tools",
        description: "Tools for connector assembly and crimping applications.",
        image: "/images/products/harting/tools.jpg"
      }
    ]
  },

  {
    id: "nexaweld",
    name: "Nexaweld",
    logo: "/images/brands/nexaweld.jpg",
    brandColor: "#D71920",
    description:
      "Nexaweld manufactures welding consumables including special electrodes for alloy steel, stainless steel, cast iron, non-ferrous metals, and hardfacing applications.",
    products: [
      {
        id: "nexaweld-electrodes-mild-alloy-steel",
        name: "Electrodes for Mild & Alloy Steel",
        category: "Welding Electrodes",
        description: "Welding electrodes for mild steel and alloy steel applications.",
        image: "/images/products/nexaweld/electrodes-mild-alloy-steel.jpg"
      },
      {
        id: "nexaweld-electrodes-stainless-steel",
        name: "Electrodes for Stainless Steel",
        category: "Welding Electrodes",
        description: "Special electrodes for stainless steel welding.",
        image: "/images/products/nexaweld/electrodes-stainless-steel.jpg"
      },
      {
        id: "nexaweld-electrodes-cast-iron",
        name: "Electrodes for Cast Iron",
        category: "Welding Electrodes",
        description: "Welding electrodes designed for cast iron materials.",
        image: "/images/products/nexaweld/electrodes-cast-iron.jpg"
      },
      {
        id: "nexaweld-electrodes-non-ferrous",
        name: "Electrodes for Non-Ferrous Metals",
        category: "Welding Electrodes",
        description: "Electrodes suitable for non-ferrous metal welding.",
        image: "/images/products/nexaweld/electrodes-non-ferrous.jpg"
      },
      {
        id: "nexaweld-electrodes-hardfacing-overlay",
        name: "Electrodes for Hardfacing & Overlay",
        category: "Welding Electrodes",
        description: "Hardfacing and overlay welding electrodes.",
        image: "/images/products/nexaweld/electrodes-hardfacing-overlay.jpg"
      }
    ]
  }
];