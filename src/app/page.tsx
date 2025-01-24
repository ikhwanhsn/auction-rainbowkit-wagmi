"use client";

import { abi } from "@/services/abi";
import { useAccount, useReadContract, useSignMessage } from "wagmi";

export default function Home() {
  const contractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
  // Wagmi hooks
  const account = useAccount();
  const { signMessage } = useSignMessage();
  const result = useReadContract({
    abi,
    address: contractAddress,
    functionName: "highestBidder",
  });
  console.log(result);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>
        Address:{" "}
        {(account.status === "connected" && account.address) || "Not connected"}
      </p>
      {/* Sign message button */}
      <button
        className="btn btn-primary text-white"
        onClick={() => signMessage({ message: "hello world" })}
      >
        Sign message
      </button>
    </main>
  );
}
