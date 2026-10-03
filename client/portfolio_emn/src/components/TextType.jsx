import { useState, useEffect } from 'react';

export default function TextType({ text, speed = 100, className = "", delay = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < text.length) {
          setDisplayedText(text.slice(0, displayedText.length + 1));
          timeout = setTimeout(handleTyping, speed);
        } else {
          // Pause at the end before deleting
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(text.slice(0, displayedText.length - 1));
          timeout = setTimeout(handleTyping, speed / 2); // Delete faster than typing
        } else {
          setIsDeleting(false);
          timeout = setTimeout(handleTyping, 500); // Pause before restarting
        }
      }
    };

    timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, delay]);

return (
  <span 
    className={className} 
    style={{ 
      display: 'inline-grid', // Creates a stackable context
      gridTemplateColumns: '1fr', // Single column
      verticalAlign: 'bottom'
    }}
  >
    {/* 1. The Ghost: Invisible but keeps the width/height perfect */}
    <span style={{ 
      gridArea: '1 / 1', // Forces both spans to sit in the same "cell"
      visibility: 'hidden', 
      userSelect: 'none',
      whiteSpace: 'pre' 
    }}>
      {text}
    </span>

    {/* 2. The Actual Text: Sits exactly on top of the ghost */}
    <span style={{ 
      gridArea: '1 / 1', 
      whiteSpace: 'pre' 
    }}>
      {displayedText}
    </span>
  </span>
);
}