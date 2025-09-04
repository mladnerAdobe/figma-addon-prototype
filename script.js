// Initialize the prototype
document.addEventListener('DOMContentLoaded', function() {
    console.log('Add-ons Panel Prototype Loaded');
    initializeCarousel();
    initializeInteractions();
});

// Static Cover Flow Carousel functionality
function initializeCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    const originalIcons = Array.from(document.querySelectorAll('.app-icon'));
    
    // Add click handlers to all app icons
    originalIcons.forEach((icon, index) => {
        icon.addEventListener('click', function() {
            selectApp(this);
        });
    });
}

// Initialize all interactive elements
function initializeInteractions() {
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Add focus management
    setupFocusManagement();
    
    // Add hover effects enhancement
    enhanceHoverEffects();
}

// Close panel function
function closePanel() {
    const panel = document.querySelector('.addon-panel');
    
    // Add closing animation
    panel.style.transform = 'scale(0.95)';
    panel.style.opacity = '0';
    
    setTimeout(() => {
        alert('Panel would close in a real application');
        // Reset for demo
        panel.style.transform = 'scale(1)';
        panel.style.opacity = '1';
    }, 300);
    
    console.log('Close panel clicked');
}

// Focus search functionality
function focusSearch() {
    const searchBar = document.querySelector('.search-bar');
    const searchText = searchBar.querySelector('.search-text');
    
    // Clear any selected tags when focusing search
    const selectedTag = document.querySelector('.tag.selected');
    if (selectedTag) {
        selectedTag.classList.remove('selected');
        selectedTag.dataset.wasSelected = 'false';
    }
    
    // Create input element for demo
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search add-ons...';
    input.value = ''; // Always start with empty input
    input.style.cssText = `
        border: none;
        outline: none;
        background: transparent;
        font-size: 14px;
        color: #292929;
        flex: 1;
        font-family: 'Adobe Clean', 'Inter', sans-serif;
    `;
    
    // Replace search text with input
    searchText.style.display = 'none';
    searchBar.appendChild(input);
    input.focus();
    
    // Handle blur to restore original state
    input.addEventListener('blur', function() {
        searchBar.removeChild(input);
        searchText.style.display = 'block';
        
        // Update search text with input value or reset to placeholder
        if (input.value.trim()) {
            searchText.textContent = input.value;
            searchText.style.color = '#222222';
        } else {
            searchText.textContent = 'Explore add-ons';
            searchText.style.color = '#292929';
        }
    });
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch(input.value);
            input.blur();
        }
        if (e.key === 'Escape') {
            input.value = currentText; // Restore original value
            input.blur();
        }
    });
    
    console.log('Search focused');
}

// Perform search
function performSearch(query) {
    if (query.trim()) {
        alert(`Searching for: "${query}"`);
        console.log(`Search performed: ${query}`);
        
        // If search is manually typed and doesn't match the selected tag, clear tag selection
        const selectedTag = document.querySelector('.tag.selected');
        const selectedTagText = selectedTag ? selectedTag.textContent.trim() : '';
        
        if (query !== selectedTagText && selectedTag) {
            // Clear tag selection if search doesn't match
            selectedTag.classList.remove('selected');
            selectedTag.dataset.wasSelected = 'false';
        }
    }
}

// Clear selected tag
function clearSelectedTags() {
    const selectedTag = document.querySelector('.tag.selected');
    if (selectedTag) {
        selectedTag.classList.remove('selected');
        selectedTag.dataset.wasSelected = 'false';
    }
    
    const searchBar = document.querySelector('.search-bar');
    const searchText = searchBar.querySelector('.search-text');
    searchText.textContent = 'Explore add-ons';
    searchText.style.color = '#292929';
}

