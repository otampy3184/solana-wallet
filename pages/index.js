import React from "react";
import HeadComponent from '../components/Head';

export default function Home() {
  return (
    <div>
      <HeadComponent/>
      <div className="p-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          <span className="text-[#9945FF]">Solana</span>ウォレット
        </h1>
        <div className="mx-auto mt-5 text-gray-500">
          Solanaウォレットの新規作成、インポート、エアドロップ、送金機能
        </div>
      </div>
    </div>
  )
}
