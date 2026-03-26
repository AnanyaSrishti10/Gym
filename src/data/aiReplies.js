export function getAIReply(q) {
  const l = q.toLowerCase();
  if (l.includes("workout") || l.includes("plan") || l.includes("training"))
    return "Here's a 4-day split for you:\n\n💪Day 1 – Push (Chest, Shoulders, Triceps)\n🔙 Day 2 – Pull (Back, Biceps)\n😴 Day 3 – Rest / Active recovery\n🦵 Day 4 – Legs (Quads, Hamstrings, Glutes)\n⚡ Day 5 – Full Body / HIIT\n\nWarm up 5 min before each session. You've got this!";
  if (l.includes("lose") || l.includes("fat") || l.includes("cut"))
    return "For fat loss:\n\n✅ Caloric deficit of 300–500 kcal/day\n✅ 3–4 cardio sessions per week\n✅ Strength train 3× to preserve muscle\n✅ Sleep 7–9 hours — non-negotiable\n✅ Track food in the Nutrition tab\n\nConsistency beats perfection every time! 🔥";
  if (l.includes("muscle") || l.includes("bulk") || l.includes("gain"))
    return "To maximise muscle growth:\n\n🍗 Protein – 1.6–2.2g per kg bodyweight\n📈 Progressive overload – add weight weekly\n😴 Sleep – muscle grows during rest\n📅 Hit each muscle group 2× per week\n🥑 Caloric surplus of +200–300 kcal\n\nCheck the Strength library for programs!";
  if (l.includes("protein") || l.includes("nutrition") || l.includes("diet"))
    return "Nutrition essentials:\n\n🥚 Protein: 1.6–2.2g/kg bodyweight\n🍚 Carbs: fuel your workouts, go higher on training days\n🥑 Fat: at least 0.8g/kg for hormones\n💧 Water: 2.5–3.5L daily minimum\n\nLog everything in the Nutrition tab!";
  if (l.includes("sleep") || l.includes("recover") || l.includes("rest"))
    return "Recovery is where you actually grow:\n\n😴 7–9 hours of sleep every night\n🧘 1–2 rest days per week (active recovery)\n🧊 Cold exposure reduces soreness\n🫧 Foam rolling improves mobility\n💧 Hydrate — 3L+ on training days\n\nThe grind doesn't stop during rest — it accelerates!";
  if (l.includes("motivat") || l.includes("give up") || l.includes("hard") || l.includes("tired") || l.includes("inspire"))
    return "Listen — every champion felt exactly like you do right now. The difference? They showed up anyway. 🔥\n\nProgress isn't always visible. But it's ALWAYS happening.\n\nOne rep. One meal. One night of good sleep. That's all it takes today. 💪\n\nYou didn't come this far to only come this far.";
  if (l.includes("bmi") || l.includes("weight") || l.includes("body"))
    return "Use the Metrics & Calculator tabs to track your BMI and body measurements! 📏\n\nHealthy BMI range: 18.5–24.9\nFocus on trends over time, not daily fluctuations.\n\nMuscle is denser than fat, so the scale alone doesn't tell the full story!";
  if (l.includes("hello") || l.includes("hi") || l.includes("hey"))
    return "Hey there, champion! 👋 I'm FORGE AI, your personal fitness coach.\n\nI can help you with:\n🏋️ Workout plans & programs\n🥗 Nutrition & macro guidance\n💤 Recovery strategies\n🔥 Motivation when you need it\n\nWhat are we working on today?";
  return "Great question! I can help with workouts, nutrition, recovery, body metrics, and motivation.\n\nTry asking:\n• 'Give me a workout plan'\n• 'How do I lose fat fast?'\n• 'I need motivation'\n• 'How much protein do I need?'\n\nI'm here 24/7 — ask away! 🤖";
   if (l.includes("ananyaa") || l.includes("plan") || l.includes("training"))
    return "Here's a 4-day split for you:\n\n💪 Day 1 – Push (Chest, Shoulders, Triceps)\n🔙 Day 2 – Pull (Back, Biceps)\n😴 Day 3 – Rest / Active recovery\n🦵 Day 4 – Legs (Quads, Hamstrings, Glutes)\n⚡ Day 5 – Full Body / HIIT\n\nWarm up 10 min before each session. You've got this!";

}
