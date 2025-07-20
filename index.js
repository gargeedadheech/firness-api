const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample Exercise Data
let exercises = [
    // Previous categories are here...
    {
      "name": "Legs",
      "subcategories": [
        {
          "level": "Beginner",
          "exercises": [
            {"name": "Bodyweight Squats", "instructions": "Stand with feet shoulder-width apart, lower your hips back and down, then return to standing."},
            {"name": "Glute Bridges", "instructions": "Lie on your back, bend knees, lift hips toward ceiling while squeezing glutes, lower and repeat."},
            {"name": "Wall Sits", "instructions": "Lean against a wall with knees bent at 90 degrees, hold the position."},
            {"name": "Step-ups", "instructions": "Step onto a sturdy surface with one leg, push through heel to stand, step down and switch."}
          ]
        },
        {
          "level": "Intermediate",
          "exercises": [
            {"name": "Bulgarian Split Squats", "instructions": "Place one foot behind on elevated surface, lower back knee toward floor, return to start."},
            {"name": "Jump Squats", "instructions": "Perform a squat, then explode upward into a jump, land softly and repeat."},
            {"name": "Walking Lunges", "instructions": "Step forward into lunge, lower back knee to floor, bring back leg forward into next lunge."},
            {"name": "Calf Raises", "instructions": "Stand tall, lift heels to stand on toes, squeeze calves, lower and repeat."},
            {"name": "Sissy Squats", "instructions": "Lean back while keeping hips forward, bend knees and lower body, return to upright position."}
          ]
        },
        {
          "level": "Advanced",
          "exercises": [
            {"name": "Pistol Squats", "instructions": "Balance on one leg, extend other leg forward, lower into squat and rise back up."},
            {"name": "Shrimp Squats", "instructions": "Hold back ankle, squat down on one leg until back knee touches floor, return up."},
            {"name": "Skater Squats", "instructions": "Balance on one leg, lower back knee toward floor behind you without touching ground, return up."},
            {"name": "Nordic Curls", "instructions": "Anchor feet, lower upper body forward slowly using hamstrings, push up to return."},
            {"name": "Single-leg Glute Bridge", "instructions": "Lie on back, lift one leg, push through heel of other foot to lift hips, lower and repeat."},
            {"name": "Box Jumps", "instructions": "Jump explosively onto a sturdy box, land softly with bent knees, stand tall and step down."},
            {"name": "Dragon Squats", "instructions": "Step one leg behind and across the other, bend into a deep squat while keeping chest up."}
          ]
        }
      ]
    },
    {
      "name": "Static Holds",
      "exercises": [
        {"name": "Wall Sit", "instructions": "Slide down a wall until thighs are parallel to floor, knees at 90 degrees, hold."},
        {"name": "Plank (all variations)", "instructions": "Hold body straight on forearms or hands, engage core, avoid sagging hips."},
        {"name": "L-sit", "instructions": "Support yourself on parallel bars or floor, lift legs straight in front, hold position."},
        {"name": "Elbow Lever", "instructions": "Place elbows into midsection, lean forward and balance entire body off ground, hold."},
        {"name": "Planche Hold", "instructions": "With hands under hips, lean body forward keeping feet off the floor, hold parallel to ground."},
        {"name": "Front Lever Hold", "instructions": "Hang from bar, lift body into horizontal position with core and back strength, hold."},
        {"name": "Back Lever Hold", "instructions": "From rings or bar, rotate body facing down, hold a straight horizontal line."},
        {"name": "Human Flag Hold", "instructions": "Hold vertical pole, lift body sideways into horizontal flag position, use core and arm strength."},
        {"name": "Handstand Hold", "instructions": "Kick up into handstand against wall or freestanding, hold body vertically with straight arms."},
        {"name": "Crow Pose", "instructions": "Place knees on upper arms, lean forward until feet lift off ground, balance with arms."}
      ]
    },
    {
      "name": "Freestyle / Dynamic Skills",
      "exercises": [
        {"name": "Muscle-up to Planche", "instructions": "Perform a muscle-up, lean forward into planche position with straight body, hold or push up."},
        {"name": "360 Pull-ups", "instructions": "Pull explosively, release bar mid-air, rotate 360° and catch the bar to continue."},
        {"name": "Clap Push-ups", "instructions": "Push explosively from bottom of push-up and clap hands before landing back in push-up."},
        {"name": "Superhuman Push-ups", "instructions": "Explode off ground with full body, arms and legs lifted, land and repeat."},
        {"name": "Bar Spins", "instructions": "Swing around a pull-up bar in full circle using grip and momentum, land safely."},
        {"name": "Bar Flys", "instructions": "Jump and fly between bars with momentum and precision, like in freestyle routines."},
        {"name": "One-arm Handstand", "instructions": "Balance in handstand using only one hand, keep core tight and adjust weight slowly."},
        {"name": "Full Planche", "instructions": "Hold body parallel to floor with arms straight, legs extended, and feet off the ground."},
        {"name": "Front Lever to Muscle-up", "instructions": "Start in front lever, swing into pull-up and transition to muscle-up above bar."},
        {"name": "Handstand to Elbow Planche", "instructions": "Lower from handstand onto bent elbows into a planche position with control."},
        {"name": "Switch Grip Muscle-ups", "instructions": "Perform muscle-up while switching grip mid-air or transitioning from overhand to underhand."}
      ]
    } 
  ]
 


// Home route - working ✔️
app.get('/', (req, res) => {
    res.send('Welcome to Fitness API!');
});

// 👇 This should work now
app.get('/exercises', (req, res) => {
    res.json(exercises);
});

// Add this line 👇
const workoutRoutes = require('./routes/workouts');
app.use('/workouts', workoutRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
