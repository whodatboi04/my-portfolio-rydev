import { HashLink } from "react-router-hash-link";

export default function SmoothHashLink({ to, smootherRef, children, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (smootherRef?.current) {
      smootherRef.current.scrollTo(to, true, "center center");
    }

    // Still update the hash in the URL
    window.history.pushState(null, "", to);
  };

  return (
    <HashLink href={to} onClick={handleClick} {...props}>
      {children}
    </HashLink>
  );
}
