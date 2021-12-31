const {useState} = require("react");
const {useForm} = require("react-hook-form");

const {register, handleSubmit} = useForm();
const [file,setFile]=useState("");

const fileMaker=(e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);



    async function onFormSubmit(data) {
    const token = localStorage.getItem('token');
    const {}=data;
    console.log(data);
    const formData = new FormData();
    formData.append('file',file)

       try{
        const result=await axios.post('http://localhost:8080/images', formData

            ,        {headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`}}
        )

        const locationHeader=result.headers.location;
        let id=(locationHeader.lastIndexOf('/'));
        imageId = locationHeader.substring(id + 1);

    }
    catch (e){
        console.error(e)
    }



// advice form
async function onSubmit(data) {

    setError('');

    console.log(data);
    console.log(data.productAdvice.join())

    try {
        const result = await axios.post('http://localhost:8080/consult', {
            // headers: {
            //     "Content-Type": "application/json",

            dateOfAppointment: data.dateOfAppointment,
            advice: data.Advice,
            productAdvice: data.productAdvice.join()
        });

        console.log(result);

        setTimeout(() => {
        }, 2000);
    } catch (e) {
        console.error(e);
    }
}

        {/*            <form className="advice-client" id="advice" onClick={handleSubmit(onSubmit)}>*/}
        {/*                <fieldset klant advies>*/}
        {/*                    <legend> afspraak details</legend>*/}
        {/*                    <div>*/}

        {/*                        <label htmlFor="dateOfAppointment"><strong>datum afspraak</strong></label>*/}
        {/*                        <input type="date"*/}
        {/*                               id="dateOfAppointment"*/}
        {/*                               name="dateOfAppointment"*/}
        {/*                               {...register("dateOfAppointment")}/>*/}
        {/*                    </div>*/}
        {/*                    <br></br>*/}

        {/*                    <div>*/}
        {/*                        <label htmlFor="productAdvice"><strong>product advies</strong> </label><br></br>*/}
        {/*                        <label htmlFor="product1"> dagcreme</label>*/}
        {/*                        <input type="checkbox" id="product1" name="dagcreme" value="dagcreme"*/}
        {/*                               {...register("productAdvice")}/>*/}
        {/*                        <label htmlFor="product2"> nachtcreme</label>*/}
        {/*                        <input type="checkbox" id="product2" name="nachtcreme" value="nachtcreme"*/}
        {/*                               {...register("productAdvice")}/>*/}
        {/*                        <label htmlFor="vehicle3">toner</label>*/}
        {/*                        <input type="checkbox" id="vehicle3" name="product3" value="toner"*/}
        {/*                               {...register("productAdvice")}/>*/}
        {/*                    </div>*/}


        {/*                    <label htmlFor="advice"><strong>Advies</strong></label>*/}
        {/*                    <input type="text" name="advice" id="advice"*/}
        {/*placeholder="advies en huidconditie klant"*/}
        {/*                           {...register("Advice")}/>*/}


        {/*                    <button type="submit" id="advice-client">submit</button>*/}

        {/*                </fieldset>*/}
        {/*            </form>*/}




