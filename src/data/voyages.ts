export interface PathMeta {
    title: string;
    description: string;
}

export const paths: Record<string, PathMeta> = {
    test: {
        title: "Test Path",
        description: "Placeholder path used to verify the content routing end to end.",
    },
};

