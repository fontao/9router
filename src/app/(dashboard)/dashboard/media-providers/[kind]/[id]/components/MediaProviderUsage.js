"use client";

export default function MediaProviderUsage({
  kind,
  id,
  isCustom,
  customAlias,
  hasGenericExample,
  EmbeddingExampleCard,
  TtsExampleCard,
  SttExampleCard,
  GenericExampleCard,
}) {
  return (
    <>
      {kind === "embedding" && (
        <EmbeddingExampleCard providerId={id} customAlias={customAlias} />
      )}
      {kind === "tts" && <TtsExampleCard providerId={id} />}
      {kind === "stt" && !isCustom && <SttExampleCard providerId={id} />}
      {!isCustom && hasGenericExample && <GenericExampleCard providerId={id} kind={kind} />}
    </>
  );
}
