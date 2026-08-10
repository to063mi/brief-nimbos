export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden mesh-bg">
      <div className="absolute top-[-10%] left-[5%] h-[40rem] w-[40rem] rounded-full bg-accent-emerald/10 blur-[120px] animate-mesh-drift" />
      <div
        className="absolute top-[20%] right-[0%] h-[38rem] w-[38rem] rounded-full bg-accent-blue/10 blur-[120px] animate-mesh-drift"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[36rem] w-[36rem] rounded-full bg-accent-emerald/[0.07] blur-[120px] animate-mesh-drift"
        style={{ animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
