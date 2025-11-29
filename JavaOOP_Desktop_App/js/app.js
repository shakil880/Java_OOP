// Application State
let currentPage = '01';
let completedPages = new Set(JSON.parse(localStorage.getItem('completedPages') || '[]'));
let isDarkTheme = localStorage.getItem('darkTheme') === 'true';

// Topic titles mapping
const topicTitles = {
    '01': 'Java OOP Introduction',
    '02': 'Classes & Objects',
    '03': 'Class Attributes',
    '04': 'Class Methods',
    '05': 'Constructors',
    '06': 'this Keyword',
    '07': 'Modifiers',
    '08': 'Encapsulation',
    '09': 'Packages & API',
    '10': 'Inheritance',
    '11': 'Polymorphism',
    '12': 'super Keyword',
    '13': 'Inner Classes',
    '14': 'Abstraction',
    '15': 'Interface',
    '16': 'Enums',
    '17': 'User Input',
    '18': 'Date & Time',
    '19': 'ArrayList',
    '20': 'HashMap'
};

// Folder names mapping
const folderNames = {
    '01': '01_Java_OOP',
    '02': '02_Java_Classes_Objects',
    '03': '03_Java_Class_Attributes',
    '04': '04_Java_Class_Methods',
    '05': '05_Java_Constructors',
    '06': '06_Java_this_Keyword',
    '07': '07_Java_Modifiers',
    '08': '08_Java_Encapsulation',
    '09': '09_Java_Packages_API',
    '10': '10_Java_Inheritance',
    '11': '11_Java_Polymorphism',
    '12': '12_Java_super_Keyword',
    '13': '13_Java_Inner_Classes',
    '14': '14_Java_Abstraction',
    '15': '15_Java_Interface',
    '16': '16_Java_Enums',
    '17': '17_Java_User_Input',
    '18': '18_Java_Date',
    '19': '19_Java_ArrayList',
    '20': '20_Java_HashMap'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    loadPage(currentPage);
    setupEventListeners();
    updateProgress();
    updateCompletedStatus();
});

// Theme management
function initializeTheme() {
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        document.querySelector('#toggleTheme i').className = 'fas fa-sun';
    }
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#toggleTheme i');
    icon.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Page loading
