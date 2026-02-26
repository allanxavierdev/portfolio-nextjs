"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Purple hexagon */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rotate-45 animate-float"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
      />

      {/* Blue circle */}
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/30 rounded-full animate-float-slow" />

      {/* Purple triangle */}
      <div
        className="absolute bottom-40 left-20 w-0 h-0 animate-float"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "35px solid rgba(99, 102, 241, 0.2)",
        }}
      />

      {/* Blue diamond */}
      <div className="absolute top-60 left-1/3 w-10 h-10 bg-accent/25 rotate-45 animate-float-slow" />

      {/* Purple square */}
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-primary/15 rotate-12 animate-float" />

      {/* Blue hexagon */}
      <div
        className="absolute top-80 right-1/3 w-14 h-14 bg-accent/20 rotate-30 animate-float-slow"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
      />
    </div>
  )
}
