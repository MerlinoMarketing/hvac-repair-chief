import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  spring,
  useVideoConfig,
  Sequence,
} from "remotion";

/* ---------- Brand Colors ---------- */
const STEEL_BLUE = "oklch(0.62 0.04 200)";
const WARM_GOLD = "oklch(0.66 0.12 60)";
const BG_LIGHT = "oklch(0.975 0.003 200)";

/* ---------- Animated counter ---------- */
function Counter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const value = Math.round(
    interpolate(frame, [0, fps * 1.5], [0, target], {
      extrapolateRight: "clamp",
    })
  );
  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ---------- Badge Reveal (0-4s) ---------- */
function BadgeReveal() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { mass: 1.2, damping: 14 } });
  const rotation = interpolate(frame, [0, fps * 2], [180, 0], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BG_LIGHT,
      }}
    >
      {/* Shield badge */}
      <div
        style={{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          opacity,
          width: 300,
          height: 360,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 200 240"
          width={300}
          height={360}
          style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.15))" }}
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={WARM_GOLD} />
              <stop offset="100%" stopColor="#d4a843" />
            </linearGradient>
          </defs>
          <path
            d="M100 10 L180 50 L175 140 Q170 190 100 230 Q30 190 25 140 L20 50 Z"
            fill="url(#shieldGrad)"
            stroke={STEEL_BLUE}
            strokeWidth="3"
          />
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fill={STEEL_BLUE}
            fontSize="22"
            fontWeight="800"
            fontFamily="system-ui, sans-serif"
          >
            HVAC REPAIR
          </text>
          <text
            x="100"
            y="135"
            textAnchor="middle"
            fill={STEEL_BLUE}
            fontSize="30"
            fontWeight="900"
            fontFamily="system-ui, sans-serif"
            letterSpacing="4"
          >
            CHIEF
          </text>
        </svg>
      </div>

      {/* Tagline fade in */}
      <div
        style={{
          position: "absolute",
          bottom: 180,
          opacity: interpolate(frame, [fps * 2, fps * 3], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          fontSize: 32,
          fontWeight: 600,
          color: STEEL_BLUE,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: 2,
        }}
      >
        Commanding Comfort Across South Florida
      </div>
    </AbsoluteFill>
  );
}

/* ---------- Service Highlights (4-9s) ---------- */
const serviceNames = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "Duct Cleaning & Sealing",
  "Maintenance Plans",
  "Emergency HVAC",
];

function ServiceHighlights() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_LIGHT,
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: WARM_GOLD,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 48,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Our Services
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
          maxWidth: 800,
        }}
      >
        {serviceNames.map((name, i) => {
          const enterFrame = i * (fps * 0.6);
          const wipeProgress = interpolate(
            frame,
            [enterFrame, enterFrame + fps * 0.4],
            [0, 100],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const textOpacity = interpolate(
            frame,
            [enterFrame + fps * 0.2, enterFrame + fps * 0.5],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={name}
              style={{
                position: "relative",
                height: 60,
                borderRadius: 8,
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.03)",
              }}
            >
              {/* Chevron wipe */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${STEEL_BLUE} 0%, ${STEEL_BLUE}cc ${wipeProgress}%, transparent ${wipeProgress}%)`,
                  clipPath: `polygon(0 0, ${wipeProgress}% 0, ${wipeProgress + 5}% 100%, 0 100%)`,
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  paddingLeft: 24,
                  fontSize: 28,
                  fontWeight: 700,
                  color: wipeProgress > 50 ? "white" : STEEL_BLUE,
                  opacity: textOpacity,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

/* ---------- Trust Stats (9-13s) ---------- */
function TrustStats() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { value: 12, suffix: "+", label: "Years Serving\nSouth Florida" },
    { value: 4.8, suffix: "", label: "Star\nRating", isDecimal: true },
    { value: 85, suffix: "+", label: "Verified\nReviews" },
    { value: 24, suffix: "/7", label: "Emergency\nService" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_LIGHT,
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: WARM_GOLD,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Why Trust the Chief
      </div>

      <div
        style={{
          display: "flex",
          gap: 64,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {stats.map((stat, i) => {
          const enterDelay = i * fps * 0.4;
          const statScale = spring({
            frame: Math.max(0, frame - enterDelay),
            fps,
            config: { mass: 1, damping: 12 },
          });

          return (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                transform: `scale(${statScale})`,
                opacity: statScale,
              }}
            >
              <div
                style={{
                  fontSize: 72,
                  fontWeight: 900,
                  color: STEEL_BLUE,
                  fontFamily: "system-ui, sans-serif",
                  lineHeight: 1,
                }}
              >
                {stat.isDecimal ? (
                  <span>
                    {interpolate(
                      frame - enterDelay,
                      [0, fps * 1.5],
                      [0, stat.value],
                      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                    ).toFixed(1)}
                  </span>
                ) : (
                  <Sequence from={Math.round(enterDelay)}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </Sequence>
                )}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#6b7280",
                  marginTop: 8,
                  whiteSpace: "pre-line",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

/* ---------- CTA (13-15s) ---------- */
function CtaSlide() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const phoneScale = spring({
    frame: Math.max(0, frame - fps * 0.8),
    fps,
    config: { mass: 1.5, damping: 10 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: STEEL_BLUE,
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "white",
          opacity: titleOpacity,
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Ready to Take Command?
      </div>

      <div
        style={{
          transform: `scale(${phoneScale})`,
          background: WARM_GOLD,
          borderRadius: 16,
          padding: "24px 64px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke={STEEL_BLUE}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: STEEL_BLUE,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: 1,
          }}
        >
          (561) 556-4233
        </span>
      </div>

      <div
        style={{
          fontSize: 22,
          color: "rgba(255,255,255,0.7)",
          fontWeight: 500,
          fontFamily: "system-ui, sans-serif",
          opacity: interpolate(frame, [fps * 1.2, fps * 1.8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Same-Day Service Available &bull; Licensed &amp; Insured
      </div>
    </AbsoluteFill>
  );
}

/* ---------- Main Composition ---------- */
export const BrandIntro: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Badge reveal: 0-4s (frames 0-120) */}
      <Sequence from={0} durationInFrames={120}>
        <BadgeReveal />
      </Sequence>

      {/* Service highlights: 4-9s (frames 120-270) */}
      <Sequence from={120} durationInFrames={150}>
        <ServiceHighlights />
      </Sequence>

      {/* Trust stats: 9-13s (frames 270-390) */}
      <Sequence from={270} durationInFrames={120}>
        <TrustStats />
      </Sequence>

      {/* CTA: 13-15s (frames 390-450) */}
      <Sequence from={390} durationInFrames={60}>
        <CtaSlide />
      </Sequence>
    </AbsoluteFill>
  );
};
