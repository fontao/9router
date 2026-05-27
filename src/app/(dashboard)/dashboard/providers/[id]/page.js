import ProviderPageClient from "./ProviderPageClient";

export default function ProviderDetailPage({ params }) {
  return <ProviderPageClient providerId={params.id} />;
}
