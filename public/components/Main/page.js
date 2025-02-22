import { Link } from '../../popup.js';

export function Main() {
    const container = document.createElement('div');
    container.className = 'p-5 bg-white min-h-screen';
    
    const title = document.createElement('h1');
    title.className = 'text-3xl font-bold text-center';
    title.textContent = 'Concentro';
    
    const underline = document.createElement('hr');
    underline.className = 'my-4 border-gray-300';
    
    const taskSection = document.createElement('div');
    taskSection.className = 'text-center mt-4';
    const taskTitle = document.createElement('h2');
    taskTitle.className = 'text-xl font-semibold';
    taskTitle.textContent = 'Select a Task:';
    taskSection.appendChild(taskTitle);
    
    const buttonGrid = document.createElement('div');
    buttonGrid.className = 'grid grid-cols-2 gap-3 mt-4 w-full';
    buttonGrid.style.display = 'grid';
    buttonGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    buttonGrid.style.gap = '0.75rem';

    const tasks = [
        { text: 'Tab Track', icon: '<img src="assets/tab-track.png" alt="Tab Track" class="task-icon" />', link: '/tab-track' },
        { text: 'Pomodoro', icon: '<img src="assets/pomodoro.png" alt="Pomodoro" class="task-icon" />', link: '/pomodoro' },
        { text: 'Whitelist', icon: '<img src="assets/list.png" alt="Whitelist" class="task-icon" />', link: '/whitelist' },
        { text: 'Leaderboard', icon: '<img src="assets/leaderboard.png" alt="Leaderboard" class="task-icon" />', link: '/leaderboard' }
    ];

    tasks.forEach(task => {
        const buttonWrapper = document.createElement('div');
        buttonWrapper.style.position = 'relative';

        const backgroundBox = document.createElement('div');
        backgroundBox.style.position = 'absolute';
        backgroundBox.style.top = '1px';
        backgroundBox.style.left = '1px';
        backgroundBox.style.width = '100%';
        backgroundBox.style.height = '100%';
        backgroundBox.style.backgroundColor = 'black';
        backgroundBox.style.borderRadius = '0.5rem';
        backgroundBox.style.zIndex = '-1';

        const button = Link(
            task.link, 
            '',
            'w-full flex items-center justify-center bg-yellow-400 text-gray-800 rounded-lg shadow-lg p-2 hover:bg-yellow-300 transition border border-black z-10'
        );

        const buttonContent = document.createElement('div');
        buttonContent.className = 'text-lg font-medium text-left';
        buttonContent.innerHTML = `${task.icon}${task.text}`;

        button.appendChild(buttonContent);
        
        buttonWrapper.appendChild(backgroundBox);
        buttonWrapper.appendChild(button);
        buttonGrid.appendChild(buttonWrapper);
    });
    
    const coffeeButton = document.createElement('button');
    coffeeButton.className = 'w-full mt-6 flex items-center justify-center rounded-lg shadow-lg p-3 transition text-lg font-medium';
    coffeeButton.style.backgroundColor = 'rgba(249, 237, 213, 1)';
    coffeeButton.style.color = '#1f2937';
    coffeeButton.style.border = '1px solid #d1d5db';
    coffeeButton.innerHTML = '☕ Enjoying Concentro? <br> Buy us a coffee! <span class="ml-2">➡️</span>';
    
    container.appendChild(title);
    container.appendChild(underline);
    container.appendChild(taskSection);
    container.appendChild(buttonGrid);
    container.appendChild(coffeeButton);

    return container;
} 