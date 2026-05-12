import type { UserNote } from "../data/types";

export async function getUserNotes(cityId: string): Promise<UserNote[]> {
  void cityId;
  return [];
}

export async function submitUserNote(payload: {
  cityId: string;
  text: string;
  images: File[];
  authorized: true;
}): Promise<{ submissionId: string; status: "queued" }> {
  void payload;
  throw new Error("Submissions are not enabled in Phase 1.");
}
