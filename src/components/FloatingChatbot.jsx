import { useState, useEffect, useRef } from 'react';
import { getAIReply } from '../data/aiReplies';
import { AI_CHIPS, AI_MOODS } from '../data/constants';

const INIT_MSG = {
  role: "ai",
  text: "Hey champion! 👋 I'm **FORGE AI** — your personal fitness coach.\n\nI can help you with workouts, nutrition, fat loss, muscle building, recovery, and motivation.\n\nWhat are we crushing today?",
  time: new Date()
};

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([INIT_MSG]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [mood, setMood] = useState("All");
  const [minimized, setMinimized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const fmtTime = (d) => {
    if (!d) return "";
    const h = d.getHours(), m = d.getMinutes();
    return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
  };

  const send = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setInput("");
    setUnread(0);
    setMsgs(m => [...m, { role: "user", text: q, time: new Date() }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, { role: "ai", text: getAIReply(q), time: new Date() }]);
    }, 900 + Math.random() * 700);
  };

  const clearChat = () => setMsgs([INIT_MSG]);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
      inputRef.current?.focus();
    }
  }, [msgs, typing, open]);

  const chips = AI_CHIPS[mood] || AI_CHIPS["All"];

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel" style={{ height: minimized ? 72 : 600 }}>
          <div className="chatbot-header">
            <div className="chatbot-header-top">
              <div className="bot-avatar-wrap">
                <div className="bot-avatar">🤖</div>
                <div className="bot-online-ring" />
              </div>
              <div>
                <div className="bot-name">FORGE AI</div>
                <div className="bot-status"><div className="bot-dot" /><span>Online · Fitness Coach</span></div>
              </div>
              <div className="chatbot-header-actions">
                <button className="hdr-btn" title="Clear chat" onClick={clearChat}>🗑</button>
                <button className="hdr-btn" title={minimized ? "Expand" : "Minimise"} onClick={() => setMinimized(m => !m)}>{minimized ? "⬆" : "⬇"}</button>
                <button className="hdr-btn" title="Close" onClick={() => setOpen(false)} style={{ color: "var(--accent2)" }}>✕</button>
              </div>
            </div>
            {!minimized && (
              <div className="chatbot-moods">
                {AI_MOODS.map(m => (
                  <button key={m} className={`mood-chip ${mood === m ? "active" : ""}`} onClick={() => setMood(m)}>{m}</button>
                ))}
              </div>
            )}
          </div>
          {!minimized && (
            <>
              <div className="chatbot-msgs">
                {msgs.map((m, i) => (
                  <div key={i} className={`msg-row ${m.role}`}>
                    <div className={`msg-avatar ${m.role === "ai" ? "ai-av" : "user-av"}`}>{m.role === "ai" ? "🤖" : "👤"}</div>
                    <div className="msg-col">
                      <div className={`chat-bubble ${m.role}`} style={{ whiteSpace: "pre-line" }}>{m.text}</div>
                      <div className="msg-time">{fmtTime(m.time)}</div>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="msg-row ai">
                    <div className="msg-avatar ai-av">🤖</div>
                    <div className="typing-row">
                      <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
              <div className="chatbot-chips">
                {chips.map(c => <button key={c} className="bot-chip" onClick={() => send(c)}>{c}</button>)}
              </div>
              <div className="chatbot-input-row">
                <input
                  ref={inputRef}
                  className="chatbot-input"
                  placeholder="Ask FORGE AI anything…"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && send()}
                />
                <button className="chatbot-send" onClick={() => send()} style={{ opacity: input.trim() ? 1 : .5 }}>↑</button>
              </div>
            </>
          )}
        </div>
      )}
      <button className={`chatbot-fab ${open ? "open" : ""}`} onClick={() => { setOpen(o => !o); setUnread(0); }}>
        <span>{open ? "✕" : "🤖"}</span>
        {!open && unread > 0 && <div className="chat-unread">{unread}</div>}
      </button>
    </div>
  );
}
