document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
    const img = thumbnail.querySelector('img')
    const match = img?.src.match(/\/assets\/(\d+)\.png/)
    const previewSrc = thumbnail.dataset.preview
        || (match ? `/assets/v${match[1]}.mp4` : null)

    if (!previewSrc) return

    const video = document.createElement('video')
    video.className = 'preview-video'
    video.src = previewSrc
    video.muted = true
    video.playsInline = true
    video.loop = true
    video.preload = 'metadata'
    thumbnail.appendChild(video)

    thumbnail.addEventListener('mouseenter', () => {
        thumbnail.classList.add('preview-playing')
        video.currentTime = 0
        video.play().catch(() => {})
    })

    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.classList.remove('preview-playing')
        video.pause()
        video.currentTime = 0
    })
})
