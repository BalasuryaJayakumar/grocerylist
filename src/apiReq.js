const apiReq = async ( URL="", optionObj=null, ErrMsg=null ) => {
    try {
        const response = await fetch( URL, optionObj)
        if(!response.ok) throw Error ("Please Reload the Page")
    } catch(err) {
        ErrMsg = err.message
    } finally {
        return ErrMsg
    }
}

export default apiReq