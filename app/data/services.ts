export interface Service {
    title: string;
    description: string;
    keywords: string[];
    heroTitle: string;
    heroDescription: string;
    mainTitle: string;
    mainDescription: string;
    features: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    serviceAreas: string[];
    imageSrc: string;
    color: string;
    shortDescription: string;
}
const defaultServiceAreas = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Mumbai",
    "Delhi NCR",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Serving clients across India",
    "Serving global clients"
];
const generateFAQs = (serviceName: string) => [
    {
        question: `What ${serviceName} solutions does Techorc offer?`,
        answer: `Techorc provides comprehensive ${serviceName.toLowerCase()} solutions tailored to your specific business requirements. We focus on delivering scalable, secure, and high-performance systems that drive digital transformation and operational efficiency.`
    },
    {
        question: `Is your ${serviceName} suitable for startups and enterprises?`,
        answer: `Yes, our ${serviceName.toLowerCase()} services are highly adaptable. We build customized solutions that support the rapid growth of startups while ensuring the robust compliance, security, and scalability needed by large enterprises.`
    },
    {
        question: `Does Techorc serve clients for ${serviceName} outside India?`,
        answer: `Absolutely. While we have a strong presence in India (Bangalore, Mumbai, etc.), we serve global clients with remote-first teams, delivering world-class ${serviceName.toLowerCase()} adhering to international standards.`
    },
    {
        question: `How do you ensure quality in ${serviceName}?`,
        answer: `We follow rigorous quality assurance protocols, secure coding standards, and agile methodologies. Our expert team conducts continuous testing and code audits to ensure your ${serviceName.toLowerCase()} project is reliable and secure.`
    },
    {
        question: `How can I get started with Techorc's ${serviceName}?`,
        answer: `Simply contact our team to discuss your project goals. We will conduct an initial analysis and provide a tailored roadmap for your ${serviceName.toLowerCase()} success.`
    }
];


