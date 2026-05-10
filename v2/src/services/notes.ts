import type { UserNote } from "../data/types";

export async function getUserNotes(_cityId: string): Promise<UserNote[]> {
  return [];
}

export async function submitUserNote(_payload: {
  cityId: string;
  text: string;
  images: File[];
  authorized: true;
}): Promise<{ submissionId: string; status: "queued" }> {
  throw new Error("Submissions are not enabled in Phase 1.");
}
