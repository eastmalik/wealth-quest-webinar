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
- [x] Research Malik East's real bio from 7bandfinancialagency.com/about
- [x] Add "Meet Your Host" section with Malik's real photo, bio, and credibility markers (gamified styling consistent with his brand)
- [x] Add scannable "What You'll Walk Away With" bullet block distilled from the four Acts
- [x] Rebrand: "The Generational Wealth Quest" → "The Great Generational Wealth Journey" everywhere (hero, header, footer, title, metadata, form record)
- [x] Rebrand: "Live Event Premiere" → "Live Webinar"; "Live Broadcast" → "Live Webinar" language (urgency banner, ticker, countdown label)
- [x] Rewrite the four boss cards in plain English: each card states the actual webinar topic and what attendees will learn (budgeting, credit, LLC structure, generational planning) — keep the card visual style, drop coded language
- [x] Replace hero sub-headline paragraph with user's mission statement copy
- [x] Change hero live-feed caption from "HOST • WEALTH STRATEGIST" to "HOST • BUSINESS CONSULTANT & ASSET PROTECTION SPECIALIST"
- [x] Center all hero content (headline, mission paragraph, countdown, CTA button, admission line) on mobile while keeping desktop left-aligned
- [x] Align the four webinar topic cards with the 7bandfinancialagency.com/game-map level names and framing for a coherent cross-site theme
- [x] Apply user's visual edits: Level 1 card → "Credit Restoration" / "Restore Your Foundation" with rewritten copy; intro → "the flow key levels"
- [x] Apply user's visual edits round 2: intro → "walks you through The Flow…"; Level 2 LLC card copy rewritten (LLC/EIN/D.U.N.S)
- [x] Apply user's visual edits round 3: remove all four "YOU'LL LEARN" card footers; rewrite Level 4 IUL copy ("reveal why I call it the Lifetime Line of Credit")
- [x] Apply user's visual edits round 4: Level 4 tagline → "Grow your Money Tree"; final card → "Transfer of Wealth" / "Sit Under the Shade → The Generational Tree" with estate-planning copy
- [x] Delete the "Choose Your Path / The Live Setlist" section (component, page usage, nav link, ACTS data, related test)
- [x] Build "The Bank's Game vs The Flow" comparison section (red ✕ card vs gold ✓ card, RPG-themed)
- [x] Upgrade registration confirmation state to a "Follow These Steps" quest-completion checklist (check email / add to calendar / save our number)
- [x] Add SMS consent checkbox to the registration form (required before submit when phone provided)
- [x] Add plain-language "We go live [day] at [time]" sentence near the countdown
- [x] Build "Your Loadout" item cards section (Ultimate Budget Guide + registration perks as RPG loot cards)
- [x] Derive the hero "We go live…" sentence from the shared event date (VITE_EVENT_DATE / event.ts) so it stays in sync with the countdown
- [x] Add a test covering the plain-language event-date string formatting
- [x] Apply user's visual edits round 5: ticker renames (FIND YOUR FLOW / BUILD YOUR OWN DREAM / LIMITED SLOTS), remove countdown "WEBINAR STARTS IN" label, clean up emptied kicker/intro tags, comparison section renames
- [x] Add Arise Credit Pro free resource guides (Consumer Law Reference Sheet, Credit Is Access Guide, Business Start-Up Guide) to the Loadout section with direct PDF links
- [x] Add the Meta & Instagram Ads Setup Lab Guide as a fourth bonus loot card
- [x] Apply user's visual edits round 6: bonus loot header → "BONUS LOOT — FREE GUIDES", first card rarity → "BONUS LOOT", remove "DOWNLOAD FREE PDF" labels (clean up dangling icon)
- [x] Convert the four guide cards from download links to static announcement cards (no outbound links, no download icon)
- [x] Apply user's visual edits round 7: rewrite loot cards 2+3 (Live IUL Illustration / Access to Me), loadout intro copy, delete host stats grid + badge spans, clean up emptied kicker tags
- [x] Remove the "Follow the Gold / Watch What They Buy" proof section (component, nav link, references)
- [x] Apply user's visual edits round 8: takeaways title → "WHAT YOU'LL WALK AWAY WITH KNOWING", remove its intro paragraph, nav "THE BOSSES" → "ABOUT"
