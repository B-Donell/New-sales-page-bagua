import React from 'react';
import { Sparkles, BedDouble, Coins, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import instructorImage from '../public/instructor.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <Sparkles size={20} />
                <span className="font-medium">Transforme seu quarto em um portal de prosperidade</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Quarto Próspero Vida Próspera
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Aprenda técnicas milenares de Feng Shui para harmonizar seu quarto e atrair prosperidade e equilíbrio para sua vida
              </p>
            </div>
            
            {/* Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={instructorImage}
                alt="Especialista em Feng Shui em um quarto harmonizado" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
            </div>
          </div>

          {/* CTA Button - Centered below both columns */}
          <div className="text-center">
            <a 
              href="#oferta" 
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-12 py-5 rounded-lg text-xl transition-colors"
            >
              Quero um Quarto Próspero
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">O que você vai aprender</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl">
              <BedDouble className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Posicionamento Ideal</h3>
              <p className="text-gray-600">Aprenda a posicionar sua cama e móveis para maximizar o fluxo de energia positiva</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <Coins className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Símbolos de Prosperidade</h3>
              <p className="text-gray-600">Descubra quais objetos e símbolos atraem abundância financeira para seu espaço</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <Heart className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Harmonia Energética</h3>
              <p className="text-gray-600">Técnicas para equilibrar as energias e criar um ambiente propício ao descanso e prosperidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=1080" 
                alt="Exemplos de quartos com Feng Shui" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <p className="text-2xl font-semibold text-amber-800">
                Todas as configurações de quarto, inclusive do seu abordadas nas aulas!
              </p>
              <p className="text-xl text-gray-700">
                As aulas são gravadas. Você pode assistir quando e onde quiser.
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-2xl text-gray-900 mb-4">
                  São <strong>12h de aulas</strong> onde te mostro como transformar seu quarto em um poderoso portal de <strong>prosperidade e harmonia</strong>. Mesmo que você nunca tenha ouvido falar de feng shui antes.
                </p>
                <a 
                  href="#oferta" 
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Quero um Quarto Próspero
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            © 2024 Feng Shui para Prosperidade. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;