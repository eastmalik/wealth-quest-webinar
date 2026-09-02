# Project TODO — The Generational Wealth Quest: Live Event Premiere

## Design System
- [x] Retro gaming typography (pixel/arcade display font + clean body font) via Google Fonts
- [x] Color system: deep matte black background, neon gold accents, red "debuff" hover states (OKLCH in Tailwind 4 theme)
- [x] Global styles: scanline/CRT texture, gold glow utilities, pixel-border utilities

## Section 1 — Above the Fold (Cinematic Hook)
- [x] Dark moody hero with giant golden countdown timer ticking to the live broadcast date
- [x] Right-side looping video/visual of Malik East on stage (generated asset, graceful fallback)
- [x] Main headline + sub-headline copy from brief (checking accounts are a trap / activate The Flow)
- [x] Brilliant matte gold CTA button: "CLAIM YOUR FREE TICKET TO THE SHOW" (scrolls to form)
- [x] Urgency banner: "Live Broadcast Hosted by Malik East | Limited Viewer Slots"

## Section 2 — The Stakes (Boss Cards)
- [x] Four dark boss cards with neon gold frames
- [x] Hover state glows red ("debuff" effect)
- [x] Boss 1: The Interest Siphon (No Budgeting)
- [x] Boss 2: The Credit Wall (Unfundable Profile)
- [x] Boss 3: The Exposure Trap (Zero Business Structure)
- [x] Boss 4: The Legacy Wipe (No Generational Plan)

## Section 3 — Act Breakdown (Live Setlist)
- [x] Vertical progression timeline styled like a fantasy map path
- [x] ACT I: THE TUTORIAL (Get Yo Mind Right!)
- [x] ACT II: THE FOUNDATION CAMPAIGN (Levels 1–3)
- [x] ACT III: THE ACCELERATION (Level 4 Engine)
- [x] ACT IV: THE HIGH SCORE (The Family Bank)

## Section 4 — The Proof (Watch What They Buy)
- [x] Sleek animated comparison graph: where normal people park money vs. where banks store reserves
- [x] FDIC $205.7B BOLI statistic callout with supporting copy

## Section 5 — Final CTA (The Gateway)
- [x] Centered minimal registration form with glowing gold border
- [x] Fields: First Name, Best Email, Cell Phone (for live SMS updates)
- [x] Golden glowing submit button: "ENTER THE ARENA (REGISTER FREE)"
- [x] Form posts to configurable external endpoint (VITE_REGISTRATION_ENDPOINT) with JSON fallback + mailto-free UX; success "ticket confirmed" state
- [x] Client-side validation for all three fields

## Cross-cutting
- [x] Smooth scroll navigation + sticky pixel-styled header
- [x] Responsive layout (mobile, tablet, desktop)
- [x] Scroll-reveal animations (framer-motion)
- [x] Vitest unit tests (countdown logic, form validation, content presence)
- [x] Footer with host credit + compliance-style disclaimer
- [x] Final visual verification via screenshots (desktop + mobile)
- [x] Hero media: cinematic animated stage visual (light sweep, floating particles, pulsing crowd glow) with graceful fallback to static generated image on load error
- [x] Support configurable VITE_REGISTRATION_ENDPOINT with local demo fallback (actual platform wiring deferred — user will supply their webhook/form URL later)
- [x] Support configurable event date via VITE_EVENT_DATE / client/src/lib/event.ts (final date deferred — user will edit; placeholder Sep 19, 2026 7PM CT in place)
- [x] Document both user-editable settings in README
- [x] Replace hero "LIVE FEED CAM 01" static Malik image with user-uploaded looping video (Man_holding_glowing_map_202609011939.mp4), autoplay/muted/loop with image fallback
