export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="interactive-background fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="interactive-background__grid absolute inset-0" />
      <div className="interactive-background__glow interactive-background__glow--one absolute left-[8%] top-[12%] h-72 w-72 rounded-full" />
      <div className="interactive-background__glow interactive-background__glow--two absolute right-[6%] top-[48%] h-96 w-96 rounded-full" />
      <div className="interactive-background__glow interactive-background__glow--three absolute bottom-[4%] left-[28%] h-80 w-80 rounded-full" />
    </div>
  );
}
