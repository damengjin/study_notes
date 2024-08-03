document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.citation').forEach(citation => {
        citation.addEventListener('click', (e) => {
            const targetId = citation.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);

            // Scroll to the target
            target.scrollIntoView({ behavior: 'smooth' });

            // Highlight the target
            // Store original styles
            const originalBackground = target.style.backgroundColor;
            const originalFontWeight = target.style.fontWeight;

            // Set up transitions
            target.style.transition = 'background-color 0.5s, font-weight 0.5s';

            // Apply highlight styles
            target.style.backgroundColor = '#FDBE49';
            target.style.fontWeight = 'bold';

            // Remove highlight styles smoothly
            setTimeout(() => {
                target.style.backgroundColor = originalBackground;
                target.style.fontWeight = originalFontWeight;

                // Remove transition after animation is complete
                setTimeout(() => {
                    target.style.transition = '';
                }, 500); // This matches the transition duration
            }, 2000);

            // Prevent the default action after we've done our custom behavior
            e.preventDefault();
        });
    });
});