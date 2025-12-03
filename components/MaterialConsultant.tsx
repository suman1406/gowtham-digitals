import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage, ChatRole } from '../types';
import { getMaterialAdvice } from '../services/geminiService';

export const MaterialConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Hello. I am the Gowtham Digitals Material Expert. Not sure if you need Vinyl or Star Flex? Describe your project, and I'll recommend the best media." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsLoading(true);

    const responseText = await getMaterialAdvice(userMsg);

    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-matte-gray border border-gold-500/30 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-matte-black p-4 border-b border-gold-500/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-gold-500 w-5 h-5" />
              <h3 className="text-gold-500 font-display font-bold tracking-wide">AI MATERIAL ADVISOR</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#151515]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === ChatRole.USER 
                    ? 'bg-gold-500 text-black font-medium rounded-br-none' 
                    : 'bg-matte-gray border border-gray-700 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-matte-gray p-3 rounded-lg border border-gray-700">
                  <Loader2 className="w-4 h-4 text-gold-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-matte-black border-t border-gold-500/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="E.g., Outdoor banner for rainy season..."
              className="flex-1 bg-[#222] text-white text-sm rounded px-3 py-2 outline-none focus:ring-1 focus:ring-gold-500 border border-transparent transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-gold-500 text-black p-2 rounded hover:bg-white transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-matte-black border border-gold-500 text-gold-500 px-4 py-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-gold-500 hover:text-black transition-all duration-300"
      >
        <span className="font-bold text-sm hidden md:block uppercase tracking-wider">
          {isOpen ? 'Close Advisor' : 'Ask AI Expert'}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </div>
      </button>
    </div>
  );
};
