import { redirect } from "next/navigation";
import { servicesData } from "../data/services";

export default function ServicesPage() {
    const firstServiceSlug = Object.keys(servicesData)[0];

    if (firstServiceSlug) {
        redirect(`/${firstServiceSlug}`);
    }

    return null;
}
