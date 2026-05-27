import MediaProviderPageClient from "./MediaProviderPageClient";

export default function MediaProviderDetailPage({ params }) {
  return <MediaProviderPageClient kind={params.kind} id={params.id} />;
}
