import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "viem/chains";

export const config = getDefaultConfig({
  appName: "Auction App",
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "",
  chains: [mainnet, sepolia],
  ssr: true,
});
