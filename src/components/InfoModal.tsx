'use client';

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ModalProps } from '@/types';

export default function InfoModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full relative max-h-[90vh] flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="overflow-y-auto px-2 flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LINDER: Connessioni Vere, Faccia a Faccia
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Perché LINDER è Diversa</h2>
              <p>Ciao! Abbiamo creato LINDER perché crediamo che conoscersi dal vivo sia molto meglio che chattare per giorni con uno sconosciuto. Un sorriso, uno sguardo e una voce reale dicono molto più di mille messaggi!</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Non Solo Amore, Ma Vere Connessioni</h2>
              <p>LINDER è pensata per aiutarti a trovare ogni tipo di connessione umana che cerchi: nuove amicizie, compagni di hobby, persone con cui condividere interessi o, sì, anche l'amore se è quello che desideri. Qui non ci sono etichette, solo persone reali da conoscere.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Un Gesto di Interesse Autentico</h2>
              <p>Quando qualcuno ti mostra LINDER, sta facendo qualcosa di speciale: ti sta scegliendo nella vita reale, non solo scorrendo foto. Che sia per amicizia o altro, sta dicendo: "Mi interessi tu, la persona vera, non solo un profilo online." È un modo sincero di dire che vali la pena di essere conosciuto!</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Oltre l'Aspetto Fisico</h2>
              <p>Le altre app ti fanno giudicare una persona in 3 secondi guardando una foto. Ma siamo onesti: le persone sono molto più delle loro foto! LINDER ti permette di scoprire chi hai davanti per davvero, perfetto per creare amicizie basate su interessi comuni e valori condivisi.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Rispetto Prima di Tutto</h2>
              <p>Sapevi che oltre la metà delle persone è già impegnata in qualche tipo di relazione? Con LINDER puoi creare nuove amicizie rispettando i confini di ciascuno, senza imbarazzi e senza secondi fini se non lo desideri.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Niente Più Ansia Sociale</h2>
              <p>Basta con lo stress di trovare la battuta perfetta per iniziare una conversazione! Con LINDER salti direttamente alla parte interessante: conoscersi davvero, che sia per un'amicizia o qualcosa di più.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">La Matematica è Semplice</h2>
              <p>Per trovare persone con cui connetterti veramente, devi conoscerne tante. LINDER rende tutto più veloce e semplice, aumentando le tue possibilità di trovare amicizie significative e, se lo desideri, anche qualcosa di più.</p>
            </section>

            <div className="my-8 text-center italic">
              LINDER non è solo un'app. È un nuovo modo di creare connessioni autentiche in un mondo digitale. È un ritorno all'essenza delle relazioni umane, di qualsiasi tipo esse siano.
            </div>

            <div className="text-center font-bold text-xl text-primary-600 mb-6">
              Conosciamoci dal vivo!
            </div>
          </div>
        </div>

        <motion.button
          onClick={onClose}
          className="w-full bg-[#FF8A00] text-white py-4 rounded-xl text-xl font-semibold hover:bg-[#FF7A00] transition-colors shadow-lg mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Giochiamo
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 