import { useFormikContext } from "formik";
import AppButton from "./AppButton";

const SubmitButton = ({content}) => {
    const {handleSubmit} = useFormikContext()
    return (  
        <AppButton content={content} onPress={handleSubmit}/>
    );
}
 
export default SubmitButton;