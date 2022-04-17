export const styles = {
    container:{
        width:'100%',
        height:'100%',
        display:'grid', //this 
        gridTemplateColumns:'auto', //and this are messing up screenshots
    },
    card_container:{
        width:'252px',
        height:'352px',
        border:'10px solid #f5d742',
        borderRadius:'8px',
        backgroundColor:'#a27e5d',
        margin:'25px',
        padding:'10px',
    },
    card_art:{
        width:'99%',
        height:'50%',
        border:'2px solid #d8b827',
        borderRadius:'8px',
    },
    card_name:{
        fontFamily:'monospace',
        fontSize:'2em',
        textAlign:'center',
        border:'1px solid #a27e5d',
        backgroundColor:'#997453',
        borderRadius:'50px',
        marginTop:'5px'
    },
    card_text:{
        fontFamily:'monospace',
        textAlign:'center',
        fontSize:'2.55vw',
        marginTop:'10px',
        width:'97%',
        height:'33%',
        border:'2px solid #d8b827',
        borderRadius:'8px',
        backgroundColor:'#997453',
        padding:'1%',
    },
}