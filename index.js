function onFlipCardClick(event) {
            const image = event.target.getElementsByClassName('image')[0]
            const description = event.target.getElementsByClassName('description')[0]
            const handleFlippedToBack = () => {
              event.target.className = 'flip-card flipped'
              description.className = 'description front'
              image.className = 'image back opacity-0'
            }
            const handleFlippedToFront = () => {
              event.target.className = 'flip-card'
              image.className = 'image front'
              description.className = 'description back opacity-0'
            }
          if (event.target.className.includes('flipped')) {
            event.target.removeEventListener('animationend', handleFlippedToBack)
            event.target.addEventListener('animationend', handleFlippedToFront)
            event.target.className = `${event.target.className} flip-to-front`
            description.className = `${description.className} flip-front`
            image.className = 'image back'
          } else {
            event.target.removeEventListener('animationend', handleFlippedToFront)
            event.target.addEventListener('animationend', handleFlippedToBack)
            event.target.className = `${event.target.className} flip-to-back`
            image.className = `${image.className} flip-front`
            description.className = 'description back'
          }
        })
      })
}
