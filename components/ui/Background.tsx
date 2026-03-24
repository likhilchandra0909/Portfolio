export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Purple Glow — top left (your original) */}
      <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-40 blur-[250px] top-[-200px] left-[-200px]" />
      {/* Blue Glow — bottom right (your original) */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600 opacity-35 blur-[250px] bottom-[-200px] right-[-200px]" />
    </div>
  );
}