import type { Cake } from "@/types";

export const MIN_WEIGHT = 1;
export const MAX_WEIGHT = 10;

export function isValidWeight(weight: number): boolean {
  return Number.isFinite(weight) && weight >= MIN_WEIGHT && weight <= MAX_WEIGHT;
}

// null — торт не выбран, считать не от чего
export function calcApproxPrice(cake: Cake | null, weight: number): number | null {
  if (!cake) return null;
  const pricePerKg = cake.price / cake.unitValue;
  return Math.round((pricePerKg * weight) / 100) * 100; // округляем до сотен
}
