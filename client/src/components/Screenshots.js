import Screenshot from "./Screenshot"

const Screenshots = ({screenshots}) => {
    return (
        <div className="screenshots">
            {Array.isArray(screenshots) ? screenshots.map((screenshot) => (
              <Screenshot key={screenshot._id} screenshot={screenshot}/>
            )) : <Screenshot key={screenshots._id} screenshot={screenshots}/>}
        </div>
    )
}

export default Screenshots
