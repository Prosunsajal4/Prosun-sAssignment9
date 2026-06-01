import { useState, useEffect } from "react";
import Button from "./Button";

const CookieConsent = ({
  message = "We use cookies to enhance your experience.",
  acceptLabel = "Accept All",
  declineLabel = "Decline",
  onAccept,
  onDecline,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    onDecline?.();
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900 ${className}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">{message}</p>
        <div className="flex items-center gap-3">
          <Button onClick={handleDecline} size="sm" variant="outline">
            {declineLabel}
          </Button>
          <Button onClick={handleAccept} size="sm">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
