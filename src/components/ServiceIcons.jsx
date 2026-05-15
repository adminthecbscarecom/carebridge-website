const icons = {
  "personal-care": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 38c2-6 7-10 12-10s10 4 12 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M30 22l4 4-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  mobility: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M16 36V22l8-6 8 6v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 28h8M24 22v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  meal: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M10 20h28v18a4 4 0 01-4 4H14a4 4 0 01-4-4V20z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 20V12h16v8M20 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  housekeeping: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="12" y="14" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 22h12M18 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  laundry: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="12" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M18 12V10h12v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  attendant: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 32c0-6 4.5-10 10-10s10 4 10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M30 20l6-4M30 24l8 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export function ServiceIcon({ name, className = "" }) {
  return <span className={`service-icon ${className}`.trim()}>{icons[name] || icons.attendant}</span>;
}
