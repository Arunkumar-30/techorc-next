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
    "Coimbatore (Head Office)",
    "Bangalore – Remote Services",
    "Chennai – Remote Services",
    "Hyderabad – Remote Services",
    "Mumbai – Remote Services",
    "Delhi NCR – Remote Services",
    "Pune – Remote Services",
    "Serving clients across India",
    "Serving global clients"
];



export const servicesData: Record<string, Service> = {
    "web-application-development": {
        title: "Web Application Development Company in India | Techorc",
        description:
            "Techorc provides professional web application development services in India. Based in Coimbatore, Tamil Nadu, we build secure, scalable, and high-performance web applications for startups and enterprises. Our remote-first development approach enables us to serve clients across India while delivering reliable, user-focused, and future-ready digital platforms.",
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
                question: "What types of web applications does Techorc develop?",
                answer:
                    "Techorc develops a wide range of web applications including custom business applications, SaaS platforms, enterprise portals, dashboards, CRM systems, and scalable web platforms tailored to specific business needs."
            },
            {
                question: "Which technologies do you use for web application development?",
                answer:
                    "We use modern web technologies such as React, Next.js, Node.js, Express, REST APIs, cloud platforms, and secure databases to build fast, scalable, and future-ready web applications."
            },
            {
                question: "Are your web applications scalable and secure?",
                answer:
                    "Yes, all our web applications are built with scalable architecture and enterprise-grade security practices, including secure authentication, data protection, and cloud-ready deployments."
            },
            {
                question: "Do you build web applications for startups and enterprises?",
                answer:
                    "Absolutely. We build flexible web applications for startups looking to scale quickly and robust enterprise-grade platforms for large organizations requiring high performance and reliability."
            },
            {
                question: "Do you provide ongoing support and maintenance after development?",
                answer:
                    "Yes, Techorc offers continuous support, performance optimization, security updates, and feature enhancements to ensure your web application runs smoothly after launch."
            },
            {
                question: "How long does it take to develop a web application?",
                answer:
                    "The development timeline depends on project complexity, features, and integrations. Typically, a web application can take anywhere from a few weeks to a few months after requirement analysis."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,
        imageSrc: "/images/web-application.svg",
        color: "#0cf2f2",
        shortDescription:
            "We build secure, scalable, and high-performance web applications using modern technologies to support enterprise workflows."
    },


    "custom-software-development": {
        title: "Custom Software Development Company in India | Techorc",
        description: "Techorc offers custom software development services in India, building reliable and scalable software solutions for diverse industries. From our base in Coimbatore, Tamil Nadu, we serve clients across India with secure, business-focused, and future-ready applications.",
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
        faqs: [
            {
                question: "What is custom software development?",
                answer:
                    "Custom software development involves building software solutions specifically designed to meet unique business requirements, workflows, and operational goals."
            },
            {
                question: "What types of custom software does Techorc develop?",
                answer:
                    "We develop enterprise software, SaaS platforms, internal business tools, workflow automation systems, and modernized legacy applications."
            },
            {
                question: "Is custom software suitable for startups?",
                answer:
                    "Yes, custom software is ideal for startups that require scalable, flexible solutions tailored to their business model and growth plans."
            },
            {
                question: "Do you modernize existing legacy software?",
                answer:
                    "Absolutely. We modernize outdated systems using modern architectures, cloud platforms, and secure technologies."
            },
            {
                question: "Do you provide post-development support?",
                answer:
                    "Yes, we offer ongoing maintenance, upgrades, performance optimization, and security updates after deployment."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/custom.svg",
        color: "#9d12bb",
        shortDescription: "We design and develop custom software solutions tailored to solve complex business challenges and drive scalable growth."
    },

    "mobile-app-development": {
        title: "Mobile App Development Company in India | Techorc",
        description: "Techorc offers custom mobile application development services in India, helping businesses launch scalable and user-friendly mobile apps. Based in Coimbatore, Tamil Nadu, we serve clients across India with secure, high-performance Android and iOS solutions built for long-term growth.",
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
        faqs: [
            {
                question: "Which platforms do you develop mobile apps for?",
                answer:
                    "We develop mobile applications for Android, iOS, and cross-platform frameworks such as React Native and Flutter."
            },
            {
                question: "Do you build native or cross-platform apps?",
                answer:
                    "We build both native and cross-platform mobile apps depending on performance, scalability, and budget requirements."
            },
            {
                question: "Can you handle UI/UX design for mobile apps?",
                answer:
                    "Yes, our team provides complete UI/UX design focused on usability, performance, and user engagement."
            },
            {
                question: "Are your mobile apps secure and scalable?",
                answer:
                    "All our mobile applications follow secure coding practices and are built to scale with growing user bases."
            },
            {
                question: "Do you provide app maintenance after launch?",
                answer:
                    "Yes, we offer ongoing app support, performance monitoring, updates, and feature enhancements."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/mobile-application.svg",
        color: "#ff3678",
        shortDescription: "We develop high-quality Android and iOS mobile applications tailored for startups and enterprises."
    },

    "web-streaming-solutions": {
        title: "Web Streaming Solutions Company in India | Techorc",
        description: "Techorc delivers scalable web streaming solutions in India for high-traffic live and on-demand platforms. We specialize in building secure OTT platforms and video streaming architectures in Coimbatore, Bangalore, Chennai, and Mumbai, ensuring seamless playback experiences for global audiences.",
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
        faqs: [
            {
                question: "What types of streaming solutions do you build?",
                answer:
                    "We build live streaming platforms, video-on-demand (VOD) systems, and OTT streaming solutions."
            },
            {
                question: "Do you support high-traffic streaming platforms?",
                answer:
                    "Yes, our streaming solutions are designed to handle high traffic with low latency and smooth playback."
            },
            {
                question: "Is DRM and content security included?",
                answer:
                    "Yes, we implement DRM, encryption, and secure content delivery to protect digital media."
            },
            {
                question: "Do your streaming platforms support multiple devices?",
                answer:
                    "Our solutions support mobile, desktop, smart TVs, and multiple browsers."
            },
            {
                question: "Can streaming platforms scale globally?",
                answer:
                    "Yes, we build cloud-based streaming architectures that scale globally."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/streaming.svg",
        color: "#ff6b35",
        shortDescription: "High-performance live and on-demand video streaming solutions for modern platforms."
    },

    "digital-transformation-services": {
        title: "Digital Transformation Services Company in India | Techorc",
        description: "Techorc provides digital transformation services in India, helping businesses modernize processes, systems, and customer experiences. Based in Coimbatore, Tamil Nadu, we support companies across India with technology-driven strategies that improve efficiency and accelerate growth.",
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
        faqs: [
            {
                question: "What is digital transformation?",
                answer:
                    "Digital transformation involves using modern technologies to improve business processes, efficiency, and customer experience."
            },
            {
                question: "Which industries benefit from digital transformation?",
                answer:
                    "Industries such as manufacturing, retail, healthcare, finance, and IT benefit significantly from digital transformation."
            },
            {
                question: "Do you automate business processes?",
                answer:
                    "Yes, we automate workflows using cloud platforms, analytics, and intelligent systems."
            },
            {
                question: "Can you modernize legacy systems?",
                answer:
                    "Absolutely. We upgrade legacy systems into scalable, cloud-ready digital platforms."
            },
            {
                question: "Is digital transformation suitable for SMEs?",
                answer:
                    "Yes, digital transformation helps SMEs reduce costs and improve operational efficiency."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/digital.svg",
        color: "#4ecdc4",
        shortDescription: "Modernizing business processes using digital technologies and automation."
    },

    "technical-consulting-services": {
        title: "Technical Consulting Services Company in India | Techorc",
        description: "Techorc provides technical consulting services in India, helping businesses make informed technology decisions. Based in Coimbatore, Tamil Nadu, our experts work with clients across India to optimize architecture, performance, and digital strategy.",
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
        faqs: [
            {
                question: "What does technical consulting include?",
                answer:
                    "Technical consulting includes architecture design, technology selection, system audits, and scalability planning."
            },
            {
                question: "Do you help with technology stack selection?",
                answer:
                    "Yes, we help businesses choose the right technology stack aligned with their goals."
            },
            {
                question: "Can you audit existing systems?",
                answer:
                    "We conduct detailed code, security, and infrastructure audits."
            },
            {
                question: "Is technical consulting useful for startups?",
                answer:
                    "Yes, it helps startups avoid technical debt and scale efficiently."
            },
            {
                question: "Do you provide cloud consulting?",
                answer:
                    "Yes, we advise on cloud architecture, optimization, and security."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/technical.svg",
        color: "#49c0aaff",
        shortDescription: "Expert guidance for technology decisions and scalable system architecture."
    },

    "business-analysis-services": {
        title: "Business Analysis Services Company in India | Techorc",
        description: "Techorc delivers business analysis services in India, helping organizations identify gaps, optimize workflows, and improve decision-making. Operating from Coimbatore, Tamil Nadu, we serve clients across India with data-driven insights and strategic planning support.",
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
        faqs: [
            {
                question: "What is business analysis in software development?",
                answer:
                    "Business analysis bridges the gap between business needs and technical solutions."
            },
            {
                question: "Do you gather and document requirements?",
                answer:
                    "Yes, we perform requirement gathering, documentation, and stakeholder analysis."
            },
            {
                question: "How does business analysis reduce project risk?",
                answer:
                    "Clear requirements minimize rework, delays, and development risks."
            },
            {
                question: "Do you create user stories and workflows?",
                answer:
                    "Yes, we create detailed user stories, workflows, and functional documents."
            },
            {
                question: "Is business analysis useful for large projects?",
                answer:
                    "It is essential for large and complex projects to ensure clarity and success."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/analysis.svg",
        color: "#b84444ff",
        shortDescription: "Turning business ideas into technical solutions through strategic analysis."
    },

    "infrastructure-management-services": {
        title: "Infrastructure Management Services Company in India | Techorc",
        description: "Techorc delivers infrastructure management services in India, ensuring system stability, security, and performance. Based in Coimbatore, Tamil Nadu, we serve clients across India through proactive monitoring and reliable IT support.",
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
        faqs: [
            {
                question: "What does infrastructure management include?",
                answer:
                    "Infrastructure management includes server, network, cloud, and security monitoring."
            },
            {
                question: "Do you provide 24/7 infrastructure monitoring?",
                answer:
                    "Yes, we provide continuous monitoring and proactive issue resolution."
            },
            {
                question: "Can you manage cloud infrastructure?",
                answer:
                    "We manage AWS, Azure, and other cloud platforms."
            },
            {
                question: "Is disaster recovery included?",
                answer:
                    "Yes, we implement backup and disaster recovery solutions."
            },
            {
                question: "Does this improve system uptime?",
                answer:
                    "Yes, our services maximize uptime and system reliability."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/infra.svg",
        color: "#6848b3ff",
        shortDescription: "Secure and stable IT infrastructure solutions with high availability."
    },

    "database-services": {
        title: "Database Services Company in India | Techorc",
        description: "Techorc provides database design and management services in India, ensuring data security, performance, and reliability. Based in Coimbatore, Tamil Nadu, we serve clients across India with optimized and scalable database solutions.",
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
        faqs: [
            {
                question: "What database services does Techorc offer?",
                answer:
                    "We offer database design, migration, performance tuning, backup, and security services."
            },
            {
                question: "Do you support SQL and NoSQL databases?",
                answer:
                    "Yes, we work with MySQL, PostgreSQL, MongoDB, and other databases."
            },
            {
                question: "Can you migrate existing databases?",
                answer:
                    "We perform secure and seamless database migrations with minimal downtime."
            },
            {
                question: "Do you optimize database performance?",
                answer:
                    "Yes, we improve query performance, indexing, and database scalability."
            },
            {
                question: "Is data security ensured?",
                answer:
                    "We implement encryption, access control, and secure backup strategies."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/database.svg",
        color: "#b94077ff",
        shortDescription: "Optimized and secure database solutions with high-performance management."
    },

    "networking-services": {
        title: "Networking Services Company in India | Techorc",
        description: "Techorc delivers networking solutions in India, helping businesses maintain secure and efficient connectivity. From Coimbatore, Tamil Nadu, we serve clients across India with reliable, scalable, and well-managed network infrastructure.",
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
        faqs: [
            {
                question: "What networking services do you provide?",
                answer:
                    "We provide network design, security, monitoring, and maintenance services."
            },
            {
                question: "Do you implement secure network infrastructures?",
                answer:
                    "Yes, we build secure and scalable enterprise networks."
            },
            {
                question: "Can you manage WAN and LAN networks?",
                answer:
                    "We manage LAN, WAN, and SD-WAN environments."
            },
            {
                question: "Do you offer ongoing network monitoring?",
                answer:
                    "Yes, we monitor performance and security continuously."
            },
            {
                question: "Is networking support available across India?",
                answer:
                    "Yes, we support businesses across India and globally."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/networking.svg",
        color: "#41bd8fff",
        shortDescription: "Secure and scalable enterprise networking solutions with threat protection."
    },

    "ecommerce-solutions": {
        title: "E-commerce Solutions Company in India | Techorc",
        description: "Techorc offers e-commerce development services in India, building secure and scalable online stores for growing businesses. Based in Coimbatore, Tamil Nadu, we serve clients across India with conversion-focused and performance-driven e-commerce platforms.",
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
        faqs: [
            {
                question: "What type of e-commerce platforms do you build?",
                answer:
                    "We build custom e-commerce platforms, B2B, B2C, and marketplace solutions."
            },
            {
                question: "Do you integrate payment gateways?",
                answer:
                    "Yes, we integrate secure payment gateways and checkout systems."
            },
            {
                question: "Can your e-commerce platforms scale?",
                answer:
                    "Our platforms are built to handle high traffic and large product catalogs."
            },
            {
                question: "Do you integrate inventory management?",
                answer:
                    "Yes, we integrate inventory, order, and CRM systems."
            },
            {
                question: "Is security included?",
                answer:
                    "Yes, we follow best practices for data protection and transaction security."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/ecommerce.svg",
        color: "#b66d3dff",
        shortDescription: "Scalable online stores with secure payment integration and inventory management."
    },
    "cloud-integration-services": {
        title: "Cloud Integration Services Company in India | Techorc",
        description: "Techorc provides cloud integration services in India, helping businesses migrate, manage, and optimize cloud infrastructure. From Coimbatore, Tamil Nadu, we support clients across India with secure, scalable, and performance-focused cloud solutions.",
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
        faqs: [
            {
                question: "What cloud integration services do you offer?",
                answer:
                    "We provide cloud migration, cloud-native development, DevOps automation, and cloud security services."
            },
            {
                question: "Do you help migrate from on-premise to cloud?",
                answer:
                    "Yes, we perform seamless and secure cloud migrations with minimal downtime."
            },
            {
                question: "Do you build cloud-native applications?",
                answer:
                    "Yes, we build applications optimized for cloud platforms like AWS and Azure."
            },
            {
                question: "Is DevOps automation included?",
                answer:
                    "Yes, we implement CI/CD pipelines for faster and reliable deployments."
            },
            {
                question: "Do you provide cloud security services?",
                answer:
                    "Yes, we secure cloud infrastructure, applications, and data."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/cloud.svg",
        color: "#00a8f2",
        shortDescription: "We help businesses migrate, integrate, and optimize applications using secure cloud infrastructure solutions."
    },
    "ai-ml-development": {
        title: "AI & ML Development Company in India | Techorc",
        description: "Techorc offers AI, machine learning, and data solutions in India, enabling businesses to leverage intelligent automation and analytics. Based in Coimbatore, Tamil Nadu, we serve organizations across India with scalable, secure, and data-driven solutions.",
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
        faqs: [
            {
                question: "What AI and ML services do you offer?",
                answer:
                    "We offer predictive analytics, machine learning models, NLP, and data engineering services."
            },
            {
                question: "Do you build custom machine learning models?",
                answer:
                    "Yes, we build custom ML models tailored to specific business needs."
            },
            {
                question: "Do you provide NLP solutions like chatbots?",
                answer:
                    "Yes, we develop chatbots and text analysis solutions using NLP."
            },
            {
                question: "Do you handle data engineering and pipelines?",
                answer:
                    "Yes, we build scalable data pipelines and analytics systems."
            },
            {
                question: "Can AI/ML improve business efficiency?",
                answer:
                    "Yes, AI/ML automates workflows and improves decision-making."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/ai.svg",
        color: "#12bb69",
        shortDescription: "Automate business operations using AI, machine learning, and data-driven software solutions."
    },
    "it-consulting-services": {
        title: "IT Consulting Services Company in India | Techorc",
        description: "Techorc offers IT consulting services in India, helping businesses align technology with strategic goals. Operating from Coimbatore, Tamil Nadu, we support organizations across India with expert guidance and scalable IT solutions.",
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
        faqs: [
            {
                question: "What is IT consulting?",
                answer:
                    "IT consulting helps businesses align technology strategy with business goals."
            },
            {
                question: "Do you provide digital transformation consulting?",
                answer:
                    "Yes, we help businesses modernize IT processes and platforms."
            },
            {
                question: "Do you design software architecture?",
                answer:
                    "Yes, we design scalable and secure software architectures."
            },
            {
                question: "Do you offer security consulting?",
                answer:
                    "Yes, we improve IT security and compliance for businesses."
            },
            {
                question: "Is IT consulting available in Bangalore and Mumbai?",
                answer:
                    "Yes, we provide IT consulting services in Bangalore, Mumbai, and across India."
            }
        ]
        ,
        serviceAreas: defaultServiceAreas,

        imageSrc: "/images/it.svg",
        color: "#f2890c",
        shortDescription: "Our IT consulting services help businesses choose the right technologies for long-term digital growth."
    }


};


export type ServiceSlug = keyof typeof servicesData;
