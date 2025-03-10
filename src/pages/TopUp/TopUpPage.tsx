import { useState } from "react"
import { Copy, X } from "lucide-react"
import NavigateBackButton from "@/components/NavigateBackButton"
import { TopUpOption } from "@/types"
import { topUpOptions } from "@/data"
import toast, { Toaster } from 'react-hot-toast';
import qrCode from '@/assets/images/QR_code.png';


export function TopUpPage() {
  const [selectedOption, setSelectedOption] = useState<TopUpOption | null>(null)


  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied');
  }

  return (
    <div className="min-h-screen text-white">
      <div className="sticky top-0 z-10 flex items-center my-4">
        <NavigateBackButton className="w-[10%]"/>
        <div className="flex items-center justify-center w-[80%]">
          <h1 className="text-xl font-medium ml-2 text-center">Top Up</h1>
        </div>
      </div>
      <Toaster />
      {!selectedOption ? (
        <>
        {/* search */}
          {/* <div className="sticky top-0 z-10 ">
            <div className="px-4 pb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search cryptocurrency"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 bg-[#1C1C1E] border-none rounded-xl focus:ring-0 focus:outline-none text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div> */}

          <div className="pt-2 pb-20">
            {topUpOptions.map((option) => (
              <button
                key={option.id}
                className="w-full flex items-center px-3 py-[6px] hover:bg-[#1C1C1E] rounded-xl transition-colors mb-1"
                onClick={() => setSelectedOption(option)}
              >
                <img
                  src={option.icon || "/placeholder.svg"}
                  alt={option.symbol}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="text-left">
                  <div className="font-medium">{option.symbol}</div>
                  <div className="text-sm text-gray-400">{option.name}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        // Deposit Details Screen
        <>
          <div className="sticky top-0 z-10 ">
            <div className="flex items-center px-4 py-2 justify-between">
              <h1 className="text-xl font-medium ">Deposit {selectedOption.symbol}</h1>
              <button
                onClick={() => setSelectedOption(null)}
                className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
              >
                <X strokeWidth={3} className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="px-4 pt-4 pb-20">
            {/* Currency Selection */}
            <div className="bg-[#1C1C1E] rounded-xl p-4 mb-4">
              <div className="text-sm text-gray-400 mb-2">Currency</div>
              <div className="flex items-center">
                <img
                  src={selectedOption.icon || "/placeholder.svg"}
                  alt={selectedOption.symbol}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>{selectedOption.symbol}</span>
              </div>
            </div>

            {selectedOption.address && (
              <>
                {/* Address */}
                <div className=" rounded-xl py-4 mb-1">
                  <div className="text-sm text-gray-400 mb-1 ">Send {selectedOption.symbol} to this address:</div>
                  <div className="flex items-center justify-between  rounded-lg ">
                    <div className="text-sm mr-2 break-all tracking-widest">{selectedOption.address}</div>
                    <button
                      onClick={() => handleCopy(selectedOption.address!)}
                      className="p-2 hover:bg-[#3C3C3E] rounded-lg transition-colors "
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="border-b  border-stroke mt-4"></div>
                </div>

                {/* MEMO */}
                {selectedOption.memo && (
                  <div className="rounded-xl mb-4">
                    <div className="text-sm text-gray-400 ">MEMO</div>
                    <div className="flex items-center justify-between rounded-lg">
                      <div className="text mr-2">{selectedOption.memo}</div>
                      <button
                        onClick={() => handleCopy(selectedOption.memo!)}
                        className="p-2 hover:bg-[#3C3C3E] rounded-lg transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-[#fca832ee] text-sm mt-2">
                      Include {selectedOption.symbol} MEMO or you may lose funds.
                    </div>
                  <div className="border-b  border-stroke mt-4"></div>

                  </div>
                )}
              </>
            )}

            {/* Transaction Details */}
            <div className="space-y-4 flex justify-between items-center gap-4 text-sm ">
              <div className="w-[60%] mt-3">
                <div className="flex justify-between items-center border-b border-stroke-secondary pb-[1.5px] mb-[2px]">
                  <span className="text-gray-400">Minimum</span>
                  <span>{selectedOption.minimum}</span>
                </div>
                {selectedOption.confirmations && (
                  <div className="flex justify-between items-center border-b border-stroke-secondary pb-[1.5px] mb-[2px]">
                    <span className="text-gray-400">Confirmations</span>
                    <span>{selectedOption.confirmations}</span>
                  </div>
                )}
                <div className="flex justify-between items-center border-b border-stroke-secondary pb-[1.5px] mb-[2px]">
                  <span className="text-gray-400">Fee</span>
                  <span>{selectedOption.fee}</span>
                </div>
                <div className="flex justify-between items-center border-b border-stroke-secondary pb-[1.5px] mb-[2px]">
                  <span className="text-gray-400 text-[13px]">Send only {selectedOption.symbol} to this address.</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-[#1C1C1E] rounded-xl p-2 flex justify-center w-[40%]">
                  <img src={qrCode} alt="" className=""/>
              </div>
            </div>

            {/* Warning */}
            <div className=" text-center text-sm text-gray-400">
              {/* Send only {selectedOption.symbol} to this address. */}
              <br />
              Sending other assets may result in permanent loss.
            </div>
          </div>
        </>
      )}
    </div>
  )
}

