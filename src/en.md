---
title: Parachains - English
revealOptions:
  transition: slide
theme: night
---

<div class="w-full h-full">
  <div class="flex mr-auto pb-24">
    <img class="h-12" alt="labitconf" src="./assets/img/labitconf.svg">
  </div>
  <p class="pb-12">Parachains: What are they and how do they work?</p>
  <div class="flex mr-auto items-center">
    <img class="w-36 h-36 rounded-full" alt="rmrk" src="../assets/img/brech1.jpeg">
  </div>
</div>

----

<div class="flex flex-col w-full h-full justify-center items-center">
  <img class="w-6/12" alt="qr" src="../assets/img/qrcode.png">
</div>

---

<!-- .slide: data-background="../assets/img/parachains.svg" -->

----

<div class="flex flex-col w-full">
  <img class="h-20" alt="dot" src="../assets/img/polkadot-logo-white.svg">
  <p class="pt-8">Protocol that unites and secures an ecosystem of specialized blockchains called parachains</p>
</div>

----

<div class="flex flex-col w-full">
  <img class="h-20" alt="dot" src="../assets/img/polkadot-logo-white.svg">
  <div class="flex flex-col justify-start items-start w-full mt-12">
    <p>- Interoperability</p>
    <p>- Security</p>
    <p>- Scalability</p>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Interoperability</p>
  <div class="flex justify-around h-full">
    <img class="h-80" alt="xcm" src="../assets/img/xcm.svg">
    <div class="flex flex-col min-h-full justify-around text-left">
      <p class="text-2xl">- Possible using the XCM format</p>
      <p class="text-2xl">- It allows to send messages across Parachains</p>
      <p class="text-2xl">- These messages are instructions that are interpreted in XCVM</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Security</p>
  <div class="flex justify-around h-full">
    <img class="h-80" alt="security" src="../assets/img/security.svg">
    <div class="flex flex-col min-h-full justify-around items-start">
      <p class="text-2xl">- PoW security: Hashrate (h/s)</p>
      <p class="text-2xl">- PoS security: Assets ($)</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Relay Chain</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="security" src="../assets/img/relay-chain.svg">
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Secures the parachains and allows interoperability</p>
      <p class="text-2xl">- Controls governance, staking and parachain slots</p>
      <p class="text-2xl">- Handles the network consensus</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Scalability</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="security" src="../assets/img/scalable.svg">
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Needed for massive adoption</p>
      <p class="text-2xl">- Accomplished by parallel transaction processing and validation</p>
      <p class="text-2xl">- Granted by parachains</p>
    </div>
  </div>
</div>

---

<div class="w-full h-full">
  <p>Parachain</p>
  <div class="flex w-full justify-around pt-8">
    <img class="w-4/12" alt="security" src="../assets/img/parachain-icon.svg">
    <div class="flex flex-col w-6/12 justify-around items-start text-left">
      <p class="text-2xl">- Sovereign blockchain</p>
      <p class="text-2xl">- Optimized for a specific use case</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Technology</p>
  <div class="flex justify-around h-full pt-20">
    <img class="w-3/12" alt="parachain" src="../assets/img/ferris-hand.svg">
    <img class="w-4/12" alt="parachain" src="../assets/img/substrate-logo.svg">
    <img class="w-2/12" alt="parachain" src="../assets/img/wasm-icon.png">
  </div>
</div>

----

<div class="flex justify-center h-full w-full p-6">
  <img class="h-12" alt="logo" src="./assets/img/substrate-logo.svg">
</div>

<div class="grid grid-cols-3 gap-6 bg-emerald-500 rounded-lg p-3">
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-700 shadow-emerald-600 h-16 col-span-3 mb-2">
    <p class="text-xl font-medium w-full m-auto">Business Logic</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Storage</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">P2P Networking</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Consensus</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">RPC API</p>
  </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Telemetry</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Runtime Environment</p>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Deploy my parachain</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="security" src="../assets/img/auction.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- 96 weeks Relay Chain slot leasing</p>
      <p class="text-2xl">- DOT tokens are locked during this period</p>
      <p class="text-2xl">- It is possible to extend the lease or migrate to a Parathread</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Parathread</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="security" src="../assets/img/parathread.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- Pay-as-you-go model</p>
      <p class="text-2xl">- Designed for parachains that don't need constant conectivity</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Features</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="security" src="../assets/img/single-chain.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- Forkless upgrades</p>
      <p class="text-2xl">- High throughput and performance</p>
      <p class="text-2xl">- Independent transaction costs (not tied to the platform)</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Optimal use cases</p>
  <div class="flex w-full justify-around pt-8">
    <img class="w-4/12" alt="security" src="../assets/img/parachain-icon.svg">
    <div class="flex flex-col w-4/12 justify-around items-start text-left">
      <p class="text-2xl">- Complex apps</p>
      <p class="text-2xl">- High throughput apps</p>
      <p class="text-2xl">- Specific use case</p>
    </div>
  </div>
</div>

---

<div class="w-full h-full">
  <p>Collators</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="security" src="../assets/img/collator.svg">
    <div class="flex flex-col min-h-full justify-around text-left">
      <p class="text-2xl">- Parachain nodes</p>
      <p class="text-2xl">- Bundle and process transactions</p>
      <p class="text-2xl">- Creates blocks and proofs of validity (PoV) that are broadcasted to validators</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Relay Chain Validators</p>
  <div class="flex justify-around h-full">
    <img class="h-80" alt="security" src="../assets/img/validator.svg">
    <div class="flex flex-col min-h-full justify-around items-start">
      <p class="text-2xl">- Assigned to a parachain</p>
      <p class="text-2xl">- Verify correct state transition</p>
      <p class="text-2xl">- Store proofs on the relay chain</p>
    </div>
  </div>
</div>

----

<!-- .slide: data-background="../assets/img/parachains.svg" -->

----

<!-- .slide: data-background="../assets/img/parachains.svg" -->

<div class="flex flex-col w-full h-full justify-center items-center">
   <p>Thank you!</p>
</div>
