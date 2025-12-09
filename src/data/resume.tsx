import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Bot, Brain, Workflow, Database, Terminal, Settings, Shield, Code2, Globe, Server, Cloud, BarChart3, LineChart, PieChart, Users, Briefcase, Target, Rocket, Activity, Webhook, RefreshCw, Network, FlaskConical, FileText, Map } from "lucide-react";
import {
  SiOpenai, SiAnthropic, SiGoogle, SiFastapi, SiFlask, SiStreamlit, SiReact, SiVite,
  SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiVercel,
  SiRender, SiPython, SiPostgresql, SiPandas, SiNumpy, SiPowerbi, SiTableau,
  SiGoogleanalytics, SiAmplitude, SiGit, SiGithub, SiSap
} from "react-icons/si";

export const DATA = {
  name: "Ayush Verma",
  initials: "AV",
  url: "https://ayushverma.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "I ship AI products that move metrics.",
  summary:
    "Ayush Verma is an AI Product Manager & Engineer in Bengaluru who builds intelligent systems that drive measurable outcomes. At Prestige Group, he architected Prestige Genie, an LLM-powered chatbot handling end-to-end customer support flows—from lead capture to site-visit scheduling—using RAG architecture and Langfuse for monitoring. He led PREOSS, a retail SaaS platform integrating leasing workflows with SAP APIs, cutting turnaround time by ~75% through automation. He also spearheaded CAFM implementation and built a CDP for unified customer insights. Previously at boAt, Ayush rolled out Bizom DMS/SFA across 175+ partners, engineered ETL pipelines to AWS Redshift, and created Power BI dashboards that slashed data ingestion time by ~90%. He thrives at the intersection of AI, product strategy, and scalable infrastructure. Let's connect if you're building something ambitious.",
  avatarUrl: "/me.jpg",
  now: `**What I'm Building Right Now**

December 2024. Bengaluru.

I'm deep in the trenches with **Prestige Genie**—our LLM-powered chatbot that's handling the full customer support flow. Think lead capture → project discovery → site-visit scheduling, all automated. The RAG architecture is humming nicely, and I've got Langfuse wired in for monitoring and eval. Watching those conversation traces in real-time? *Chef's kiss*.

Over on **PREOSS**, I'm shipping new features almost weekly. The leasing platform now talks to SAP APIs like they're old friends, and we've cut turnaround time by ~75%. Latest win: automated the entire short-lease booking→contract→invoicing pipeline. Zero manual handoffs.

Also spinning up **internal AI chatbots** on Copilot Studio for different teams. It's fascinating how much tribal knowledge you can unlock when you give people a conversational interface to their own docs and workflows.

The common thread? I'm obsessed with building AI that actually *moves metrics*—not just demos that look cool in slide decks.

If you're working on something ambitious at the AI × product intersection, let's talk.

—Ayush`,
  skills: [
    {
      category: "AI Systems & LLM Technologies",
      skills: [
        { name: "OpenAI", icon: SiOpenai, color: "#412991" },
        { name: "Claude", icon: SiAnthropic, color: "#D97757" },
        { name: "Gemini", icon: SiGoogle, color: "#4285F4" },
        { name: "LangChain", icon: Workflow, color: "#1C3C3C" },
        { name: "LangGraph", icon: Workflow, color: "#1C3C3C" },
        { name: "RAG Architectures", icon: Brain, color: "#FF6B6B" },
        { name: "Vector Databases", icon: Database, color: "#000000" },
        { name: "Prompt Engineering", icon: Terminal, color: "#4CAF50" },
        { name: "Fine-Tuning", icon: Settings, color: "#607D8B" },
        { name: "Evaluation Frameworks", icon: BarChart3, color: "#9C27B0" },
        { name: "Langfuse", icon: Activity, color: "#E91E63" },
        { name: "Agentic Workflows", icon: Bot, color: "#3F51B5" },
        { name: "Responsible AI & Safety", icon: Shield, color: "#2196F3" },
      ],
    },
    {
      category: "Product Engineering & Prototyping",
      skills: [
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
        { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "REST APIs", icon: Globe, color: "#03A9F4" },
        { name: "Webhooks", icon: Webhook, color: "#FF9800" },
        { name: "Automation Pipelines", icon: Workflow, color: "#795548" },
        { name: "Git/GitHub", icon: SiGithub, color: "#181717" },
        { name: "Cursor", icon: Code2, color: "#000000" },
        { name: "Opal", icon: Code2, color: "#000000" },
      ],
    },
    {
      category: "Cloud, MLOps & Deployment",
      skills: [
        { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
        { name: "Azure AI", icon: SiMicrosoftazure, color: "#0078D4" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "CI/CD", icon: RefreshCw, color: "#4CAF50" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Railway/Render", icon: SiRender, color: "#000000" },
      ],
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "SQL", icon: Database, color: "#4479A1" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Data Modeling", icon: Network, color: "#673AB7" },
        { name: "ETL Pipelines", icon: Workflow, color: "#FF5722" },
        { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
        { name: "Tableau", icon: SiTableau, color: "#E97627" },
        { name: "Amplitude", icon: SiAmplitude, color: "#2E3E50" },
        { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
        { name: "A/B Testing", icon: FlaskConical, color: "#9C27B0" },
      ],
    },
    {
      category: "Product Management & Strategy",
      skills: [
        { name: "AI Product Lifecycle", icon: RefreshCw, color: "#009688" },
        { name: "PRDs & Scoping", icon: FileText, color: "#607D8B" },
        { name: "Roadmapping", icon: Map, color: "#FFC107" },
        { name: "User Journey", icon: Users, color: "#E91E63" },
        { name: "Metrics (KPIs)", icon: Target, color: "#F44336" },
        { name: "GTM Strategy", icon: Rocket, color: "#9C27B0" },
        { name: "Business Case", icon: Briefcase, color: "#795548" },
        { name: "Stakeholder Mgmt", icon: Users, color: "#3F51B5" },
        { name: "Agile/Scrum", icon: RefreshCw, color: "#2196F3" },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iamayuv.inc@gmail.com",
    tel: "+919451133014",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ayuvgr8",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/iamayuv",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iamayuv",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:iamayuv.inc@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Prestige Group",
      href: "https://www.prestigeconstructions.com/",
      badges: [],
      location: "Bengaluru, India",
      title: "Assistant Manager, Digital Transformation (Retail)",
      logoUrl: "/prestige.jpg",
      start: "Sept 2024",
      end: "Present",
      description:
        "• Led the development of PREOSS, a full-stack SaaS platform digitizing leasing, fitouts, bookings, and revenue processes—reducing turnaround time by 75% through workflow automation and custom SAP-integrated APIs\n• Building an LLM-powered Prestige Genie Chatbot for the Customer Support, enabling end-to-end customer engagement from lead capture → project discovery → site-visit scheduling → booking\n• Led the implementation of a CAFM system for mall operations, automating workflows, improving asset tracking, and enhancing overall operational efficiency\n• Delivered high-level analytical dashboards within PREOSS, enabling CXO-level insights into sales funnels and brand performance to drive strategic decision-making\n• Implemented a Social Listening & Sentiment Analysis Tool to monitor brand reputation and customer conversations across social media, enabling marketing teams to track trends, sentiment shifts, campaign performance\n• Built Customer Data Platform (CDP) for the retail vertical, consolidating data from Gift Vouchers, BIK (consumer chatbot), Parking, Wroti (QR ordering), PREOSS, website leads, Parking App, Retail GPT, BigTix, and Rewards—creating a unified customer profile for analytics and targeting\n• Built the RPVETC website (rpvetc.co.in) from scratch using ReactJS + Vite and deployed it on the Omprim server under Prestige infrastructure, owning end-to-end development and production configuration\n• Developed and deployed an internal AI chatbot using Microsoft Copilot Studio for the legal and leasing teams, providing them with instant, on-demand access to contracts, LOIs, and agreements\n• Built a Gift Voucher (GV) Tracker integrated with SAP APIs and C4C, enabling real-time voucher tracking and automated customer record updates",
    },
    {
      company: "boAt Lifestyle",
      badges: [],
      href: "https://www.boat-lifestyle.com/",
      location: "Bengaluru, India",
      title: "Data & Product Analyst / IT Executive",
      logoUrl: "/boat.png",
      start: "June 2022",
      end: "Aug 2024",
      description:
        "• Led nationwide implementation of Bizom DMS and SFA on 175+ partners and 350+ FOS, driving monthly revenue of 1000M INR. Improved secondary data efficiency by over 90% through optimization of DMS.\n• Performed User Acceptance Testing (UAT) for more than 5 critical ETL pipelines and 20+ Tableau dashboards, guaranteeing seamless functionality for 50+ mainline team members and facilitating data-driven decisions at CXO level.\n• Identified and rectified gaps in Bizom MDMs, slashing data discrepancies by 95%. Crafted comprehensive Functional Specification Documents (FSD) for Scheme Implementation Process, Data Warehousing, MDM, and data modeling.\n• Developed a comprehensive Sales Analytics BI Dashboard using tools such as Power BI and Tableau; extracted data via DBeaver to drive a 70% increase in actionable insights for enhanced sales strategies.\n• Specialized in data wrangling and modeling. Created BI dashboards and constructed data pipelines using API calls and Selenium Automation to AWS Redshift, reducing data ingestion time by 90%.\n• Created a trade marketing application for Point of Sale Materials (POSM) deployment using Google App Sheet (Low Code) for Sales Team, resulting in a 50% increase in POSM deployment efficiency and visibility of market.\n• Streamlined SAP integration by developing test scenarios, business logic, and FSDs for modules like SKU Serialization, DMS-Tally connect, Primary Invoices, SKU Master, Prices Interfaces, and Customer creation.\n• Executed test plans for seamless DMS reports and MDMs, Formulated and built Serialization logic, enhancing operational efficiency by 10% and achieving significant cost savings.",
    },
  ],
  education: [
    {
      school: "University of Lucknow",
      href: "https://www.lkouniv.ac.in",
      degree: "B.Tech Computer Science",
      logoUrl: "/lucknow-university.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Prestige Genie — LLM Customer Support Chatbot",
      href: "https://www.prestigeconstructions.com/",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "LLM-powered chatbot automating customer support workflows using Python, LangChain, RAG architecture, and vector databases. Integrated analytics dashboard tracks conversation patterns. Reduced support response time by 60% while handling 500+ monthly queries.",
      technologies: [
        "OpenAI",
        "LangChain",
        "RAG",
        "Langfuse",
        "FastAPI",
        "ReactJS",
        "Vector Databases",
        "Python",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.prestigeconstructions.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
      logoUrl: "/prestige.jpg",
    },
    {
      title: "PREOSS — Retail SaaS (Leasing & Operations)",
      href: "#",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Automated lease management system built with React, Node.js, and SAP API integration via PREOSS SaaS platform. Streamlined retail leasing workflows from inquiry to contract execution. Cut lease processing time from 14 days to 3 days.",
      technologies: [
        "ReactJS",
        "Node.js",
        "PostgreSQL",
        "SAP Integration",
        "REST APIs",
        "Webhooks",
        "AWS",
        "Docker",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/prestige.jpg",
    },
    {
      title: "Sales & DMS Automation (boAt)",
      href: "https://www.boat-lifestyle.com/",
      dates: "June 2022 - Aug 2024",
      active: true,
      description:
        "Led nationwide Bizom DMS + SFA rollouts across 175+ partners, built ETL/data pipelines to AWS Redshift, and created Power BI/Tableau dashboards that boosted actionable insights and cut data ingestion time by ~90%.",
      technologies: [
        "Python",
        "SQL",
        "AWS Redshift",
        "ETL Pipelines",
        "Power BI",
        "Tableau",
        "Pandas",
        "NumPy",
        "Bizom DMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.boat-lifestyle.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
      logoUrl: "/boat.png",
    },
    {
      title: "PCPA Website & Booking Automation",
      href: "#",
      dates: "Sept 2024 - Dec 2024",
      active: true,
      description:
        "Dynamic membership platform featuring REST API integration, BigTix event ticketing system, and CMS-driven content management using WordPress and custom PHP modules. Enabled seamless event registration and member engagement, increasing event sign-ups by 45%.",
      technologies: [
        "ReactJS",
        "Vite",
        "REST APIs",
        "BigTix Integration",
        "Automation Pipelines",
        "Git/GitHub",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/prestige.jpg",
    },
    {
      title: "Serialization Interface DMS and SFA",
      href: "#",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Designed core logic and business case for integrating serialization into DMS, improving distributor inventory tracking enabling seamless SAP data integration through API, enhancing traceability and data accuracy by 95%.",
      technologies: [
        "SaaS",
        "Business Case Development",
        "Project Management",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/boat.png",
    },
    {
      title: "Youtube Data Analysis- Data Engineering",
      href: "#",
      dates: "May 2024",
      active: true,
      description:
        "Developed a high-availability data ingestion system on AWS, managed ETL pipelines with AWS Glue, utilized AWS Lambda and Athena for serverless processing, and created real-time dashboards with Amazon QuickSight.",
      technologies: [
        "Python",
        "Kaggle",
        "AWS-S3",
        "Glue",
        "Lambda",
        "ETL",
        "Analytics",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/me.jpg",
    },
    {
      title: "Web Scraping using Selenium and Python",
      href: "#",
      dates: "June 2024",
      active: true,
      description:
        "Engineered a Selenium-based web scraper in Python that extracted product details for the top 100 items on Nykaa, capturing key metrics like product name, price, review score, and review count to facilitate data analysis.",
      technologies: [
        "Python",
        "Selenium",
        "Pandas",
        "PowerBI",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/me.jpg",
    },
    {
      title: "Primary Order Interface– Supply Chain",
      href: "#",
      dates: "Jan 2024 - May 2024",
      active: true,
      description:
        "Deployed this by enabling direct DMS order placement, automating SAP sales order generation, improving order accuracy by 65%, reducing processing time by 50%, enhancing transparency with real-time tracking and an approval workflow. Designed a consolidated reporting feature for streamlined access to order details, increasing operational efficiency.",
      technologies: [
        "Supply Chain Management",
        "Product Knowledge",
        "Testing",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/boat.png",
    },
    {
      title: "SAP to DMS Integration for boAt",
      href: "#",
      dates: "March 2023 - Aug 2023",
      active: true,
      description:
        "Spearheaded the integration of SAP with DMS, automating processes for primary sales, SKU master, pricing uploads, and inventory management; achieved an 80% improvement in data accuracy and cut processing time by 95%.",
      technologies: [
        "SaaS",
        "Business Case Development",
        "Data Integration",
        "MDM",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/boat.png",
    },
    {
      title: "Development of MDM Modules for DMS",
      href: "#",
      dates: "Oct 2022 - March 2023",
      active: true,
      description:
        "Constructed an MDM module for Bizom’s DMS, enabling retroactive uploads of 700,000+ sales entries and schemes for boAt distributors nationwide, boosting satisfaction by 80% and cutting reconciliation time by 70%. Resolved backdate and bulk upload issues, improving sales and transparency through effective scheme capture.",
      technologies: [
        "Product Development",
        "Project Management",
        "UAT",
      ],
      links: [],
      image: "",
      video: "",
      logoUrl: "/boat.png",
    },
  ],
  hackathons: [],
} as const;
