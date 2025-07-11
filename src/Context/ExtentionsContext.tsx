import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface Extension {
  logo: string;
  name: string;
  isActive: boolean;
  description: string;
}

interface ExtentionsContextType {
  extentions: Extension[];
}

export const ExtentionsContext = createContext<ExtentionsContextType>({
  extentions: [],
});

interface ExtentionsContextProviderProps {
  children: ReactNode;
}

export default function ExtentionsContextProvider({
  children,
}: ExtentionsContextProviderProps) {
  const [extentions, setExtentions] = useState<Extension[]>([]);

  async function fetchExtensions() {
    const { data } = await axios.get(
      "https://api.myjson.online/v1/records/8cd94c4f-3045-4c15-b5ff-ad480b7bd88f"
    );
    setExtentions(data.data as Extension[]);
  }

  useEffect(() => {
    fetchExtensions();
  }, []);

  return (
    <ExtentionsContext.Provider value={{ extentions }}>
      {children}
    </ExtentionsContext.Provider>
  );
}
