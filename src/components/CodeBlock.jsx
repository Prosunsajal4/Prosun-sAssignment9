import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const CodeBlock = ({
  code,
  language = "javascript",
  showLineNumbers = false,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={`relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 ${className}`}>
      <div className="flex items-center justify-between bg-slate-100 px-4 py-2 dark:bg-slate-800">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <>
              <FaCheck className="h-3 w-3 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <FaCopy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-slate-900 p-4 text-sm text-slate-300">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="mr-4 inline-block w-6 text-right text-slate-500 select-none">
                  {i + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
