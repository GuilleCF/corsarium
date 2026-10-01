export interface VoyageMeta {
    title: string;
    description: string;
}

export const voyages: Record<string, VoyageMeta> = {
    foundation: {
        title: "Foundation Voyage",
        description: "Placeholder voyage used to verify the content routing end to end.",
    },
    namd: {
        title: "NAMD Voyage",
        description: "Placeholder"
    }

};
