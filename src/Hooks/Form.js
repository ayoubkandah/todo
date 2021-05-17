import { useState } from 'react';
function useForm(cb,type,name) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
console.log(e.target.value)
        setValue(e.target.value);
cb(e)
    };
    return { value, type, onChange: handleChange,name };
}
export default useForm;