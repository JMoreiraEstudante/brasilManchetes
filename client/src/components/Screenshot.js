const Screenshot = ({screenshot}) => {
    const buffer = screenshot.imagem
    const b64 = Buffer.from(buffer).toString('base64')
    const mimeType = 'image/png' // e.g., image/png

    return (
        <div className="screenshot">
            <img src={`data:${mimeType};base64,${b64}`}  alt="erro"/>
        </div>
    )
}

export default Screenshot
