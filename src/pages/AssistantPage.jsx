import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { api } from '../services/api';
import {
  Sparkles,
  Send,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Bot,
  User,
  Mic
} from 'lucide-react';

export const AssistantPage = ({ setActivePage, setSelectedSchemeId }) => {
  const { lang, t } = useLanguage();
  const { profile = {}, updateProfile } = useProfile();

  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hello! I am your SchemeFlow Assistant. Tell me what you are trying to achieve (for example: *\"I want a loan of ₹2 Lakh to start a poultry or dairy business in West Bengal\"*). I will extract your parameters and recommend verified schemes.",
      recommendations: []
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [pendingFacts, setPendingFacts] = useState(null);
  const [pendingProfile, setPendingProfile] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const samplePrompts = [
    "I want a loan of ₹2 Lakh to start a dairy unit in West Bengal",
    "I am a 28-year-old woman looking for an artisan toolkit grant",
    "I need a working capital loan for a food processing unit"
  ];

  const handleToggleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      if (lang === 'hi') recognition.lang = 'hi-IN';
      else if (lang === 'bn') recognition.lang = 'bn-IN';
      else recognition.lang = 'en-IN';
      
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = (e) => {
        console.error("Speech recognition error:", e);
        setIsListening(false);
      };
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error(err);
      setIsListening(false);
    }
  };

  const handleSend = async (msgToSend = inputMessage) => {
    if (!msgToSend.trim()) return;

    const userText = msgToSend;
    setInputMessage('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await api.sendAssistantMessage(userText, profile);

      if (res.extracted_facts && res.extracted_facts.length > 0) {
        setPendingFacts(res.extracted_facts);
        setPendingProfile(res.extracted_profile);
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: res.reply,
          recommendations: res.recommended_schemes || [],
          suggestedFollowups: res.suggested_followups || []
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: "We're temporarily unable to load scheme recommendations. Please try again.",
          recommendations: []
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmFacts = () => {
    if (pendingProfile && typeof updateProfile === 'function') {
      updateProfile(pendingProfile);
      setPendingFacts(null);
      setPendingProfile(null);
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: "✓ Profile attributes updated and confirmed! Your recommendations have been recalculated with these parameters.",
          recommendations: []
        }
      ]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '880px' }}>
      
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span className="badge badge-navy">Conversational Discovery & Voice</span>
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>
          SchemeFlow AI Assistant
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Describe your business or loan need in natural language or speech to discover matching schemes.
        </p>
      </div>

      {/* Pending Fact Confirmation Card */}
      {pendingFacts && pendingFacts.length > 0 && (
        <div style={{
          background: 'var(--primary-navy-light)',
          border: '1px solid var(--primary-navy)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <UserCheck size={16} color="var(--primary-navy)" />
            <span style={{ fontWeight: 800, fontSize: '13px', color: 'var(--primary-navy)' }}>
              Extracted Profile Attributes
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            {pendingFacts.map((fact, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                padding: '4px 10px',
                fontSize: '11px',
                border: '1px solid var(--border-subtle)'
              }}>
                <span style={{ color: 'var(--text-muted)' }}>{fact.label}: </span>
                <strong style={{ color: 'var(--text-main)' }}>{fact.value}</strong>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleConfirmFacts}
              className="btn btn-navy btn-sm"
            >
              <CheckCircle2 size={13} />
              <span>Confirm & Apply to Profile</span>
            </button>
            <button
              onClick={() => setPendingFacts(null)}
              className="btn btn-outline btn-sm"
            >
              <span>Dismiss</span>
            </button>
          </div>
        </div>
      )}

      {/* Chat Messages Log */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px',
        minHeight: '400px',
        maxHeight: '520px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: 'var(--shadow-card)'
      }}>
        {messages.map((msg, idx) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isUser ? 'flex-end' : 'flex-start'
              }}
            >
              <div style={{
                display: 'flex',
                gap: '10px',
                maxWidth: '85%',
                flexDirection: isUser ? 'row-reverse' : 'row'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: isUser ? 'var(--bg-secondary)' : 'var(--primary-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isUser ? 'var(--text-main)' : '#FFFFFF',
                  flexShrink: 0
                }}>
                  {isUser ? <User size={15} /> : <Bot size={16} />}
                </div>

                <div style={{
                  background: isUser ? 'var(--primary-navy)' : 'var(--bg-secondary)',
                  color: isUser ? '#FFFFFF' : 'var(--text-main)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '12px 16px',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>
              </div>

              {/* In-Chat Matching Scheme Cards */}
              {msg.recommendations && msg.recommendations.length > 0 && (
                <div style={{
                  width: '100%',
                  marginTop: '12px',
                  paddingLeft: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {msg.recommendations.map(rec => (
                    <div
                      key={rec.scheme_id}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '12px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--text-main)' }}>
                          {rec.scheme_name}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          {rec.summary}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="badge badge-orange" style={{ fontSize: '11px' }}>
                          {rec.match_score}%
                        </span>

                        <button
                          onClick={() => {
                            if (typeof setSelectedSchemeId === 'function') setSelectedSchemeId(rec.scheme_id);
                            if (typeof setActivePage === 'function') setActivePage('detail');
                          }}
                          className="btn btn-navy btn-sm"
                          style={{ padding: '4px 10px', fontSize: '11px' }}
                        >
                          <span>Inspect</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}

        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-navy)', fontSize: '12px' }}>
            <Bot size={16} />
            <span>Consulting official ministry guidelines...</span>
          </div>
        )}
      </div>

      {/* Suggestions Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              borderRadius: 'var(--radius-pill)',
              padding: '5px 12px',
              fontSize: '11px',
              cursor: 'pointer',
              fontWeight: 700
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar with Voice Mic in Orange */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        style={{ display: 'flex', gap: '10px' }}
      >
        <input
          type="text"
          className="form-input"
          style={{ flex: 1, padding: '12px 18px', fontSize: '14px', borderRadius: 'var(--radius-pill)' }}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={isListening ? "Listening... speak now" : "Ask or describe your situation..."}
        />

        <button
          type="button"
          onClick={handleToggleVoiceInput}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: isListening ? 'var(--primary-orange)' : 'var(--bg-secondary)',
            color: isListening ? '#FFFFFF' : 'var(--primary-navy)',
            border: '1px solid var(--border-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="Voice Mic Input"
        >
          <Mic size={18} />
        </button>

        <button
          type="submit"
          disabled={loading || !inputMessage.trim()}
          className="btn btn-navy"
          style={{ padding: '0 20px' }}
        >
          <Send size={15} />
          <span>Send</span>
        </button>
      </form>

    </div>
  );
};
