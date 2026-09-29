export function parseLessonId(id: string): { voyage: string; lesson: string } {
    const [voyage, lesson] = id.split("/");

    if (!voyage || !lesson) {
        throw new Error(`Lesson id "${id}" is not in the expected "<voyage>/<lesson>" shape`);
    }

    return { voyage, lesson };
}
