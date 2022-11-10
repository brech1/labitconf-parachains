---
title: Parachains - Español
revealOptions:
  transition: slide
theme: night
---

<div class="w-full h-full">
  <div class="flex mr-auto pb-24">
    <img class="h-12" alt="labitconf" src="./assets/img/labitconf.svg">
  </div>
  <p class="pb-12">Qué son y cómo funcionan las Parachains</p>
  <div class="flex mr-auto items-center">
    <a href="https://twitter.com/brechy_" target="_blank" class="flex items-center">
      <img class="w-36 h-36 rounded-full" alt="brech1" src="../assets/img/brech1.jpeg">
      <p class="text-2xl pl-4">@brechy_</p>  
    </a>
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
  <p class="pt-8">Protocolo que une y asegura un ecosistema de blockchains especializadas llamadas parachains.</p>
</div>

----

<div class="flex flex-col w-full">
  <img class="h-20" alt="dot" src="../assets/img/polkadot-logo-white.svg">
  <div class="flex flex-col justify-start items-start w-full mt-12">
    <p>- Interoperabilidad</p>
    <p>- Seguridad</p>
    <p>- Escalabilidad</p>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Interoperabilidad</p>
  <div class="flex justify-between">
    <div class="w-4/12">
      <img class="w-full" alt="xcm" src="../assets/img/xcm.svg">
    </div>
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Posible utilizando el formato XCM</p>
      <p class="text-2xl">- Permite enviar mensajes entre Parachains</p>
      <p class="text-2xl">- Los mensajes son instrucciones que se interpretan en la XCVM</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Seguridad</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="security" src="../assets/img/security.svg">
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Seguridad en PoW: Hashrate (h/s)</p>
      <p class="text-2xl">- Seguridad en PoS: Assets ($)</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Relay Chain</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="relay" src="../assets/img/relay-chain.svg">
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Asegura las parachains y permite la interoperabilidad</p>
      <p class="text-2xl">- Controla gobernanza, staking y parachain slots</p>
      <p class="text-2xl">- Encargada del consenso de la red</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Escalabilidad</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="scalability" src="../assets/img/scalable.svg">
    <div class="flex flex-col w-6/12 justify-around text-left">
      <p class="text-2xl">- Necesaria para alcanzar la adopción masiva</p>
      <p class="text-2xl">- Alcanzada mediante el procesamiento y validación de transacciones en paralelo</p>
      <p class="text-2xl">- Posible por las parachains</p>
    </div>
  </div>
</div>

---

<div class="w-full h-full">
  <p>Parachain</p>
  <div class="flex w-full justify-around pt-8">
    <img class="w-4/12" alt="parachain" src="../assets/img/parachain-icon.svg">
    <div class="flex flex-col w-6/12 justify-around items-start text-left">
      <p class="text-2xl">- Blockchain soberana</p>
      <p class="text-2xl">- Optimizada para una funcionalidad específica</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Tecnología</p>
  <div class="flex flex-col">
    <div class="flex items-center">
      <p>- Rust</p>
      <img class="pl-4 w-2/12" alt="ferris" src="../assets/img/ferris-hand.svg">
    </div>
    <div class="flex items-center">
      <p>- WebAssembly</p>
      <img class="pl-4 w-1/12" alt="wasm" src="../assets/img/wasm-icon.png">
    </div>
    <div class="flex items-center">
      <p>- </p>
      <img class="pl-4 w-4/12" alt="substrate" src="../assets/img/substrate-logo.svg">
    </div>
  </div>
</div>

----

<div class="flex justify-center h-full w-full p-6">
  <img class="h-12" alt="logo" src="./assets/img/substrate-logo.svg">
</div>

<div class="grid grid-cols-3 gap-6 bg-emerald-500 rounded-lg p-3">
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-700 shadow-emerald-600 h-16 col-span-3 mb-2">
    <p class="text-xl font-medium w-full m-auto">Ejecución</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Almacenamiento</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Networking P2P</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Consenso</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">RPC API</p>
  </div>
    <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Telemetría</p>
  </div>
  <div class="flex items-center p-6 rounded-lg shadow-md bg-emerald-800 shadow-emerald-600 h-16">
    <p class="text-xl font-medium w-full m-auto">Marco De Ejecución</p>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Desplegar</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="auction" src="../assets/img/auction.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- Participar de una subasta por un slot en la Relay Chain por 96 semanas</p>
      <p class="text-2xl">- Al finalizar se devuelven los DOT tokens</p>
      <p class="text-2xl">- Se puede renovar o migrar a Parathread</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Parathread</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="parathread" src="../assets/img/parathread.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- Modelo de pago sobre la marcha</p>
      <p class="text-2xl">- Pensado para blockchains que no necesitan conectividad constante</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Logramos</p>
  <div class="flex justify-between pt-8">
    <img class="w-3/12" alt="chain" src="../assets/img/single-chain.svg">
    <div class="flex flex-col w-8/12 justify-around items-start text-left">
      <p class="text-2xl">- Forkless upgrades</p>
      <p class="text-2xl">- Alto rendimiento (optimizables)</p>
      <p class="text-2xl">- Independencia en costos de transacciones</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Usos óptimos</p>
  <div class="flex w-full justify-around pt-8">
    <img class="w-4/12" alt="parachain" src="../assets/img/parachain-icon.svg">
    <div class="flex flex-col w-4/12 justify-around items-start text-left">
      <p class="text-2xl">- Alta complejidad</p>
      <p class="text-2xl">- Alto nivel de TPS</p>
      <p class="text-2xl">- Ecosistemas</p>
      <p class="text-2xl">- Independencia del protocolo base</p>
    </div>
  </div>
</div>

---

<div class="w-full h-full">
  <p>Collators</p>
  <div class="flex justify-between">
    <img class="w-4/12" alt="collator" src="../assets/img/collator.svg">
    <div class="flex flex-col min-h-full justify-around text-left">
      <p class="text-2xl">- Nodos de parachains</p>
      <p class="text-2xl">- Agrupan y procesan transacciones</p>
      <p class="text-2xl">- Crean los bloques</p>
      <p class="text-2xl">- Generan Pruebas de Validez (PoV) que envian a los validators</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Relay Chain Validators</p>
  <div class="flex justify-around h-full">
    <img class="w-4/12" alt="validator" src="../assets/img/validator.svg">
    <div class="flex flex-col min-h-full justify-around text-left">
      <p class="text-2xl">- El protocolo asigna grupos de validators a distintas parachains</p>
      <p class="text-2xl">- Reciben la PoV y la comparten entre el grupo asignado</p>
      <p class="text-2xl">- Comprueban la correcta transición de estado</p>
    </div>
  </div>
</div>

----

<div class="w-full h-full">
  <p>Recibo De Candidato</p>
  <div class="flex justify-around h-full">
    <img class="w-4/12" alt="validator" src="../assets/img/validator.svg">
    <div class="flex flex-col min-h-full justify-around text-left">
      <p class="text-2xl">- Generado si la transición de estado es correcta</p>
      <p class="text-2xl">- Contiene la mínima información de la validación de un bloque</p>
      <p class="text-2xl">- Se crea una transacción para almacenarlo en la Relay Chain</p>
    </div>
  </div>
</div>

----

<!-- .slide: data-background="../assets/img/parachains.svg" -->

----

<!-- .slide: data-background="../assets/img/parachains.svg" -->

<div class="flex flex-col w-full h-full justify-center items-center">
   <p>Gracias!</p>
</div>
