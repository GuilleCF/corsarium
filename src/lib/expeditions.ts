export function parseExpeditionId(id: string): { voyage: string; expedition: string } {
    const [voyage, expedition] = id.split("/");

    if (!voyage || !expedition) {
        throw new Error(`Expedition id "${id}" is not in the expected "<voyage>/<expedition>" shape`);
    }

    return { voyage, expedition };
}
