import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Footer from './components/Footer';
import { EventProvider } from './context/EventContext';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <EventProvider>
      <div className="Header">
        <Header />
      </div>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <Calendar />
        </div>
      </div>
      <div className="Footer">
          <Footer />  
        </div>
      <Toaster />
    </EventProvider>
  );
}

export default App;