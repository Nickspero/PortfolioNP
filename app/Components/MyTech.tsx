
const MyTech = () => {
  return (
    <div className="border-5 border-[#3bbad8] rounded-2xl shadow-2xl">
          <div className="border-5 border-[#c64623] rounded-xl overflow-hidden">
            <div className="w-full bg-[#3bbad8] flex justify-center p-6">
              <div className="w-[80%]">
                <h1 className="text-[40px] font-bold">My Tech Stack:</h1>
                <div className="grid grid-cols-5 justify-items-center gap-6">
                  <figure className="tech">
                    <img className="tech__logo" src="/html.png" alt="" />
                    <p className="tech__name">HTML</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/css.png" alt="" />
                    <p className="tech__name">CSS</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/javascript.png" alt="" />
                    <p className="tech__name">JavaScript</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/react1.png" alt="" />
                    <p className="tech__name">React</p>
                  </figure>
                  <figure className="tech">
                    <img
                      className="tech__logo"
                      src="/firebase (5).png"
                      alt=""
                    />
                    <p className="tech__name">FireBase</p>
                  </figure>
                  <figure className="tech">
                    <img
                      className="tech__logo"
                      src="/next_transparent.png"
                      alt=""
                    />
                    <p className="tech__name">NextJS</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/vsc.png" alt="" />
                    <p className="tech__name">VS Code</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/tailwind.png" alt="" />
                    <p className="tech__name">Tailwind CSS</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/figma.png" alt="" />
                    <p className="tech__name">Figma</p>
                  </figure>
                  <figure className="tech">
                    <img className="tech__logo" src="/vue.png" alt="" />
                    <p className="tech__name">Vue</p>
                  </figure>
                </div>
                <p className="text-[24px] mt-6 text-right">And Many More!</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MyTech
