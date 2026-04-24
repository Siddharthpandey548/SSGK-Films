'use client';

import styles from './FloralOverlay.module.css';

export default function FloralOverlay() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      {/* === TOP LEFT — Teal leaves cluster === */}
      <svg className={`${styles.element} ${styles.topLeft}`} width="320" height="350" viewBox="0 0 320 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Branch stems */}
        <path d="M-20,20 Q60,80 100,160 Q130,220 120,300" stroke="#2e5c3e" strokeWidth="1.5" opacity="0.35" fill="none"/>
        <path d="M30,-10 Q80,60 110,140 Q130,200 125,270" stroke="#43855a" strokeWidth="1" opacity="0.25" fill="none"/>

        {/* Leaves */}
        <g opacity="0.7" filter="url(#leafBlur)">
          <path d="M40,50 Q65,20 55,0 Q45,15 30,20 Q30,40 40,50Z" fill="#1f402b"/>
          <path d="M60,90 Q90,60 82,35 Q72,55 55,58 Q52,78 60,90Z" fill="#2e5c3e"/>
          <path d="M85,140 Q115,110 108,80 Q96,100 78,105 Q78,130 85,140Z" fill="#12261a" opacity="0.8"/>
          <path d="M95,195 Q125,165 118,140 Q108,155 90,160 Q88,185 95,195Z" fill="#2e5c3e" opacity="0.7"/>
          <path d="M30,120 Q50,85 38,65 Q30,80 18,82 Q20,108 30,120Z" fill="#43855a" opacity="0.6"/>
          <path d="M110,250 Q140,220 132,195 Q122,210 105,215 Q105,240 110,250Z" fill="#1f402b" opacity="0.65"/>
        </g>

        {/* Large leaves with veins */}
        <g opacity="0.55">
          <path d="M15,180 Q55,130 40,90 Q30,125 5,135 Q5,170 15,180Z" fill="#12261a"/>
          <line x1="15" y1="180" x2="38" y2="100" stroke="#1a3323" strokeWidth="0.5" opacity="0.4"/>
        </g>
        <g opacity="0.5">
          <path d="M70,280 Q110,240 100,200 Q88,225 60,230 Q58,265 70,280Z" fill="#2e5c3e"/>
          <line x1="70" y1="280" x2="98" y2="210" stroke="#1f402b" strokeWidth="0.4" opacity="0.3"/>
        </g>

        <defs>
          <filter id="leafBlur">
            <feGaussianBlur stdDeviation="0.5"/>
          </filter>
        </defs>
      </svg>

      {/* === TOP RIGHT — Mirror leaves cluster === */}
      <svg className={`${styles.element} ${styles.topRight}`} width="320" height="350" viewBox="0 0 320 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M340,20 Q260,80 220,160 Q190,220 200,300" stroke="#2e5c3e" strokeWidth="1.5" opacity="0.35" fill="none"/>
        <path d="M290,-10 Q240,60 210,140 Q190,200 195,270" stroke="#43855a" strokeWidth="1" opacity="0.25" fill="none"/>

        <g opacity="0.7">
          <path d="M280,50 Q255,20 265,0 Q275,15 290,20 Q290,40 280,50Z" fill="#1f402b"/>
          <path d="M260,90 Q230,60 238,35 Q248,55 265,58 Q268,78 260,90Z" fill="#2e5c3e"/>
          <path d="M235,140 Q205,110 212,80 Q224,100 242,105 Q242,130 235,140Z" fill="#12261a" opacity="0.8"/>
          <path d="M225,195 Q195,165 202,140 Q212,155 230,160 Q232,185 225,195Z" fill="#2e5c3e" opacity="0.7"/>
          <path d="M290,120 Q270,85 282,65 Q290,80 302,82 Q300,108 290,120Z" fill="#43855a" opacity="0.6"/>
          <path d="M210,250 Q180,220 188,195 Q198,210 215,215 Q215,240 210,250Z" fill="#1f402b" opacity="0.65"/>
        </g>

        <g opacity="0.55">
          <path d="M305,180 Q265,130 280,90 Q290,125 315,135 Q315,170 305,180Z" fill="#12261a"/>
        </g>
        <g opacity="0.5">
          <path d="M250,280 Q210,240 220,200 Q232,225 260,230 Q262,265 250,280Z" fill="#2e5c3e"/>
        </g>
      </svg>

      {/* === BOTTOM LEFT — Rich botanical cluster === */}
      <svg className={`${styles.element} ${styles.bottomLeft}`} width="340" height="380" viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,380 Q50,310 90,240 Q110,200 100,150" stroke="#2e5c3e" strokeWidth="1.5" opacity="0.35" fill="none"/>
        <path d="M30,390 Q80,330 100,270 Q115,230 110,180" stroke="#43855a" strokeWidth="1" opacity="0.25" fill="none"/>

        <g opacity="0.7">
          <path d="M40,340 Q70,310 62,280 Q50,300 35,302 Q32,328 40,340Z" fill="#1f402b"/>
          <path d="M65,290 Q95,260 88,230 Q76,250 58,255 Q58,278 65,290Z" fill="#2e5c3e"/>
          <path d="M80,240 Q110,210 102,180 Q92,198 72,200 Q72,228 80,240Z" fill="#12261a" opacity="0.8"/>
          <path d="M25,280 Q48,245 38,225 Q30,240 15,242 Q15,268 25,280Z" fill="#43855a" opacity="0.6"/>
          <path d="M95,190 Q125,160 118,130 Q106,150 88,155 Q88,178 95,190Z" fill="#2e5c3e" opacity="0.65"/>
        </g>

        <g opacity="0.55">
          <path d="M50,370 Q85,325 72,290 Q62,315 35,322 Q38,358 50,370Z" fill="#12261a"/>
        </g>
      </svg>

      {/* === BOTTOM RIGHT — Rich botanical cluster === */}
      <svg className={`${styles.element} ${styles.bottomRight}`} width="340" height="380" viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M360,380 Q290,310 250,240 Q230,200 240,150" stroke="#2e5c3e" strokeWidth="1.5" opacity="0.35" fill="none"/>
        <path d="M310,390 Q260,330 240,270 Q225,230 230,180" stroke="#43855a" strokeWidth="1" opacity="0.25" fill="none"/>

        <g opacity="0.7">
          <path d="M300,340 Q270,310 278,280 Q290,300 305,302 Q308,328 300,340Z" fill="#1f402b"/>
          <path d="M275,290 Q245,260 252,230 Q264,250 282,255 Q282,278 275,290Z" fill="#2e5c3e"/>
          <path d="M260,240 Q230,210 238,180 Q248,198 268,200 Q268,228 260,240Z" fill="#12261a" opacity="0.8"/>
          <path d="M315,280 Q292,245 302,225 Q310,240 325,242 Q325,268 315,280Z" fill="#43855a" opacity="0.6"/>
          <path d="M245,190 Q215,160 222,130 Q234,150 252,155 Q252,178 245,190Z" fill="#2e5c3e" opacity="0.65"/>
        </g>

        <g opacity="0.55">
          <path d="M290,370 Q255,325 268,290 Q278,315 305,322 Q302,358 290,370Z" fill="#12261a"/>
        </g>
      </svg>

      {/* === Golden Flowers — Marigolds === */}
      {/* Top-left marigold */}
      <svg className={`${styles.flower} ${styles.flowerTL}`} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <g transform="translate(30,30)">
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#e8b830" opacity="0.85" transform="rotate(0)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#daa520" opacity="0.8" transform="rotate(45)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#e8b830" opacity="0.85" transform="rotate(90)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#daa520" opacity="0.8" transform="rotate(135)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#e8b830" opacity="0.85" transform="rotate(180)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#daa520" opacity="0.8" transform="rotate(225)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#e8b830" opacity="0.85" transform="rotate(270)"/>
          <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#daa520" opacity="0.8" transform="rotate(315)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#f0c850" opacity="0.9" transform="rotate(22.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#edc040" opacity="0.85" transform="rotate(67.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#f0c850" opacity="0.9" transform="rotate(112.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#edc040" opacity="0.85" transform="rotate(157.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#f0c850" opacity="0.9" transform="rotate(202.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#edc040" opacity="0.85" transform="rotate(247.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#f0c850" opacity="0.9" transform="rotate(292.5)"/>
          <ellipse cx="0" cy="-8" rx="4" ry="6" fill="#edc040" opacity="0.85" transform="rotate(337.5)"/>
          <circle cx="0" cy="0" r="5" fill="#d49a18" opacity="0.95"/>
        </g>
      </svg>

      {/* Top-center large golden flower (over arch crown) */}
      <svg className={`${styles.flower} ${styles.flowerTC}`} width="80" height="80" viewBox="0 0 80 80" fill="none">
        <g transform="translate(40,40)">
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#e8b830" opacity="0.9" transform="rotate(0)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#daa520" opacity="0.85" transform="rotate(36)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#e8b830" opacity="0.9" transform="rotate(72)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#daa520" opacity="0.85" transform="rotate(108)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#e8b830" opacity="0.9" transform="rotate(144)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#daa520" opacity="0.85" transform="rotate(180)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#e8b830" opacity="0.9" transform="rotate(216)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#daa520" opacity="0.85" transform="rotate(252)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#e8b830" opacity="0.9" transform="rotate(288)"/>
          <ellipse cx="0" cy="-16" rx="7" ry="12" fill="#daa520" opacity="0.85" transform="rotate(324)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f0c850" opacity="0.95" transform="rotate(18)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#edc040" opacity="0.9" transform="rotate(54)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f0c850" opacity="0.95" transform="rotate(90)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#edc040" opacity="0.9" transform="rotate(126)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f0c850" opacity="0.95" transform="rotate(162)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#edc040" opacity="0.9" transform="rotate(198)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f0c850" opacity="0.95" transform="rotate(234)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#edc040" opacity="0.9" transform="rotate(270)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f0c850" opacity="0.95" transform="rotate(306)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#edc040" opacity="0.9" transform="rotate(342)"/>
          <circle cx="0" cy="0" r="6.5" fill="#d49a18"/>
        </g>
      </svg>

      {/* Bottom-left marigold */}
      <svg className={`${styles.flower} ${styles.flowerBL}`} width="55" height="55" viewBox="0 0 55 55" fill="none">
        <g transform="translate(27.5,27.5)">
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#e8b830" opacity="0.8" transform="rotate(0)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#daa520" opacity="0.75" transform="rotate(51.4)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#e8b830" opacity="0.8" transform="rotate(102.8)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#daa520" opacity="0.75" transform="rotate(154.2)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#e8b830" opacity="0.8" transform="rotate(205.6)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#daa520" opacity="0.75" transform="rotate(257)"/>
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#e8b830" opacity="0.8" transform="rotate(308.4)"/>
          <circle cx="0" cy="0" r="4.5" fill="#d49a18" opacity="0.9"/>
        </g>
      </svg>

      {/* Bottom-right small flowers */}
      <svg className={`${styles.flower} ${styles.flowerBR}`} width="50" height="50" viewBox="0 0 50 50" fill="none">
        <g transform="translate(25,25)">
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#e8b830" opacity="0.8" transform="rotate(0)"/>
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#daa520" opacity="0.75" transform="rotate(60)"/>
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#e8b830" opacity="0.8" transform="rotate(120)"/>
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#daa520" opacity="0.75" transform="rotate(180)"/>
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#e8b830" opacity="0.8" transform="rotate(240)"/>
          <ellipse cx="0" cy="-9" rx="4.5" ry="7" fill="#daa520" opacity="0.75" transform="rotate(300)"/>
          <circle cx="0" cy="0" r="4" fill="#d49a18" opacity="0.85"/>
        </g>
      </svg>

      {/* === Jasmine flowers (small white/gold petals) === */}
      {[
        { className: styles.jasmine1, x: '18%', y: '22%' },
        { className: styles.jasmine2, x: '78%', y: '18%' },
        { className: styles.jasmine3, x: '12%', y: '72%' },
        { className: styles.jasmine4, x: '82%', y: '75%' },
        { className: styles.jasmine5, x: '55%', y: '12%' },
      ].map((j, i) => (
        <svg key={i} className={`${styles.jasmine} ${j.className}`} style={{ left: j.x, top: j.y }} width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g transform="translate(11,11)">
            <ellipse cx="0" cy="-4.5" rx="2.2" ry="4.5" fill="#fff8e7" opacity="0.85" transform="rotate(0)"/>
            <ellipse cx="0" cy="-4.5" rx="2.2" ry="4.5" fill="#fff5dc" opacity="0.8" transform="rotate(72)"/>
            <ellipse cx="0" cy="-4.5" rx="2.2" ry="4.5" fill="#fff8e7" opacity="0.85" transform="rotate(144)"/>
            <ellipse cx="0" cy="-4.5" rx="2.2" ry="4.5" fill="#fff5dc" opacity="0.8" transform="rotate(216)"/>
            <ellipse cx="0" cy="-4.5" rx="2.2" ry="4.5" fill="#fff8e7" opacity="0.85" transform="rotate(288)"/>
            <circle cx="0" cy="0" r="1.8" fill="#f5d98a" opacity="0.9"/>
          </g>
        </svg>
      ))}

      {/* === Pearl Bead Clusters === */}
      {[
        { className: styles.beads1, x: '15%', y: '16%' },
        { className: styles.beads2, x: '80%', y: '25%' },
        { className: styles.beads3, x: '10%', y: '65%' },
        { className: styles.beads4, x: '85%', y: '70%' },
        { className: styles.beads5, x: '35%', y: '8%' },
      ].map((b, i) => (
        <svg key={`b${i}`} className={`${styles.beadCluster} ${b.className}`} style={{ left: b.x, top: b.y }} width="30" height="25" viewBox="0 0 30 25" fill="none">
          <circle cx="8" cy="10" r="4" fill="#f0dca0" opacity="0.7" stroke="#d4a843" strokeWidth="0.5"/>
          <circle cx="18" cy="7" r="3" fill="#e8d090" opacity="0.6" stroke="#d4a843" strokeWidth="0.4"/>
          <circle cx="22" cy="15" r="2.5" fill="#f0dca0" opacity="0.55" stroke="#d4a843" strokeWidth="0.3"/>
          <circle cx="12" cy="18" r="2" fill="#e8d090" opacity="0.5" stroke="#d4a843" strokeWidth="0.3"/>
          {/* Tiny sparkle highlights on beads */}
          <circle cx="6.5" cy="8.5" r="1" fill="white" opacity="0.4"/>
          <circle cx="16.5" cy="5.5" r="0.8" fill="white" opacity="0.35"/>
        </svg>
      ))}
    </div>
  );
}
