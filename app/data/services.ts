export const servicesData = {
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
        mainDescription: "Our custom software development services allow businesses to transform their unique ideas into powerful digital realities. We handle the entire lifecycle from concept to deployment.",
        features: [
            { title: "Bespoke Solutions", description: "Software designed specifically to address your unique business problems and workflows." },
            { title: "Legacy Modernization", description: "Upgrading outdated systems to modern technologies for better performance and security." },
            { title: "Enterprise Software", description: "Large-scale software systems to manage complex business operations effectively." },
            { title: "SaaS Development", description: "Building scalable Software-as-a-Service products for startups and enterprises." }
        ]
    },
    "mobile-app-development": {
        title: "Mobile App Development Company in India | Techorc",
        description: "We develop high-quality Android and iOS mobile applications tailored for startups and enterprises in India.",
        keywords: ["Mobile App Development India", "iOS App Development", "Android App Development", "React Native Developers", "Flutter App Development"],
        heroTitle: "Mobile App Development Services",
        heroDescription: "We develop high-quality Android and iOS mobile applications tailored for startups and enterprises.",
        mainTitle: "Native & Hybrid Mobile Solutions",
        mainDescription: "Techorc builds engaging and user-friendly mobile apps for iOS and Android platforms using native and cross-platform technologies like React Native and Flutter.",
        features: [
            { title: "iOS App Development", description: "Building premium apps for the Apple ecosystem with Swift and Objective-C." },
            { title: "Android App Development", description: "Creating robust apps for the diverse Android market using Kotlin and Java." },
            { title: "Cross-Platform Apps", description: "Cost-effective solutions using React Native or Flutter for both platforms." },
            { title: "UI/UX Design", description: "Focusing on intuitive and beautiful user interfaces for maximum engagement." }
        ]
    },
    "cloud-integration-services": {
        title: "Cloud Integration Services Company in India | Techorc",
        description: "We help businesses migrate, integrate, and optimize applications using secure cloud infrastructure solutions.",
        keywords: ["Cloud Integration Services India", "AWS Migration", "Cloud Native Development", "DevOps Automation", "Serverless Architecture"],
        heroTitle: "Cloud Integration Services",
        heroDescription: "We help businesses migrate, integrate, and optimize applications using secure cloud infrastructure solutions.",
        mainTitle: "Secure Cloud Solutions & Migration",
        mainDescription: "Our cloud specialists help you leverage the power of AWS, Azure, and Google Cloud to improve scalability, reduce costs, and enhance security.",
        features: [
            { title: "Cloud Migration", description: "Moving your on-premise infrastructure to the cloud with minimal downtime." },
            { title: "Cloud Native Development", description: "Building applications specifically designed to run on cloud infrastructure." },
            { title: "DevOps Automation", description: "Streamlining deployment pipelines with CI/CD for faster releases." },
            { title: "Serverless Architecture", description: "Implementing cost-efficient serverless solutions to reduce operational overhead." }
        ]
    },
    "ai-ml-development": {
        title: "AI & ML Development Company in India | Techorc",
        description: "Automate business operations using AI, machine learning, and data-driven software solutions.",
        keywords: ["AI ML Development India", "Machine Learning Services", "Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions"],
        heroTitle: "AI, ML & Data Solutions",
        heroDescription: "Automate business operations using AI, machine learning, and data-driven software solutions.",
        mainTitle: "Intelligent Solutions for Modern Business",
        mainDescription: "We help businesses harness the power of Artificial Intelligence and Machine Learning to automate processes, gain insights, and predict trends.",
        features: [
            { title: "Predictive Analytics", description: "Using data to predict future trends and make informed business decisions." },
            { title: "Natural Language Processing", description: "Building chatbots and analysis tools that understand human language." },
            { title: "Computer Vision", description: "Implementing image and video recognition for automation and security." },
            { title: "Data Engineering", description: "Building robust data pipelines to collect, process, and analyze big data." }
        ]
    },
    "it-consulting-services": {
        title: "IT Consulting Services Company in India | Techorc",
        description: "Our IT consulting services help businesses choose the right technologies for long-term digital growth.",
        keywords: ["IT Consulting Services India", "Technology Strategy", "Digital Transformation Consulting", "Software Architecture Design", "Security Consulting"],
        heroTitle: "IT Consulting Services",
        heroDescription: "Our IT consulting services help businesses choose the right technologies for long-term digital growth.",
        mainTitle: "Strategic Digital Transformation",
        mainDescription: "We provide expert guidance on technology strategy, software architecture, and digital transformation to help your business stay ahead of the curve.",
        features: [
            { title: "Technology Strategy", description: "Aligning your technology roadmap with your business goals." },
            { title: "Software Architecture", description: "Designing robust and scalable system architectures for complex applications." },
            { title: "Digital Transformation", description: "Modernizing your business processes through digital adoption." },
            { title: "Security Consulting", description: "Assessing and improving your software security posture." }
        ]
    }
};

export type ServiceSlug = keyof typeof servicesData;
