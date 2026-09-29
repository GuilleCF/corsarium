export interface VoyageMeta {
    title: string;
    description: string;
}

export const voyages: Record<string, VoyageMeta> = {
    test: {
        title: "Test Voyage",
        description: "Placeholder voyage used to verify the content routing end to end.",
    },
};
