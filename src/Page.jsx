export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 text-white flex flex-col items-center justify-center p-6 space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-center">SKY FIT GYM BROS</h1>

      <div className="bg-white bg-opacity-10 rounded-2xl p-6 max-w-xl w-full shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center border-b border-white pb-2">Configuração das Máquinas</h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-yellow-300">Extensora</h3>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Peso: 70 kg</li>
              <li>Ajuste Interno: 4</li>
              <li>Ajuste Externo: 3</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-green-300">Flexora</h3>
            <ul className="list-disc list-inside text-white mt-2">
              <li>Peso: 60 kg</li>
              <li>Ajuste Interno: 3</li>
              <li>Ajuste Externo: 6</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
