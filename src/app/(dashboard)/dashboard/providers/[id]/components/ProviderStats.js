"use client";

export default function ProviderStats({
  oneByOneSummary,
  oneByOneRunning,
  oneByOneCurrentConnectionId,
  connections,
}) {
  if (!oneByOneSummary) return null;

  return (
    <div className="mb-4 rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2 text-xs text-text-muted dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex flex-wrap items-center gap-3">
        <span>Total: {oneByOneSummary.total}</span>
        <span>Completed: {oneByOneSummary.completed}</span>
        <span>Passed: {oneByOneSummary.passed}</span>
        <span>Failed: {oneByOneSummary.failed}</span>
        {oneByOneSummary.stopped && (
          <span className="text-amber-600 dark:text-amber-400">Stopped</span>
        )}
        {oneByOneRunning && oneByOneCurrentConnectionId && (
          <span>Running: {connections.find((conn) => conn.id === oneByOneCurrentConnectionId)?.name || oneByOneCurrentConnectionId}</span>
        )}
      </div>
    </div>
  );
}
