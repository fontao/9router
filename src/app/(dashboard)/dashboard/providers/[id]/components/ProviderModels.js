"use client";

import { Card, Button } from "@/shared/components";

export default function ProviderModels({
  isCompatible,
  models,
  kiloFreeModels,
  disabledModelIds,
  onEnableAll,
  onDisableAll,
  modelsTestError,
  renderModelsSection,
}) {
  return (
    <Card>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold">{"Available Models"}</h2>
        {!isCompatible && (() => {
          const allIds = [
            ...models,
            ...kiloFreeModels.filter((fm) => !models.some((m) => m.id === fm.id)),
          ].filter((m) => !m.type || m.type === "llm").map((m) => m.id);
          const activeIds = allIds.filter((id) => !disabledModelIds.includes(id));
          return (
            <div className="flex gap-2">
              {disabledModelIds.length > 0 && (
                <Button size="sm" variant="secondary" icon="restart_alt" onClick={onEnableAll}>
                  Active All
                </Button>
              )}
              {activeIds.length > 0 && (
                <Button size="sm" variant="secondary" icon="block" onClick={() => onDisableAll(activeIds)}>
                  Disable All
                </Button>
              )}
            </div>
          );
        })()}
      </div>
      {!!modelsTestError && (
        <p className="text-xs text-red-500 mb-3 break-words">{modelsTestError}</p>
      )}
      {renderModelsSection()}
    </Card>
  );
}
