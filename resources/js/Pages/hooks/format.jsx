import Loading from "../Loading";

function useImgFormat() {
    try {
        return ".jpeg"
    } catch (error) {
        try {
            return ".jpg"
        } catch (error) {
            try {
                return ".png"
            } catch (error) {
                <Loading/>
            }
        }
    }
    
}

export default useImgFormat;