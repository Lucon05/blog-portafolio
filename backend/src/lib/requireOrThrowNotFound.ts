export class NotFoundError extends Error{}

export function requireOrThrowNotFound<T>(thing: T, thingName?: string): asserts thing is NonNullable<T>{
  if (thing === null || thing === undefined) {
    throw new NotFoundError(thingName);
  }
}
