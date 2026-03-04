import assert from "assert";
import { randomBytes, scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export async function hashPassword(
  password: string,
  salt?: string,
): Promise<string> {
  salt ??= randomBytes(16).toString("hex");

  const hash = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${salt}:${hash.toString("hex")}`; // salt hacer que la clave sea unica aunque para ese usurario que la puso aunque otro tenga la misma
}

export async function passwordEquals(
  hashedPasswordA: string,
  passwordB: string,
) {
  const [salt] = hashedPasswordA.split(":");

  assert(salt);

  const hashedPasswordB = await hashPassword(passwordB, salt);

  console.log({ hashedPasswordA, hashedPasswordB });

  const hashedPasswordBuffer = Buffer.from(hashedPasswordA, "utf-8");
  const passwordBuffer = Buffer.from(hashedPasswordB, "utf-8");

  return timingSafeEqual(hashedPasswordBuffer, passwordBuffer);
}
