"use client";

import { abi } from "@/services/abi";
import { parseEther } from "ethers";
import { useAccount, useSignMessage } from "wagmi";
import { useWriteContract } from "wagmi";

export default function Home() {
  const contractAddress = "0x2335Ad4f04a4fD50F8E075Dc407e64080EA08372";
  // Wagmi hooks
  const account = useAccount();
  const { signMessage } = useSignMessage();
  const {
    data: transactionHash,
    writeContract,
    isError,
    isSuccess,
  } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    writeContract({
      address: contractAddress,
      abi,
      functionName: "bid",
      value: parseEther("0.0001"),
    });
  }

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
      <form onSubmit={submit}>
        <button type="submit" className="btn btn-primary text-white mt-4">
          Bid
        </button>

        {isSuccess && (
          <div className="text-green-500 mt-2">
            Bid placed successfully! Transaction Hash: {transactionHash}
          </div>
        )}

        {isError && (
          <div className="text-red-500 mt-2">
            Failed to place bid. Please try again.
          </div>
        )}
      </form>
    </main>
  );
}
