import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Properties } from './components/Properties';
import { Contact } from './components/Contact';
import { RequestForm } from './components/RequestForm';
import { Header } from './components/Header';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setShowForm(true)} />
      <Hero onExploreClick={() => setShowForm(true)} />
      <Services />
      <Properties />
      <Contact />
      <RequestForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}
