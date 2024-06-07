interface IMyProps {
    message: string,
}

export const MyMessageComponent:React.FC<IMyProps> = (prop : IMyProps) => {
    return <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
    <div style={{
        maxWidth:"60%",
        backgroundColor:"#E8E8E8", 
        borderRadius:"10px",
        paddingLeft:"10px",
        paddingRight:"20px",
        paddingTop:"5px",
        paddingBottom:"5px",
    }}>{prop.message}</div>
    </div>
}