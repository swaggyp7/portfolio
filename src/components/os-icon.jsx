const commonProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  shapeRendering: "crispEdges",
  className: "shrink-0",
};

function Svg({ children, title }) {
  return (
    <svg aria-hidden={title ? undefined : true} role={title ? "img" : undefined} {...commonProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function OSIcon({ type, title }) {
  switch (type) {
    case "computer":
      return (
        <Svg title={title}>
          <rect x="3" y="1" width="11" height="10" fill="#d6d6d6" stroke="#111" />
          <rect x="4" y="2" width="9" height="7" fill="#6ac2ff" stroke="#111" />
          <rect x="6" y="4" width="5" height="3" fill="#2556d8" />
          <rect x="5" y="11" width="7" height="2" fill="#c0c0c0" stroke="#111" />
          <rect x="2" y="13" width="13" height="3" fill="#a0a0a0" stroke="#111" />
          <rect x="4" y="14" width="2" height="1" fill="#d43131" />
        </Svg>
      );
    case "folder":
      return (
        <Svg title={title}>
          <path d="M2 5h5l1-2h8v10H2V5Z" fill="#ffcd45" stroke="#111" />
          <rect x="2" y="6" width="14" height="7" fill="#ffd95b" stroke="#111" />
          <rect x="4" y="8" width="6" height="2" fill="#f2b000" />
        </Svg>
      );
    case "mail":
      return (
        <Svg title={title}>
          <rect x="2" y="4" width="14" height="10" fill="#fffef8" stroke="#111" />
          <path d="M2 5l7 5 7-5" stroke="#111" />
          <path d="M2 13l5-4" stroke="#111" />
          <path d="M16 13l-5-4" stroke="#111" />
          <rect x="4" y="6" width="10" height="1" fill="#5ba8ff" />
        </Svg>
      );
    case "home":
      return (
        <Svg title={title}>
          <path d="M2 8l7-5 7 5" fill="#99502c" stroke="#111" />
          <rect x="4" y="8" width="10" height="7" fill="#d8d8d8" stroke="#111" />
          <rect x="7" y="10" width="2" height="5" fill="#ef4343" />
          <rect x="10" y="10" width="3" height="3" fill="#3c6fff" />
          <rect x="5" y="6" width="2" height="2" fill="#9be052" />
        </Svg>
      );
    case "pencil":
      return (
        <Svg title={title}>
          <path d="M3 12l2 2 9-9-2-2-9 9Z" fill="#f2d451" stroke="#111" />
          <path d="M2 16l3-2-1-1-2 3Z" fill="#f8d8bb" stroke="#111" />
          <path d="M12 3l2 2 1-1-2-2-1 1Z" fill="#e33636" stroke="#111" />
        </Svg>
      );
    case "blog":
      return (
        <Svg title={title}>
          <rect x="2" y="2" width="14" height="14" rx="2" fill="#6d88e8" stroke="#111" />
          <path d="M7 5h3a4 4 0 0 1 0 8H7V5Z" fill="#4b5ebb" stroke="#111" />
          <path d="M7 5H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1" stroke="#111" />
        </Svg>
      );
    case "chat":
      return (
        <Svg title={title}>
          <path d="M2 3h14v9H8l-4 3v-3H2V3Z" fill="#fffef8" stroke="#111" />
          <rect x="5" y="6" width="2" height="1" fill="#111" />
          <rect x="8" y="6" width="2" height="1" fill="#111" />
          <rect x="11" y="6" width="2" height="1" fill="#111" />
        </Svg>
      );
    case "exe":
      return (
        <Svg title={title}>
          <path d="M4 2h7l3 3v11H4V2Z" fill="#fffef8" stroke="#111" />
          <path d="M11 2v3h3" fill="#dfe9ff" stroke="#111" />
          <rect x="6" y="7" width="6" height="1" fill="#2556d8" />
          <rect x="6" y="9" width="6" height="1" fill="#55a630" />
          <rect x="6" y="11" width="4" height="1" fill="#e33636" />
          <rect x="10" y="11" width="2" height="2" fill="#ffcd45" stroke="#111" />
        </Svg>
      );
    case "file":
      return (
        <Svg title={title}>
          <path d="M4 2h7l3 3v11H4V2Z" fill="#fffef8" stroke="#111" />
          <path d="M11 2v3h3" fill="#e6e6e6" stroke="#111" />
          <rect x="6" y="7" width="6" height="1" fill="#7f8c99" />
          <rect x="6" y="9" width="6" height="1" fill="#7f8c99" />
          <rect x="6" y="11" width="5" height="1" fill="#7f8c99" />
        </Svg>
      );
    default:
      return (
        <Svg title={title}>
          <rect x="3" y="3" width="12" height="12" fill="#d8d8d8" stroke="#111" />
        </Svg>
      );
  }
}
