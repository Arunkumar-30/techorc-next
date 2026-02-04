export interface Service {
    title: string;
    description: string;
    keywords: string[];
    heroTitle: string;
    heroDescription: string;
    mainTitle: string;
    mainDescription: string;
    features: { title: string; description: string }[];
}

export const servicesData: Record<string, Service> = {
    "web-application-development": {
        title: "Web Application Development Company in India | Techorc",
        description: "Techorc provides top-notch web application development services in India, delivering secure, scalable, and high-performance web solutions for businesses of all sizes.",
        keywords: ["Web App Development India", "Custom Web Development", "Scalable Web Architecture", "Enterprise Web Solutions", "Full-stack Web Development"],
        heroTitle: "Web Application Development in India",
        heroDescription: "We build secure, scalable, and high-performance web applications using modern technologies to support enterprise workflows.",
        mainTitle: "Web Application Development Services in India",
        mainDescription: "Techorc delivers comprehensive web application development services in India, designing responsive, scalable, and secure web solutions that enhance business performance and digital growth.",
        features: [
            { title: "Responsive Web Applications", description: "Designing web applications that work seamlessly across all devices and screen sizes." },
            { title: "Scalable Architecture", description: "Building systems that grow with your business and handle high traffic efficiently." },
            { title: "API & Third-Party Integrations", description: "Seamless integration with existing systems, services, and third-party APIs." },
            { title: "Cloud-Ready Solutions", description: "Deploy web applications on the cloud for better performance, security, and reliability." }
        ]
    },

    "custom-software-development": {
        title: "Custom Software Development Company in India | Techorc",
        description: "Techorc is a custom software development company in India offering bespoke software solutions tailored to solve complex business challenges.",
        keywords: ["Custom Software Development India", "Bespoke Software Solutions", "Software Modernization", "Enterprise Software Development", "SaaS Development India"],
        heroTitle: "Custom Software Development Services",
        heroDescription: "We design and develop custom software solutions tailored to solve complex business challenges and drive scalable growth.",
        mainTitle: "Tailored Software Solutions for Your Business",
        mainDescription: "Our custom software development services allow businesses to transform their unique ideas into powerful digital realities.",
        features: [
            { title: "Bespoke Solutions", description: "Custom software designed for your business needs." },
            { title: "Legacy Modernization", description: "Upgrading outdated systems with modern technologies." },
            { title: "Enterprise Software", description: "Large-scale software systems for enterprise operations." },
            { title: "SaaS Development", description: "Scalable SaaS products for startups and enterprises." }
        ]
    },

    "mobile-app-development": {
        title: "Mobile App Development Company in India | Techorc",
        description: "We develop high-quality Android and iOS mobile applications tailored for startups and enterprises in India.",
        keywords: ["Mobile App Development India", "iOS App Development", "Android App Development", "React Native Developers", "Flutter App Development"],
        heroTitle: "Mobile App Development Services",
        heroDescription: "High-quality mobile applications for Android and iOS platforms.",
        mainTitle: "Native & Hybrid Mobile Solutions",
        mainDescription: "Techorc builds engaging mobile apps using native and cross-platform technologies.",
        features: [
            { title: "iOS Development", description: "High-performance apps for Apple devices." },
            { title: "Android Development", description: "Robust Android applications." },
            { title: "Cross-Platform Apps", description: "React Native & Flutter solutions." },
            { title: "UI/UX Design", description: "User-centric design for better engagement." }
        ]
    },

    "web-streaming-solutions": {
        title: "Web Streaming Solutions Company in India | Techorc",
        description: "Techorc delivers scalable web streaming solutions for live and on-demand platforms.",
        keywords: ["Web Streaming India", "Live Streaming Solutions", "OTT Platform Development"],
        heroTitle: "Web Streaming Solutions",
        heroDescription: "High-performance live and on-demand video streaming solutions.",
        mainTitle: "Enterprise Web Streaming Services",
        mainDescription: "We build secure and scalable video streaming platforms.",
        features: [
            { title: "Live Streaming", description: "Low-latency live video solutions." },
            { title: "Video on Demand", description: "Scalable VOD platforms." },
            { title: "Streaming Security", description: "DRM and encrypted content delivery." },
            { title: "Playback Optimization", description: "Smooth streaming across devices." }
        ]
    },

    "digital-transformation-services": {
        title: "Digital Transformation Services Company in India | Techorc",
        description: "Helping businesses modernize through digital transformation.",
        keywords: ["Digital Transformation India", "Business Automation", "Process Digitization"],
        heroTitle: "Digital Transformation Services",
        heroDescription: "Modernizing business processes using digital technologies.",
        mainTitle: "End-to-End Digital Transformation",
        mainDescription: "We help businesses adopt digital-first strategies.",
        features: [
            { title: "Process Automation", description: "Automating manual workflows." },
            { title: "Legacy Modernization", description: "Upgrading legacy systems." },
            { title: "Cloud Adoption", description: "Migrating to cloud platforms." },
            { title: "Digital Strategy", description: "Technology-driven business growth." }
        ]
    },

    "technical-consulting-services": {
        title: "Technical Consulting Services Company in India | Techorc",
        description: "Expert technical consulting for scalable systems.",
        keywords: ["Technical Consulting India", "System Architecture Consulting"],
        heroTitle: "Technical Consulting Services",
        heroDescription: "Expert guidance for technology decisions.",
        mainTitle: "Professional Technical Advisory",
        mainDescription: "We provide hands-on technical consulting services.",
        features: [
            { title: "Architecture Design", description: "Scalable system design." },
            { title: "Technology Selection", description: "Choosing the right tech stack." },
            { title: "Code Audits", description: "Quality and security reviews." },
            { title: "Scalability Planning", description: "Preparing systems for growth." }
        ]
    },

    "business-analysis-services": {
        title: "Business Analysis Services Company in India | Techorc",
        description: "Bridging business needs with technical solutions.",
        keywords: ["Business Analysis India", "Requirement Analysis"],
        heroTitle: "Business Analysis Services",
        heroDescription: "Turning business ideas into technical solutions.",
        mainTitle: "Strategic Business Analysis",
        mainDescription: "We analyze business processes to define clear requirements.",
        features: [
            { title: "Requirement Gathering", description: "Understanding business goals." },
            { title: "Process Mapping", description: "Workflow optimization." },
            { title: "Gap Analysis", description: "Identifying improvement areas." },
            { title: "Documentation", description: "Clear functional documentation." }
        ]
    },

    "infrastructure-management-services": {
        title: "Infrastructure Management Services Company in India | Techorc",
        description: "Reliable IT infrastructure management services.",
        keywords: ["Infrastructure Management India", "IT Infrastructure Services"],
        heroTitle: "Infrastructure Management Services",
        heroDescription: "Secure and stable IT infrastructure solutions.",
        mainTitle: "Managed Infrastructure Services",
        mainDescription: "We manage servers, networks, and cloud environments.",
        features: [
            { title: "Server Management", description: "High availability and uptime." },
            { title: "Network Monitoring", description: "Secure connectivity." },
            { title: "Cloud Infrastructure", description: "Scalable cloud management." },
            { title: "Security Management", description: "Infrastructure protection." }
        ]
    },

    "database-services": {
        title: "Database Services Company in India | Techorc",
        description: "Secure and scalable database management services.",
        keywords: ["Database Services India", "Database Management"],
        heroTitle: "Database Services",
        heroDescription: "Optimized and secure data solutions.",
        mainTitle: "Comprehensive Database Services",
        mainDescription: "We design and manage high-performance databases.",
        features: [
            { title: "Database Design", description: "Optimized data structures." },
            { title: "Data Migration", description: "Secure data transfer." },
            { title: "Performance Tuning", description: "Query optimization." },
            { title: "Backup & Recovery", description: "Data safety solutions." }
        ]
    },

    "networking-services": {
        title: "Networking Services Company in India | Techorc",
        description: "Reliable enterprise networking solutions.",
        keywords: ["Networking Services India", "Network Security"],
        heroTitle: "Networking Services",
        heroDescription: "Secure and scalable networking.",
        mainTitle: "Enterprise Networking Solutions",
        mainDescription: "We design and manage business networks.",
        features: [
            { title: "Network Design", description: "Custom network architecture." },
            { title: "Network Security", description: "Threat protection." },
            { title: "Monitoring", description: "Performance tracking." },
            { title: "Maintenance", description: "Ongoing support." }
        ]
    },

    "ecommerce-solutions": {
        title: "E-commerce Solutions Company in India | Techorc",
        description: "Custom e-commerce development services.",
        keywords: ["Ecommerce Development India", "Online Store Development"],
        heroTitle: "E-commerce Solutions",
        heroDescription: "Scalable online stores for businesses.",
        mainTitle: "Custom E-commerce Development",
        mainDescription: "We build secure and high-performance e-commerce platforms.",
        features: [
            { title: "Custom Stores", description: "Tailored e-commerce platforms." },
            { title: "Payment Integration", description: "Secure checkout systems." },
            { title: "Inventory Management", description: "Product & order control." },
            { title: "Scalability", description: "Growth-ready architecture." }
        ]
    },
    "cloud-integration-services": {
        title: "Cloud Integration Services Company in India | Techorc",
        description: "Techorc helps businesses migrate, integrate, and optimize applications using secure cloud infrastructure solutions.",
        keywords: ["Cloud Integration Services India", "AWS Migration", "Azure Cloud Services", "DevOps Automation"],
        heroTitle: "Cloud Integration Services",
        heroDescription: "Secure, scalable, and efficient cloud integration solutions.",
        mainTitle: "Secure Cloud Integration & Migration",
        mainDescription: "We help businesses leverage cloud platforms like AWS, Azure, and Google Cloud to improve scalability, security, and performance.",
        features: [
            { title: "Cloud Migration", description: "Seamless migration from on-premise to cloud environments." },
            { title: "Cloud Native Development", description: "Applications built specifically for cloud platforms." },
            { title: "DevOps Automation", description: "CI/CD pipelines for faster and reliable deployments." },
            { title: "Cloud Security", description: "Securing cloud infrastructure and applications." }
        ]
    }, "ai-ml-development": {
        title: "AI & ML Development Company in India | Techorc",
        description: "Techorc delivers AI, machine learning, and data-driven solutions to automate and optimize business operations.",
        keywords: ["AI ML Development India", "Machine Learning Services", "Predictive Analytics", "Data Engineering"],
        heroTitle: "AI, ML & Data Solutions",
        heroDescription: "Intelligent automation powered by AI and machine learning.",
        mainTitle: "AI & Data-Driven Business Solutions",
        mainDescription: "We build AI-powered systems that help businesses gain insights, automate workflows, and make data-driven decisions.",
        features: [
            { title: "Predictive Analytics", description: "Forecast trends using data-driven models." },
            { title: "Machine Learning Models", description: "Custom ML models tailored to business needs." },
            { title: "Natural Language Processing", description: "Chatbots and text analysis solutions." },
            { title: "Data Engineering", description: "Scalable data pipelines and analytics systems." }
        ]
    },
    "it-consulting-services": {
        title: "IT Consulting Services Company in India | Techorc",
        description: "Techorc provides strategic IT consulting services to help businesses achieve digital growth.",
        keywords: ["IT Consulting Services India", "Technology Consulting", "Digital Transformation Consulting"],
        heroTitle: "IT Consulting Services",
        heroDescription: "Strategic IT guidance for modern businesses.",
        mainTitle: "Professional IT Consulting Services",
        mainDescription: "We help organizations plan, implement, and optimize technology solutions aligned with business goals.",
        features: [
            { title: "Technology Strategy", description: "Aligning IT strategy with business objectives." },
            { title: "Software Architecture", description: "Designing scalable and secure systems." },
            { title: "Digital Transformation", description: "Modernizing IT processes and platforms." },
            { title: "Security Consulting", description: "Improving IT security and compliance." }
        ]
    }


};


export type ServiceSlug = keyof typeof servicesData;
