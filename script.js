// Task data for each level, with points and punishments
const levels = [
    // Level 1 Tasks
    [
        { task: "Start a basic skincare routine (wash your face with a gentle face wash in the morning and evening).", points: "+10 Confidence", punishment: "No phone for 30 minutes after dinner." },
        { task: "Put together an outfit that makes you feel confident and stylish.", points: "+5 Style", punishment: "Do 10 minutes of push-ups or sit-ups." },
        { task: "Stand straight with shoulders back for 5 minutes whenever you catch yourself slouching.", points: "+5 Confidence", punishment: "Do 1-minute wall sits." },
        { task: "Start a casual conversation with your coaching crush.", points: "+15 Confidence", punishment: "Write a reflection on why you hesitated to talk." },
        { task: "Do a quick workout (20-minute bodyweight routine like push-ups, squats, or planking).", points: "+10 Strength", punishment: "Jog in place for 5 minutes." },
        { task: "Spend 5 minutes experimenting with your hair.", points: "+10 Style", punishment: "Take a cold shower for 2 minutes." },
        { task: "Compliment someone on something specific.", points: "+10 Confidence", punishment: "No social media for the next hour." }
    ],
    // Level 2 Tasks
    [
        { task: "Try a new combination of clothes or accessories.", points: "+15 Style", punishment: "Read or journal about fashion for 30 minutes." },
        { task: "Spend at least 5 minutes fully focused on something—no distractions.", points: "+10 Mental Clarity", punishment: "Do 10 minutes of mindful breathing exercises." },
        { task: "Initiate a more meaningful conversation with your crush.", points: "+30 Confidence", punishment: "Record a video of yourself talking about your feelings." },
        { task: "Trim your nails, facial hair, and take extra care of your skin.", points: "+20 Style", punishment: "Write a list of five things you like about yourself." },
        { task: "Flirt lightly with your crush by giving a playful compliment.", points: "+40 Confidence", punishment: "Do 50 jumping jacks." },
        { task: "Invite your crush to hang out casually.", points: "+50 Relationship", punishment: "Create a plan for how you will ask her out next time." },
        { task: "Take charge in a group conversation or activity.", points: "+50 Leadership", punishment: "Do 15 minutes of talking to yourself about your strengths." }
    ],
    // Level 3 Tasks
    [
        { task: "Work on your physical upgrade (trim nails, facial hair, etc.).", points: "+20 Style", punishment: "Reflect on how to improve physically." },
        { task: "Make your hair look good every day.", points: "+10 Style", punishment: "Spend 15 minutes styling your hair." },
        { task: "Start taking the initiative to plan dates with friends or your crush.", points: "+30 Relationship", punishment: "Do 30 minutes of cardio." },
        { task: "Strengthen your self-confidence by participating in a social activity.", points: "+40 Confidence", punishment: "Write a personal letter to yourself." },
        { task: "Help someone else (give advice, lend a hand, or provide support).", points: "+25 Relationship", punishment: "Make a list of things you want to learn to help others." },
        { task: "Reflect on your day and think about how you can improve your interactions.", points: "+10 Mental Clarity", punishment: "Write about your reflection for 10 minutes." },
        { task: "Dress in a way that stands out and makes you feel confident.", points: "+25 Style", punishment: "Do 30 sit-ups or squats." }
    ],
    // Level 4 Tasks
    [
        { task: "Create an outfit that makes you feel unstoppable.", points: "+40 Style", punishment: "Do 50 push-ups." },
        { task: "Increase your confidence with new experiences or challenges.", points: "+50 Confidence", punishment: "Do 20 burpees." },
        { task: "Compliment your crush every day.", points: "+25 Confidence", punishment: "Write a note about why compliments matter." },
        { task: "Take the initiative to ask someone for a favor or help.", points: "+20 Confidence", punishment: "Do 10 jumping jacks." }
    ],
    // Level 5 Tasks
    [
        { task: "Improve your public speaking or leadership skills.", points: "+50 Leadership", punishment: "Speak for 10 minutes in front of a mirror." },
        { task: "Strengthen your relationship by communicating more openly.", points: "+60 Relationship", punishment: "Write a letter about your progress." },
        { task: "Stay consistent with your grooming and style routines.", points: "+40 Style", punishment: "Spend 15 minutes making improvements." },
        { task: "Engage in a social activity that forces you to step out of your comfort zone.", points: "+50 Confidence", punishment: "Do 30 squats or push-ups." }
    ]
];

// Initial state setup
let currentLevel = 0;
let currentDay = 0;
let taskCompleted = new Array(7).fill(false);

function displayTasks() {
    const taskList = document.getElementById("taskList");
    const dayDisplay = document.getElementById("dayDisplay");
    const levelDisplay = document.getElementById("levelDisplay");

    // Clear existing tasks
    taskList.innerHTML = '';
    const levelTasks = levels[currentLevel];

    // Display current level and day
    levelDisplay.innerText = `Level ${currentLevel + 1}: Tasks`;
    dayDisplay.innerText = `Day ${currentDay + 1}`;

    // Create task elements
    levelTasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContent = `
            <label><input type="checkbox" id="task-${index}" onclick="toggleTask(${index})"> ${task.task}</label>
            <div class="points">${task.points}</div>
            <div class="punishment">Punishment: ${task.punishment}</div>
        `;
        taskElement.innerHTML = taskContent;
        taskList.appendChild(taskElement);
    });
}

function toggleTask(index) {
    taskCompleted[index] = !taskCompleted[index];
}

document.getElementById("nextLevelButton").addEventListener("click", () => {
    if (taskCompleted.every(task => task)) {
        currentDay++;
        if (currentDay >= 7) {
            currentDay = 0;
            currentLevel++;
        }
        displayTasks();
        showFeedback("success", "Great! You've completed all tasks for today!");
    } else {
        showFeedback("fail", "You missed some tasks. Keep going!");
    }
});

function showFeedback(type, message) {
    const feedback = document.getElementById("feedback");
    feedback.classList.remove('success', 'fail');
    feedback.classList.add(type);
    feedback.innerText = message;
}

displayTasks();
