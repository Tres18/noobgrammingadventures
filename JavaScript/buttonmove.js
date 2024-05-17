const nty = document.getElementById('open-popup');

        nty.addEventListener('mouseover', (event) => {
            const container = nty.parentElement;
            const containerRect = container.getBoundingClientRect();
            const ntyRect = nty.getBoundingClientRect();
            const maxX = containerRect.width - ntyRect.width;
            const maxY = containerRect.height - ntyRect.height;

            let newLeft = Math.random() * maxX;
            let newTop = Math.random() * maxY;

            nty.style.position = 'absolute';
            nty.style.left = `${newLeft}px`;
            nty.style.top = `${newTop}px`;
        });

        nty.onclick = function() {
            const container = nty.parentElement;
            const containerRect = container.getBoundingClientRect();
            const ntyRect = nty.getBoundingClientRect();
            const maxX = containerRect.width - ntyRect.width;
            const maxY = containerRect.height - ntyRect.height;

            let newLeft = Math.random() * maxX;
            let newTop = Math.random() * maxY;

            nty.style.position = 'absolute';
            nty.style.left = `${newLeft}px`;
            nty.style.top = `${newTop}px`;
        }