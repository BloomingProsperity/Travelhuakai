import { useMemo, useReducer, type ReactNode } from "react";
import { AtlasContext, atlasReducer, initialAtlasState } from "./atlas";

export default function AtlasProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(atlasReducer, initialAtlasState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
}