export const servicesData: Record<string, Service> = {
    "web-application-development": {
        title: "Web Application Development Company in India | Techorc",
        description:
            "Techorc provides professional web application development services in India, helping businesses build secure, scalable, and high-performance digital platforms. Our customized solutions support long-term business growth, ensuring seamless user experiences and enterprise-grade reliability for startups and diverse organizations across Bangalore, Mumbai, and Hyderabad.",
        keywords: [
            "Web App Development India",
            "Custom Web Development",
            "Scalable Web Architecture",
            "Enterprise Web Solutions",
            "Full-stack Web Development"
        ],
        heroTitle: "Web Application Development in India",
        heroDescription:
            "We build secure, scalable, and high-performance web applications using modern technologies to support enterprise workflows, digital innovation, and business growth.",
        mainTitle: "Web Application Development Services in India",
        mainDescription:
            "Techorc delivers end-to-end web application development services in India, focusing on responsive design, highly scalable architecture, and secure cloud deployments. Our expert team builds future-proof web applications that enhance operational efficiency, significantly improve customer engagement, and flexibly support your evolving business requirements across various competitive industries.",
        features: [
            {
                title: "Responsive Web Applications",
                description:
                    "Designing web applications that deliver seamless user experiences across desktops, tablets, and mobile devices."
            },
            {
                title: "Scalable Architecture",
                description:
                    "Building flexible architectures that support business growth and handle increasing traffic efficiently."
            },
            {
                title: "API & Third-Party Integrations",
                description:
                    "Integrating APIs, payment gateways, analytics tools, and enterprise systems seamlessly."
            },
            {
                title: "Cloud-Ready Solutions",
                description:
                    "Deploying applications on modern cloud platforms for improved performance, security, and reliability."
            }
        ],
        faqs: [
            {
                question: "What type of web applications does Techorc develop?",
                answer:
                    "We develop enterprise web applications, SaaS platforms, customer portals, internal business tools, and custom web solutions tailored to specific business needs."
            },
            {
                question: "Are your web applications scalable?",
                answer:
                    "Yes, our applications are built using scalable architecture to support future growth and handle high user traffic efficiently."
            },
            {
                question: "Do you build cloud-ready web applications?",
                answer:
                    "Absolutely. We design cloud-ready web applications that can be deployed on platforms like AWS, Azure, and Google Cloud."
            },
            {
                question: "Can you integrate third-party services?",
                answer:
                    "Yes, we integrate third-party APIs, payment systems, CRMs, analytics tools, and other business platforms."
            },
            {
                question: "Is security included in your development process?",
                answer:
                    "Security is a priority in our development process, and we follow best practices to protect applications and data."
            }
        ],
        serviceAreas: [
            "Bangalore",
            "Chennai",
            "Hyderabad",
            "Mumbai",
            "Delhi NCR",
            "Pune",
            "Serving clients across India and globally"
        ],
        imageSrc: "/images/web-application.svg",
        color: "#0cf2f2",
        shortDescription:
            "We build secure, scalable, and high-performance web applications using modern technologies to support enterprise workflows."
    },


    "custom-software-development": {
        title: "Custom Software Development Company in India | Techorc",
        description: "Techorc is a premier custom software development company in India offering bespoke software solutions specifically tailored to solve your most complex business challenges. We serve clients in Bangalore, Chennai, and Delhi NCR with innovative, scalable, and secure software designed to drive operational excellence.",
        keywords: ["Custom Software Development India", "Bespoke Software Solutions", "Software Modernization", "Enterprise Software Development", "SaaS Development India"],
        heroTitle: "Custom Software Development Services",
        heroDescription: "We design and develop custom software solutions tailored to solve complex business challenges and drive scalable digital growth.",
        mainTitle: "Tailored Software Solutions for Your Business",
        mainDescription: "Our custom software development services enable businesses to transform unique ideas into powerful digital realities using cutting-edge technology. We specialize in modernizing legacy systems and building robust SaaS products from the ground up, ensuring that every solution is perfectly aligned with your strategic business goals and workflow requirements.",
        features: [
            { title: "Bespoke Solutions", description: "Custom software designed for your business needs." },
            { title: "Legacy Modernization", description: "Upgrading outdated systems with modern technologies." },
            { title: "Enterprise Software", description: "Large-scale software systems for enterprise operations." },
            { title: "SaaS Development", description: "Scalable SaaS products for startups and enterprises." }
        ],
        faqs: generateFAQs("Custom Software Development"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/custom.svg",
        color: "#9d12bb",
        shortDescription: "We design and develop custom software solutions tailored to solve complex business challenges and drive scalable growth."
    },

    "mobile-app-development": {
        title: "Mobile App Development Company in India | Techorc",
        description: "We are a top-tier mobile app development company in India, developing high-quality Android and iOS mobile applications tailored for startups and enterprises. Our expert team in Bangalore and Pune builds engaging, user-centric mobile experiences that drive customer retention and business growth.",
        keywords: ["Mobile App Development India", "iOS App Development", "Android App Development", "React Native Developers", "Flutter App Development"],
        heroTitle: "Mobile App Development Services",
        heroDescription: "High-quality mobile applications for Android and iOS platforms.",
        mainTitle: "Native & Hybrid Mobile Solutions",
        mainDescription: "Techorc builds engaging mobile apps using advanced native and cross-platform technologies like React Native and Flutter. We oversee the entire development lifecycle, from initial concept and UI/UX design to final deployment, ensuring your mobile application is scalable, secure, and ready to succeed in a competitive digital marketplace.",
        features: [
            { title: "iOS Development", description: "High-performance apps for Apple devices." },
            { title: "Android Development", description: "Robust Android applications." },
            { title: "Cross-Platform Apps", description: "React Native & Flutter solutions." },
            { title: "UI/UX Design", description: "User-centric design for better engagement." }
        ],
        faqs: generateFAQs("Mobile App Development"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/mobile-application.svg",
        color: "#ff3678",
        shortDescription: "We develop high-quality Android and iOS mobile applications tailored for startups and enterprises."
    },

    "web-streaming-solutions": {
        title: "Web Streaming Solutions Company in India | Techorc",
        description: "Techorc delivers scalable web streaming solutions in India for high-traffic live and on-demand platforms. We specialize in building secure OTT platforms and video streaming architectures in Bangalore, Chennai, and Mumbai, ensuring seamless playback experiences for global audiences.",
        keywords: ["Web Streaming India", "Live Streaming Solutions", "OTT Platform Development"],
        heroTitle: "Web Streaming Solutions",
        heroDescription: "High-performance live and on-demand video streaming solutions.",
        mainTitle: "Enterprise Web Streaming Services",
        mainDescription: "We build secure and scalable video streaming platforms designed for low-latency live broadcasting and massive video-on-demand libraries. Our solutions include advanced DRM protection, adaptive bitrate streaming, and multi-device support, empowering media businesses to deliver premium content reliably to viewers anywhere in the world.",
        features: [
            { title: "Live Streaming", description: "Low-latency live video solutions." },
            { title: "Video on Demand", description: "Scalable VOD platforms." },
            { title: "Streaming Security", description: "DRM and encrypted content delivery." },
            { title: "Playback Optimization", description: "Smooth streaming across devices." }
        ],
        faqs: generateFAQs("Web Streaming Solutions"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/streaming.svg",
        color: "#ff6b35",
        shortDescription: "High-performance live and on-demand video streaming solutions for modern platforms."
    },

    "digital-transformation-services": {
        title: "Digital Transformation Services Company in India | Techorc",
        description: "Transform your business with top-tier digital transformation services in India. We help forward-thinking companies in Mumbai and Hyderabad with end-to-end process automation, legacy system modernization, and cloud adoption to drive operational agility and sustainable growth.",
        keywords: ["Digital Transformation India", "Business Automation", "Process Digitization"],
        heroTitle: "Digital Transformation Services",
        heroDescription: "Modernizing business processes using digital technologies.",
        mainTitle: "End-to-End Digital Transformation",
        mainDescription: "We help businesses adopt digital-first strategies that fundamentally reshape how they operate and deliver value to customers. Our comprehensive approach utilizes data analytics, cloud computing, and automation to streamline workflows, reduce operational costs, and unlock new revenue streams in the digital economy.",
        features: [
            { title: "Process Automation", description: "Automating manual workflows." },
            { title: "Legacy Modernization", description: "Upgrading legacy systems." },
            { title: "Cloud Adoption", description: "Migrating to cloud platforms." },
            { title: "Digital Strategy", description: "Technology-driven business growth." }
        ],
        faqs: generateFAQs("Digital Transformation"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/digital.svg",
        color: "#4ecdc4",
        shortDescription: "Modernizing business processes using digital technologies and automation."
    },

    "technical-consulting-services": {
        title: "Technical Consulting Services Company in India | Techorc",
        description: "Techorc offers expert technical consulting services in India, providing deep strategic guidance for both early-stage startups and established enterprises. We specialize in designing scalable system architectures, selecting the optimal technology stack, and reducing technical debt to ensure your business remains agile and competitive in Bangalore and Chennai.",
        keywords: ["Technical Consulting India", "System Architecture Consulting"],
        heroTitle: "Technical Consulting Services",
        heroDescription: "Expert guidance for technology decisions.",
        mainTitle: "Professional Technical Advisory",
        mainDescription: "We provide hands-on technical consulting services that empower your team to build resilient and high-performance software systems. Our senior consultants work closely with your leadership to conduct thorough code audits, optimize cloud infrastructure, and define a clear, actionable technology roadmap that aligns perfectly with your long-term business objectives.",
        features: [
            { title: "Architecture Design", description: "Scalable system design." },
            { title: "Technology Selection", description: "Choosing the right tech stack." },
            { title: "Code Audits", description: "Quality and security reviews." },
            { title: "Scalability Planning", description: "Preparing systems for growth." }
        ],
        faqs: generateFAQs("Technical Consulting"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/technical.svg",
        color: "#49c0aaff",
        shortDescription: "Expert guidance for technology decisions and scalable system architecture."
    },

    "business-analysis-services": {
        title: "Business Analysis Services Company in India | Techorc",
        description: "Techorc provides comprehensive business analysis services in India, expertly bridging the critical gap between complex business needs and technical solutions. We work directly with stakeholders in Mumbai and Bangalore to gather detailed requirements, optimize processes, and ensure that every software project delivers maximum value and operational efficiency.",
        keywords: ["Business Analysis India", "Requirement Analysis"],
        heroTitle: "Business Analysis Services",
        heroDescription: "Turning business ideas into technical solutions.",
        mainTitle: "Strategic Business Analysis",
        mainDescription: "We analyze business processes to define clear, actionable requirements that minimize development risks and ensure project success. Our certified business analysts conduct in-depth functional analysis, creation of user stories, and detailed process mapping, ensuring that your technical team has a precise blueprint to build solutions that solve real business problems.",
        features: [
            { title: "Requirement Gathering", description: "Understanding business goals." },
            { title: "Process Mapping", description: "Workflow optimization." },
            { title: "Gap Analysis", description: "Identifying improvement areas." },
            { title: "Documentation", description: "Clear functional documentation." }
        ],
        faqs: generateFAQs("Business Analysis"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/analysis.svg",
        color: "#b84444ff",
        shortDescription: "Turning business ideas into technical solutions through strategic analysis."
    },

    "infrastructure-management-services": {
        title: "Infrastructure Management Services Company in India | Techorc",
        description: "Reliable IT infrastructure management services in India designed to ensure secure, stable, and high-performance IT operations. We provide proactive 24/7 monitoring, server maintenance, and cloud optimization for businesses in Hyderabad and Pune, allowing you to focus on your core business while we handle the technical complexities.",
        keywords: ["Infrastructure Management India", "IT Infrastructure Services"],
        heroTitle: "Infrastructure Management Services",
        heroDescription: "Secure and stable IT infrastructure solutions.",
        mainTitle: "Managed Infrastructure Services",
        mainDescription: "We manage servers, networks, and cloud environments with a focus on maximized uptime, robust security, and cost-efficiency. Our comprehensive infrastructure services cover everything from automated patch management to disaster recovery planning, ensuring your mission-critical systems in India and beyond remain resilient and available around the clock.",
        features: [
            { title: "Server Management", description: "High availability and uptime." },
            { title: "Network Monitoring", description: "Secure connectivity." },
            { title: "Cloud Infrastructure", description: "Scalable cloud management." },
            { title: "Security Management", description: "Infrastructure protection." }
        ],
        faqs: generateFAQs("Infrastructure Management"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/infra.svg",
        color: "#6848b3ff",
        shortDescription: "Secure and stable IT infrastructure solutions with high availability."
    },

    "database-services": {
        title: "Database Services Company in India | Techorc",
        description: "Expert database services in India providing secure, high-performance data management solutions for modern applications. We specialize in complex database design, seamless migration, and performance tuning for clients in Bangalore and Mumbai, ensuring your critical data infrastructure is both robust and scalable.",
        keywords: ["Database Services India", "Database Management"],
        heroTitle: "Database Services",
        heroDescription: "Optimized and secure data solutions.",
        mainTitle: "Comprehensive Database Services",
        mainDescription: "We design and manage high-performance databases tailored to your specific application needs, supporting both SQL and NoSQL technologies. Our team handles everything from initial schema design and data security implementation to real-time monitoring and backup strategies, ensuring data integrity and ultra-fast query performance for your business.",
        features: [
            { title: "Database Design", description: "Optimized data structures." },
            { title: "Data Migration", description: "Secure data transfer." },
            { title: "Performance Tuning", description: "Query optimization." },
            { title: "Backup & Recovery", description: "Data safety solutions." }
        ],
        faqs: generateFAQs("Web Application Development"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/database.svg",
        color: "#b94077ff",
        shortDescription: "Optimized and secure database solutions with high-performance management."
    },

    "networking-services": {
        title: "Networking Services Company in India | Techorc",
        description: "Techorc delivers reliable enterprise networking services in India, specializing in the design, implementation, and management of secure network infrastructures. We support businesses in Hyderabad and Bangalore with robust connectivity solutions, ensuring seamless data flow and minimized downtime for critical operations.",
        keywords: ["Networking Services India", "Network Security"],
        heroTitle: "Networking Services",
        heroDescription: "Secure and scalable networking.",
        mainTitle: "Enterprise Networking Solutions",
        mainDescription: "We design and manage secure business networks that are built for speed, reliability, and scale. From local area networks (LAN) to complex wide area networks (WAN) and software-defined networking (SD-WAN), our certified engineers ensure your infrastructure in India is optimized for high availability and protected against evolving cyber threats.",
        features: [
            { title: "Network Design", description: "Custom network architecture." },
            { title: "Network Security", description: "Threat protection." },
            { title: "Monitoring", description: "Performance tracking." },
            { title: "Maintenance", description: "Ongoing support." }
        ],
        faqs: generateFAQs("Networking Services"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/networking.svg",
        color: "#41bd8fff",
        shortDescription: "Secure and scalable enterprise networking solutions with threat protection."
    },

    "ecommerce-solutions": {
        title: "E-commerce Solutions Company in India | Techorc",
        description: "Techorc is a leading e-commerce development company in India, creating custom online stores that drive sales and customer loyalty. We help retailers in Mumbai and Delhi NCR build scalable e-commerce platforms with secure payment gateways, inventory management, and intuitive user interfaces.",
        keywords: ["Ecommerce Development India", "Online Store Development"],
        heroTitle: "E-commerce Solutions",
        heroDescription: "Scalable online stores for businesses.",
        mainTitle: "Custom E-commerce Development",
        mainDescription: "We build secure and high-performance e-commerce shopping experiences tailored to your brand. Our solutions are designed to handle high traffic volume, integrate seamlessly with your ERP/CRM systems, and provide a friction-free checkout process, maximizing conversions and revenue for your online business.",
        features: [
            { title: "Custom Stores", description: "Tailored e-commerce platforms." },
            { title: "Payment Integration", description: "Secure checkout systems." },
            { title: "Inventory Management", description: "Product & order control." },
            { title: "Scalability", description: "Growth-ready architecture." }
        ],
        faqs: generateFAQs("E-commerce Solutions"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/ecommerce.svg",
        color: "#b66d3dff",
        shortDescription: "Scalable online stores with secure payment integration and inventory management."
    },
    "cloud-integration-services": {
        title: "Cloud Integration Services Company in India | Techorc",
        description: "Techorc offers specialized cloud integration services in India, helping businesses seamlessly migrate, integrate, and optimize their applications on AWS, Azure, and Google Cloud. We serve clients in Bangalore and Hyderabad with secure, cloud-native solutions that reduce operational costs and enhance system scalability.",
        keywords: ["Cloud Integration Services India", "AWS Migration", "Azure Cloud Services", "DevOps Automation"],
        heroTitle: "Cloud Integration Services",
        heroDescription: "Secure, scalable, and efficient cloud integration solutions.",
        mainTitle: "Secure Cloud Integration & Migration",
        mainDescription: "As a premier cloud integration company in India, Techorc helps businesses unlock the full potential of the cloud. Our certified architects in Bangalore and Hyderabad design robust migration strategies and implement cloud-native architectures that are secure by design. We focus on continuous optimization and DevOps automation to ensure your infrastructure scales effortlessly with your business demands.",
        features: [
            { title: "Cloud Migration", description: "Seamless migration from on-premise to cloud environments." },
            { title: "Cloud Native Development", description: "Applications built specifically for cloud platforms." },
            { title: "DevOps Automation", description: "CI/CD pipelines for faster and reliable deployments." },
            { title: "Cloud Security", description: "Securing cloud infrastructure and applications." }
        ],
        faqs: generateFAQs("Cloud Integration"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/cloud.svg",
        color: "#00a8f2",
        shortDescription: "We help businesses migrate, integrate, and optimize applications using secure cloud infrastructure solutions."
    },
    "ai-ml-development": {
        title: "AI & ML Development Company in India | Techorc",
        description: "Leading AI & ML development company in India delivering advanced data-driven business solutions. Our experts in Bangalore and Pune specialize in building custom predictive analytics models, intelligent automation systems, and natural language processing tools that transform raw data into actionable business insights.",
        keywords: ["AI ML Development India", "Machine Learning Services", "Predictive Analytics", "Data Engineering"],
        heroTitle: "AI, ML & Data Solutions",
        heroDescription: "Intelligent automation powered by AI and machine learning.",
        mainTitle: "AI & Data-Driven Business Solutions",
        mainDescription: "Techorc is at the forefront of AI and machine learning innovation in India, helping organizations automate complex workflows and make smarter decisions. Our team excels in developing built-to-order AI systems, from recommendation engines to computer vision applications. We leverage scalable data engineering and modern ML frameworks to create solutions that drive efficiency and competitive advantage.",
        features: [
            { title: "Predictive Analytics", description: "Forecast trends using data-driven models." },
            { title: "Machine Learning Models", description: "Custom ML models tailored to business needs." },
            { title: "Natural Language Processing", description: "Chatbots and text analysis solutions." },
            { title: "Data Engineering", description: "Scalable data pipelines and analytics systems." }
        ],
        faqs: generateFAQs("AI & ML Development"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/ai.svg",
        color: "#12bb69",
        shortDescription: "Automate business operations using AI, machine learning, and data-driven software solutions."
    },
    "it-consulting-services": {
        title: "IT Consulting Services Company in India | Techorc",
        description: "Techorc provides professional IT consulting services in India for comprehensive strategic technology planning. We help specific businesses in Bangalore and Mumbai navigate digital transformation, optimize their system architecture, and align their IT infrastructure with long-term commercial goals for sustainable growth.",
        keywords: ["IT Consulting Services India", "Technology Consulting", "Digital Transformation Consulting"],
        heroTitle: "IT Consulting Services",
        heroDescription: "Strategic IT guidance for modern businesses.",
        mainTitle: "Professional IT Consulting Services",
        mainDescription: "Techorc offers expert IT consulting services in India, providing the strategic roadmap necessary for digital success. Our senior consultants partner with your leadership to evaluate current software architectures, identifying inefficiencies and opportunities for innovation. We ensure your technology investments are fully aligned with your business objectives, enhancing operational efficiency and global market competitiveness.",
        features: [
            { title: "Technology Strategy", description: "Aligning IT strategy with business objectives." },
            { title: "Software Architecture", description: "Designing scalable and secure systems." },
            { title: "Digital Transformation", description: "Modernizing IT processes and platforms." },
            { title: "Security Consulting", description: "Improving IT security and compliance." }
        ],
        faqs: generateFAQs("IT Consulting"),
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/it.svg",
        color: "#f2890c",
        shortDescription: "Our IT consulting services help businesses choose the right technologies for long-term digital growth."
    }


};


export type ServiceSlug = keyof typeof servicesData;
