import { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import FormField from "./FormField";
import Input from "./Input";
import Textarea from "./Textarea";

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20 ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <FaCheck className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">
          Message Sent!
        </h3>
        <p className="mt-2 text-green-600 dark:text-green-400">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-green-700 underline dark:text-green-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" required>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </FormField>
        <FormField label="Email" required>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </FormField>
      </div>
      <FormField label="Subject" required>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          required
        />
      </FormField>
      <FormField label="Message" required>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more..."
          rows={5}
          required
        />
      </FormField>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        <FaPaperPlane className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
