const AvatarCard = ({
  name,
  role,
  avatar,
  description,
  social,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800 ${className}`}>
      <div className="mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
        {avatar ? (
          <img src={avatar} alt={name} className="h-full w-full object-cover" />
        ) : (
          name?.charAt(0)
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
      {role && (
        <p className="text-sm text-indigo-600 dark:text-indigo-400">{role}</p>
      )}
      {description && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</p>
      )}
      {social && (
        <div className="mt-4 flex items-center justify-center gap-3">
          {social.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarCard;
