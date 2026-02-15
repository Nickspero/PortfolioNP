"use client"

const Shapes = () => {

    const scale = 1 / 20

    const moveShapes = (event:React.MouseEvent<HTMLDivElement>) => {
        const shapes = document.querySelectorAll<HTMLElement>(".shape")
        const x = event.clientX * scale
        const y = event.clientY * scale
        
        shapes.forEach((shape,i)=>{
            const direction = i % 2===0? 1 : -1
            shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`
        })
    }

  return (
    <div className="absolute w-full h-full z-20 top-20 left-0">
    <div onMouseMove={moveShapes} className="relative w-full h-full">
      <img className="shape top-10 left-20" src="/code.PNG" alt="" />
      <img className="shape top-60 left-80" src="/brackets.PNG" alt="" />
      <img className="shape top-110 left-10" src="/tools.PNG" alt="" />
      <img className="shape top-160 left-60" src="/heart.PNG" alt="" />
      <img className="shape top-10 right-40" src="/laptop.PNG" alt="" />
      <img className="shape top-60 right-80" src="/fargments.PNG" alt="" />
      <img className="shape top-110 right-30" src="/system.PNG" alt="" />
      <img className="shape top-160 right-60" src="/star.PNG" alt="" />
    </div>
    </div>
  )
}


export default Shapes
