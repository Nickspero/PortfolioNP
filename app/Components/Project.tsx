interface project {
    img : string,
    title : string,
    desc: string,
    link:string,
    git: string,
}

const Project = (props:project) => {
  return (
    <div className="backdrop">
      <div className="content">
        <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href={props.link}>Link</a>
      <a href={props.git}>GitHub</a>
      </div>
    </div>
  )
}

export default Project
