        // Animation supplémentaire avec JS
        const bonjourText = document.getElementById('bonjourText');
        
        // Changer aléatoirement la couleur pendant le clignotement
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffbe76', '#a55eea'];
        
        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            bonjourText.style.color = randomColor;
        }, 2000);
        
        // Effet de "rebond" au clic
        bonjourText.addEventListener('click', () => {
            bonjourText.style.animation = 'none';
            setTimeout(() => {
                bonjourText.style.animation = 'clignotement 2s infinite alternate';
            }, 10);
            
            bonjourText.style.transform = 'scale(1.3)';
            setTimeout(() => {
                bonjourText.style.transform = 'scale(1)';
            }, 300);
        });
