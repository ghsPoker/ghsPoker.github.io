const cursor = document.getElementById("cursor")

addEventListener('mousemove', (e)=>{
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})