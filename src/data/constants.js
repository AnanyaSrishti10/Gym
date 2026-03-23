export const WORKOUTS = [
  { id:1, name:"Power Push",       cat:"Strength",   diff:"Hard",   time:"45 min", cal:420, emoji:"💪", prog:80,  bg:"#1a1a0a" },
  { id:2, name:"Morning Run",      cat:"Cardio",     diff:"Medium", time:"30 min", cal:320, emoji:"🏃", prog:65,  bg:"#0a1a1a" },
  { id:3, name:"Core Crusher",     cat:"Core",       diff:"Hard",   time:"20 min", cal:240, emoji:"🔥", prog:100, bg:"#1a0a0a" },
  { id:4, name:"Yoga Flow",        cat:"Flexibility", diff:"Easy",  time:"40 min", cal:180, emoji:"🧘", prog:30,  bg:"#0a0a1a" },
  { id:5, name:"HIIT Blast",       cat:"Cardio",     diff:"Hard",   time:"25 min", cal:380, emoji:"⚡", prog:55,  bg:"#1a1a0a" },
  { id:6, name:"Pull Day",         cat:"Strength",   diff:"Medium", time:"50 min", cal:390, emoji:"🏋️", prog:70,  bg:"#0a1a0a" },
  { id:7, name:"Cycling Sprint",   cat:"Cardio",     diff:"Medium", time:"35 min", cal:350, emoji:"🚴", prog:45,  bg:"#0a0a1a" },
  { id:8, name:"Stretch & Recover",cat:"Flexibility", diff:"Easy",  time:"30 min", cal:100, emoji:"🌿", prog:90,  bg:"#1a1a1a" },
];

export const EXERCISES = [
  { name:"Bench Press",          detail:"4 × 10 reps · 80 kg" },
  { name:"Incline Dumbbell Press",detail:"3 × 12 reps · 30 kg" },
  { name:"Cable Flies",          detail:"3 × 15 reps · 25 kg" },
  { name:"Tricep Dips",          detail:"3 × 12 reps · Bodyweight" },
  { name:"Shoulder Press",       detail:"3 × 10 reps · 40 kg" },
];

export const MEALS = [
  { icon:"🥗", name:"Greek Salad Bowl",       time:"8:00 AM",  cals:380, p:22, c:30, f:14 },
  { icon:"🍌", name:"Protein Smoothie",        time:"10:30 AM", cals:290, p:28, c:35, f:5  },
  { icon:"🍗", name:"Grilled Chicken & Rice",  time:"1:00 PM",  cals:560, p:48, c:58, f:10 },
  { icon:"🥜", name:"Almond Snack",            time:"4:00 PM",  cals:200, p:7,  c:8,  f:16 },
  { icon:"🥩", name:"Steak & Veggies",         time:"7:30 PM",  cals:620, p:55, c:20, f:28 },
];

export const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export const SCHEDULE = [
  { time:"6:30",  name:"Morning Run", meta:"5 km · Outdoor",  status:"done",     emoji:"🏃" },
  { time:"12:00", name:"Core & Abs",  meta:"20 min · Gym",    status:"done",     emoji:"🔥" },
  { time:"6:00",  name:"Push Day",    meta:"45 min · Gym",    status:"upcoming", emoji:"💪" },
  { time:"9:00",  name:"Evening Yoga",meta:"30 min · Home",   status:"upcoming", emoji:"🧘" },
];

export const WEEKLY = [65, 80, 45, 90, 70, 85, 55];

export const TRACKS = [
  { title:"Beast Mode",    artist:"Power Mix",    duration:"3:42", emoji:"🔥" },
  { title:"Iron Will",     artist:"Gym Anthems",  duration:"4:15", emoji:"💪" },
  { title:"Push The Limit",artist:"Workout FM",   duration:"3:58", emoji:"⚡" },
  { title:"Champion",      artist:"Elite Sports", duration:"4:30", emoji:"🏆" },
  { title:"Unleashed",     artist:"Raw Energy",   duration:"3:22", emoji:"🎯" },
];

export const TESTIMONIALS = [
  { stars:5, text:"FitForge completely transformed my training. Lost 18 kg in 5 months and built the most muscle I've ever had.", name:"Marcus J.",  handle:"@marcuslifts",  av:"🧑‍🦱", bg:"#181808" },
  { stars:5, text:"I've tried every fitness app. Nothing comes close. The workout library alone is worth it.",                   name:"Priya S.",    handle:"@priyafits",    av:"👩",    bg:"#081818" },
  { stars:5, text:"As a personal trainer I recommend FitForge to all clients. Analytics are exactly what athletes need.",       name:"Coach Tyler", handle:"@coachtyler",   av:"🧑‍🦳", bg:"#180818" },
  { stars:5, text:"HIIT programs are genuinely brutal. Hit 5 personal records this month — unbelievable results.",              name:"Zara M.",     handle:"@zarastrong",   av:"👩‍🦰", bg:"#080818" },
  { stars:5, text:"The meal planning blew me away. Hitting macros has never been easier, energy through the roof.",             name:"Jake R.",     handle:"@jakerun",      av:"🧔",    bg:"#181818" },
  { stars:5, text:"Progress charts and streak system keep me so motivated. Haven't missed a workout in 47 days!",              name:"Aisha K.",    handle:"@aishafitness", av:"👩‍🦱", bg:"#081808" },
];

export const PLANS = [
  { name:"STARTER", desc:"Perfect for beginners",  price:"Free", period:"Forever free", featured:false,
    feats:["10 workout plans","Basic nutrition tracking","Weekly schedule","Progress charts","Community access"] },
  { name:"PRO",     desc:"For serious athletes",   price:"$12",  period:"per month",    featured:true,
    feats:["300+ workout plans","Full nutrition AI","Advanced analytics","Custom scheduling","Priority support","Challenges & badges"] },
  { name:"ELITE",   desc:"For professionals",      price:"$29",  period:"per month",    featured:false,
    feats:["Everything in Pro","1-on-1 AI coach","Custom meal plans","Video form analysis","API integrations","Team management"] },
];

export const TEAM = [
  { emoji:"🧑‍💻", name:"Alex Chen",     role:"CEO & Co-Founder"       },
  { emoji:"👩‍🔬", name:"Dr. Mia Torres",role:"Head of Sports Science"  },
  { emoji:"🏋️",  name:"Ben Walsh",      role:"Lead Trainer"            },
  { emoji:"👩‍💼", name:"Sara Patel",    role:"Head of Design"          },
];

export const AI_CHIPS = {
  "All":        ["Workout plan 📋","Lose fat fast","Build muscle","How much protein?","I need motivation 🔥"],
  "💪 Strength":["Best chest exercises","How to deadlift","Progressive overload tips","Upper/lower split?"],
  "🏃 Cardio":  ["Best cardio for fat loss","HIIT vs steady state","Running form tips","VO2 max improvement"],
  "🥗 Nutrition":["Best pre-workout meal","How many carbs?","Meal prep ideas","Intermittent fasting?"],
  "😴 Recovery":["How to reduce soreness","Best sleep for gains","Active recovery ideas","Deload week tips"],
  "🔥 Motivation":["I want to give up","How to stay consistent","Build better habits","Inspire me!"],
};

export const AI_MOODS = ["All","💪 Strength","🏃 Cardio","🥗 Nutrition","😴 Recovery","🔥 Motivation"];
