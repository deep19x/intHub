function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-[#020617]">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

            {/* Aurora */}
            <div className="aurora aurora-1"></div>
            <div className="aurora aurora-2"></div>
            <div className="aurora aurora-3"></div>

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "42px 42px",
                }}
            />
        </div>
    );
}

export default AnimatedBackground;