import ServiceDetailPageClient from "./ServiceDetailPageClient";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" }
  ];
}

export default function ServiceDetailPage({ params }) {
  return <ServiceDetailPageClient params={params} />;
}