function loadPage(pageNumber) {
    currentPage = pageNumber;
    
    const contentBody = document.getElementById('contentBody');
    const pageTitle = document.getElementById('pageTitle');
    
    // Update title
    pageTitle.textContent = topicTitles[pageNumber] || 'Java OOP';
    
    // Show loading
    contentBody.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading content...</p>
        </div>
    `;
    
    // Simulate loading delay for smooth transition
    setTimeout(() => {
        const content = getContentForPage(pageNumber);
        contentBody.innerHTML = `<div class="content-wrapper">${content}</div>`;
        contentBody.scrollTop = 0;
        
        // Apply Prism syntax highlighting
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
        
        // Update navigation
        updateNavigation();
        updateButtons();
    }, 300);
}

// Get content for a specific page
function getContentForPage(pageNumber) {
    // Use the new generatePageContent function if available
    if (typeof generatePageContent === 'function') {
        return generatePageContent(pageNumber);
    }
    
    // If content is in contentData object with javaFiles
    if (typeof contentData !== 'undefined' && contentData[pageNumber]) {
        const data = contentData[pageNumber];
        
        // If it has javaFiles, generate the content
        if (data.javaFiles) {
            return generateContentWithJavaFiles(data, pageNumber);
        }
        
        // Otherwise use the old content property
        if (data.content) {
            return data.content;
        }
    }
    
    // Fallback content
    return generateFallbackContent(pageNumber);
}

// Generate content with Java files
function generateContentWithJavaFiles(data, pageNumber) {
    let html = `<h1>${data.title}</h1>`;
    
    // Add introduction section if available
    if (data.introduction) {
        html += `<div class="topic-introduction">`;
        html += convertMarkdownToHTML(data.introduction);
        html += `</div>`;
    }
    
    // Add Java files section
    if (data.javaFiles && data.javaFiles.length > 0) {
        html += `<div class="section-header">
            <i class="fas fa-code"></i>
            <h2>Code Examples</h2>
        </div>`;
        html += `<p>This section includes <strong>${data.javaFiles.length}</strong> practical Java example(s). Study the code and observe the output.</p>`;
        
        data.javaFiles.forEach((file, index) => {
            html += `
                <div class="java-file-section">
                    <h3>
                        <i class="fas fa-file-code"></i> 
                        Example ${index + 1}: ${file.name}
                    </h3>
                    
                    <div class="code-tabs">
                        <button class="tab-btn active" onclick="showTab(event, 'code-${pageNumber}-${index}')">
                            <i class="fas fa-code"></i> Source Code
                        </button>
                        <button class="tab-btn" onclick="showTab(event, 'output-${pageNumber}-${index}')">
                            <i class="fas fa-terminal"></i> Output
                        </button>
                    </div>
                    
                    <div id="code-${pageNumber}-${index}" class="tab-content active">
                        <pre><code class="language-java">${escapeHtml(file.code)}</code></pre>
                    </div>
                    
                    <div id="output-${pageNumber}-${index}" class="tab-content">
                        <pre class="output-box"><code>${escapeHtml(file.output)}</code></pre>
                    </div>
                </div>
            `;
        });
    }
    
    // Add key concepts section
    html += `
        <div class="section-header">
            <i class="fas fa-lightbulb"></i>
            <h2>Key Takeaways</h2>
        </div>
        <ul>
            <li>Study the source code to understand the implementation</li>
            <li>Click the "Output" tab to see the program results</li>
            <li>Run the code in your IDE to verify the behavior</li>
            <li>Try modifying the examples to experiment and learn</li>
        </ul>
    `;
    
    // Add folder location
    html += `
        <div class="section-header">
            <i class="fas fa-folder"></i>
            <h2>Folder Location</h2>
        </div>
        <p>All files for this topic are located in:</p>
        <pre><code>c:\\programming\\Java_OOP\\${data.folder}\\</code></pre>
        <p><button class="btn-primary" onclick="openCurrentFolder()">
            <i class="fas fa-folder-open"></i> Open in File Explorer
        </button></p>
    `;
    
    return html;
}

// Convert basic Markdown to HTML
function convertMarkdownToHTML(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/## (.*?)$/gm, '<h2>$1</h2>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Code blocks
    html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Lists
    html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.trim()) return '';
        if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<pre')) {
            return para;
        }
        return `<p>${para.trim()}</p>`;
    }).join('\n');
    
    return html;
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Tab switching function
function showTab(event, tabId) {
    // Get the parent section
    const section = document.getElementById(tabId).closest('.java-file-section');
    
    // Hide all tabs in this section
    section.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active from all buttons in this section
    section.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Activate corresponding button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Generate fallback content
function generateFallbackContent(pageNumber) {
    const title = topicTitles[pageNumber];
    const folder = folderNames[pageNumber];
    
    return `
        <h1>${title}</h1>
        <p>Welcome to the <strong>${title}</strong> section!</p>
        
        <h2>Overview</h2>
        <p>This section covers everything you need to know about ${title.toLowerCase()} in Java.</p>
        
        <h2>Learning Materials</h2>
        <p>This topic includes:</p>
        <ul>
            <li>📄 Comprehensive README with explanations</li>
            <li>☕ Multiple Java example files</li>
            <li>🎯 Practical demonstrations</li>
            <li>💡 Best practices and tips</li>
        </ul>
        
        <h2>Folder Location</h2>
        <p>You can find all the files for this topic in:</p>
        <pre><code>c:\\programming\\Java_OOP\\${folder}\\</code></pre>
        
        <h2>Quick Actions</h2>
        <ul>
            <li>Click "Open Folder" button above to view the actual files</li>
            <li>Read the README.md file for detailed theory</li>
            <li>Run the Java examples to see concepts in action</li>
            <li>Mark this section as complete when you're done</li>
        </ul>
        
        <h2>Next Steps</h2>
        <ol>
            <li>Open the folder using the button above</li>
            <li>Read through the README.md file</li>
            <li>Study each Java example file</li>
            <li>Run the examples and observe the output</li>
            <li>Try modifying the code to experiment</li>
            <li>Mark complete and move to the next topic</li>
        </ol>
        
        <blockquote>
            💡 <strong>Tip:</strong> Take your time with each topic. Understanding the fundamentals will make advanced topics much easier!
        </blockquote>
    `;
}

// Navigation updates
function updateNavigation() {
    // Remove active from all items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active to current item
    const activeItem = document.querySelector(`[data-page="${currentPage}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Button updates
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const markBtn = document.getElementById('markCompleteBtn');
    
    const pageNum = parseInt(currentPage);
    
    // Previous button
    prevBtn.disabled = pageNum === 1;
    
    // Next button
    nextBtn.disabled = pageNum === 20;
    
    // Mark complete button
    if (completedPages.has(currentPage)) {
        markBtn.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
        markBtn.classList.add('completed');
    } else {
        markBtn.innerHTML = '<i class="fas fa-check"></i> Mark as Complete';
        markBtn.classList.remove('completed');
    }
}

// Progress tracking
function updateProgress() {
    const total = 20;
    const completed = completedPages.size;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progressPercent').textContent = `${percentage}%`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
}

function updateCompletedStatus() {
    document.querySelectorAll('.nav-item').forEach(item => {
        const page = item.getAttribute('data-page');
        if (completedPages.has(page)) {
            item.classList.add('completed');
        } else {
            item.classList.remove('completed');
        }
    });
}

function toggleComplete() {
    if (completedPages.has(currentPage)) {
        completedPages.delete(currentPage);
    } else {
        completedPages.add(currentPage);
    }
    
    // Save to localStorage
    localStorage.setItem('completedPages', JSON.stringify([...completedPages]));
    
    updateProgress();
    updateCompletedStatus();
    updateButtons();
}

// Navigation functions
function goToPreviousPage() {
    const pageNum = parseInt(currentPage);
    if (pageNum > 1) {
        const newPage = String(pageNum - 1).padStart(2, '0');
        loadPage(newPage);
    }
}

function goToNextPage() {
    const pageNum = parseInt(currentPage);
    if (pageNum < 20) {
        const newPage = String(pageNum + 1).padStart(2, '0');
        loadPage(newPage);
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        document.querySelectorAll('.nav-item').forEach(item => {
            const title = item.querySelector('.nav-title').textContent.toLowerCase();
            const number = item.querySelector('.nav-number').textContent;
            
            if (title.includes(query) || number.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Open folder functionality
function openCurrentFolder() {
    const folder = folderNames[currentPage];
    const path = `c:\\programming\\Java_OOP\\${folder}`;
    
    // Try to open using PowerShell
    alert(`Opening folder: ${path}\n\nIf the folder doesn't open automatically, please navigate to:\n${path}`);
    
    // Create a temporary link to try opening
    const command = `explorer "${path}"`;
    
    // You can copy this command to clipboard
    navigator.clipboard.writeText(path).then(() => {
        console.log('Path copied to clipboard:', path);
    });
}

// Print functionality
function printPage() {
    window.print();
}

// Sidebar toggle
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
}

// Event listeners setup
function setupEventListeners() {
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.getAttribute('data-page');
            loadPage(page);
        });
    });
    
    // Previous/Next buttons
    document.getElementById('prevBtn').addEventListener('click', goToPreviousPage);
    document.getElementById('nextBtn').addEventListener('click', goToNextPage);
    
    // Mark complete button
    document.getElementById('markCompleteBtn').addEventListener('click', toggleComplete);
    
    // Theme toggle
    document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
    
    // Print button
    document.getElementById('printPage').addEventListener('click', printPage);
    
    // Open folder button
    document.getElementById('openFolderBtn').addEventListener('click', openCurrentFolder);
    
    // Sidebar toggle
    document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
    
    // Search functionality
    setupSearch();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    goToPreviousPage();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    goToNextPage();
                    break;
                case 'k':
                    e.preventDefault();
                    document.getElementById('searchInput').focus();
                    break;
            }
        }
    });
}

// Export functions for use in HTML
window.loadPage = loadPage;
window.toggleTheme = toggleTheme;
window.toggleComplete = toggleComplete;
window.goToPreviousPage = goToPreviousPage;
window.goToNextPage = goToNextPage;
window.openCurrentFolder = openCurrentFolder;
window.printPage = printPage;
window.toggleSidebar = toggleSidebar;
window.showTab = showTab;
