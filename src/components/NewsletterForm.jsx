import { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

const NewsletterForm = ({
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  successMessage = "Thanks for subscribing!",
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className={className}>
      {submitted ? (
        <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <FaCheck className="h-4 w-4" />
          {successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <FaPaperPlane className="h-4 w-4" />
            <span className="hidden sm:inline">{buttonLabel}</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
