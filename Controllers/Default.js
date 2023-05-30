export const DefaultController =(req=request,res=response)=>{
    return res.status(400).json({
        ok:false,
        msg:'URL NOT FOUND IN OUR API'
    })
}