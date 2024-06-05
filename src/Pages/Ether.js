import React from 'react';

const Ether = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">What is Ether?</h1>

      {/* Information about Ether */}
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          Ether (ETH) is the native cryptocurrency of the Ethereum blockchain, which was proposed by Vitalik Buterin in late 2013 and development was crowdfunded in 2014. It serves as the fuel for operating decentralized applications (DApps) and executing smart contracts on the Ethereum network.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Ether is used to pay for transaction fees and computational services on the network. When someone wants to execute a transaction or run a smart contract, they must pay a transaction fee in Ether to the network validators (miners or stakers) for processing and validating the transaction or contract execution.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Additionally, Ether can be traded on various cryptocurrency exchanges and is often considered one of the primary cryptocurrencies alongside Bitcoin. Its value can fluctuate based on market demand and supply dynamics, as well as changes in the broader cryptocurrency ecosystem.
        </p>
      </div>

      {/* Stepper section */}
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Step 1: Choose Ethereum Payment</h2>
            <p class="leading-relaxed"> At checkout, select "Pay with Ethereum".
</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> Step 2: Payment Method Selection</h2>
            <p class="leading-relaxed">You'll be prompted to choose between MetaMask or receiving a QR code/Ethereum address.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> Step 3: Connect or Receive Details</h2>
            <p class="leading-relaxed"> If using MetaMask, connect your wallet securely. Otherwise, receive a unique Ethereum address or scan the provided QR code.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Step 4: Verify and Process</h2>
            <p class="leading-relaxed">Review the payment details, including the amount and Ethereum address. Click "Confirm" in MetaMask or proceed with the payment from your wallet.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Step 5: Completion</h2>
            <p class="leading-relaxed"> Once the transaction is confirmed on the blockchain, your booking is confirmed.</p>
          </div>
        </div>
      </div>
      <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"></img>
    </div>
  </div>
</section>

      {/* Additional information about cryptocurrency */}
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">More Information about Cryptocurrency</h2>
        <p className="text-lg text-gray-700 mb-8">
          Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates on decentralized networks based on blockchain technology. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies are not controlled by any central authority, making them resistant to censorship and manipulation.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Cryptocurrencies enable peer-to-peer transactions without the need for intermediaries like banks, allowing for faster and cheaper cross-border transactions. They also offer financial inclusion to individuals who lack access to traditional banking services.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Bitcoin, created by an anonymous person or group of people using the pseudonym Satoshi Nakamoto, was the first cryptocurrency and remains the most well-known and widely used. Since then, thousands of other cryptocurrencies, including Ether, have been created, each with its own unique features and use cases.
        </p>
      </div>
    </div>
  );
};

export default Ether;