// Select tag functionality
function selectTag(tagElement) {
    const tagText = tagElement.textContent.trim();
    const searchBar = document.querySelector('.search-bar');
    const searchText = searchBar.querySelector('.search-text');
    
    // Clear all other selected tags first (only one tag at a time)
    const allTags = document.querySelectorAll('.tag');
    allTags.forEach(tag => tag.classList.remove('selected'));
    
    // If clicking the same tag that was selected, deselect it
    if (tagElement.dataset.wasSelected === 'true') {
        tagElement.dataset.wasSelected = 'false';
        // Reset to placeholder text
        searchText.textContent = 'Explore add-ons';
        searchText.style.color = '#292929';
    } else {
        // Select this tag
        tagElement.classList.add('selected');
        tagElement.dataset.wasSelected = 'true';
        
        // Clear the wasSelected flag from other tags
        allTags.forEach(tag => {
            if (tag !== tagElement) {
                tag.dataset.wasSelected = 'false';
            }
        });
        
        // Update search field with selected tag
        searchText.textContent = tagText;
        searchText.style.color = '#222222';
        console.log('Selected tag:', tagText);
    }
    
    // Add visual feedback
    tagElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        tagElement.style.transform = '';
    }, 150);
    
    // Highlight search bar briefly to show it was updated
    searchBar.style.borderColor = '#5258DC';
    searchBar.style.boxShadow = '0 0 0 2px rgba(82, 88, 220, 0.2)';
    setTimeout(() => {
        searchBar.style.borderColor = '#c6c6c6';
        searchBar.style.boxShadow = 'none';
    }, 1000);
}

// Select app from carousel
function selectApp(appElement) {
    // Remove previous selection
    document.querySelectorAll('.app-icon').forEach(icon => {
        icon.classList.remove('selected');
    });
    
    // Add selection to clicked app
    appElement.classList.add('selected');
    
    // Get app type
    const appType = getAppType(appElement);
    console.log(`App selected: ${appType}`);
    
    // Visual feedback
    appElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        appElement.style.transform = '';
    }, 200);
    
    // Show app details (demo)
    showAppDetails(appType);
}

// Get app type from element classes
function getAppType(element) {
    const classes = element.className;
    if (classes.includes('dropbox')) return 'Dropbox';
    if (classes.includes('figma')) return 'Figma';
    if (classes.includes('vimeo')) return 'Vimeo';
    if (classes.includes('center-main')) return 'Main App';
    return 'Other App';
}

// Show app details
function showAppDetails(appType) {
    const details = {
        'Dropbox': 'Cloud storage and file sharing',
        'Figma': 'Design and prototyping tool',
        'Vimeo': 'Video hosting and sharing',
        'Main App': 'Primary application',
        'Other App': 'Additional functionality'
    };
    
    // Create temporary tooltip
    const tooltip = document.createElement('div');
    tooltip.textContent = details[appType] || 'App details';
    tooltip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #222;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}

// Browse all add-ons
function browseAddons() {
    alert('Navigate to add-ons marketplace');
    console.log('Browse all add-ons clicked');
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    const focusableElements = document.querySelectorAll('button, .search-bar, .tag, .app-icon, a');
    const currentFocus = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(currentFocus);
    
    switch(e.key) {
        case 'Tab':
            // Let browser handle tab navigation
            break;
        case 'Escape':
            if (currentFocus.classList.contains('tag')) {
                currentFocus.classList.remove('selected');
            }
            break;
        case 'Enter':
        case ' ':
            if (currentFocus.classList.contains('tag')) {
                e.preventDefault();
                selectTag(currentFocus);
            } else if (currentFocus.classList.contains('app-icon')) {
                e.preventDefault();
                selectApp(currentFocus);
            }
            break;
    }
}

// Setup focus management
function setupFocusManagement() {
    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
        .tag:focus,
        .app-icon:focus,
        .search-bar:focus,
        .close-btn:focus,
        .browse-link a:focus {
            outline: 2px solid #5258e4;
            outline-offset: 2px;
        }
        
        .app-icon:focus {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
    
    // Make app icons focusable
    document.querySelectorAll('.app-icon').forEach(icon => {
        icon.setAttribute('tabindex', '0');
    });
}

// Enhance hover effects
function enhanceHoverEffects() {
    // Add subtle animations to interactive elements
    const style = document.createElement('style');
    style.textContent = `
        .tag {
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .app-icon {
            transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .close-btn {
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .search-bar {
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// Utility function to add ripple effect
function addRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(82, 88, 228, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tag, .close-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            addRippleEffect(this, e);
        });
    });
});

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .tag,
    .close-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);
