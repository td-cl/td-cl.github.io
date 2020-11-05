Array.prototype.forEach.call(document.getElementsByClassName('flip-card'), (flipCard) => {
    const image = flipCard.getElementsByClassName('image')[0]
    const description = flipCard.getElementsByClassName('description')[0]
    const handleFlippedToBack = () => {
      flipCard.className = 'flip-card flipped'
      description.className = 'description front'
      image.className = 'image back opacity-0'
    }
    const handleFlippedToFront = () => {
      flipCard.className = 'flip-card'
      image.className = 'image front'
      description.className = 'description back opacity-0'
    }
    flipCard.addEventListener('click', () => {
      if (flipCard.className.includes('flipped')) {
        flipCard.removeEventListener('animationend', handleFlippedToBack)
        flipCard.addEventListener('animationend', handleFlippedToFront)
        flipCard.className = `${flipCard.className} flip-to-front`
        description.className = `${description.className} flip-front`
        image.className = 'image back'
      } else {
        flipCard.removeEventListener('animationend', handleFlippedToFront)
        flipCard.addEventListener('animationend', handleFlippedToBack)
        flipCard.className = `${flipCard.className} flip-to-back`
        image.className = `${image.className} flip-front`
        description.className = 'description back'
      }
    })
  })