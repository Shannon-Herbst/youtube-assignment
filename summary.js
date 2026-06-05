const videoSummaries = {
    1: 'Explores how tongue posture and placement can influence neural pathways, habits, and overall brain function through simple daily practices.',
    2: 'Walks through building a complete React application from scratch, covering components, state, hooks, and project structure in one hands-on tutorial.',
    3: 'Shares practical advice on learning to code more efficiently, highlighting common beginner mistakes and faster paths to becoming job-ready.',
    4: 'Showcases new God of War gameplay featuring Laufey, including combat mechanics, story moments, and exploration in the latest installment.',
    5: 'A worship performance of "Yesterday Is Dead" by Josiah Queen, blending contemporary gospel vocals with reflective lyrics on renewal and faith.',
    6: 'A reaction breakdown of key Winter Soldier scenes, covering character arcs, action sequences, and standout moments from the MCU film.',
    7: 'An encouraging faith-based message about trusting God with your future, offering perspective on uncertainty, hope, and spiritual guidance.',
    8: 'Documents the restoration of a severely bug-infested Xbox console, from disassembly and deep cleaning to testing whether it can be saved.',
}

document.querySelectorAll('.video').forEach((videoCard) => {
    const img = videoCard.querySelector('.thumbnail img')
    const match = img?.src.match(/\/assets\/(\d+)\.png/)
    const summary = match ? videoSummaries[match[1]] : null

    if (!summary) return

    const summaryEl = document.createElement('div')
    summaryEl.className = 'ai-summary'
    summaryEl.innerHTML = `
        <button class="ai-summary-toggle" type="button" aria-expanded="false">
            <span class="material-symbols-outlined ai-summary-icon">auto_awesome</span>
            <span class="ai-summary-label">Summary</span>
            <span class="material-symbols-outlined ai-summary-chevron">expand_more</span>
        </button>
        <p class="ai-summary-text">${summary}</p>
    `

    const toggle = summaryEl.querySelector('.ai-summary-toggle')
    toggle.addEventListener('click', (e) => {
        e.stopPropagation()
        const isOpen = summaryEl.classList.toggle('open')
        toggle.setAttribute('aria-expanded', isOpen)
    })

    videoCard.appendChild(summaryEl)
})
