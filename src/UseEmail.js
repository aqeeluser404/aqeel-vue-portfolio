import { ref } from 'vue'

// https://app.herotofu.com/forms/037ba170-ca37-11ee-bb69-515451de93af
// "https://public.herotofu.com/v1/037ba170-ca37-11ee-bb69-515451de93af"

const UseEmail = (endpointUrl) => {
    const submitted = ref(false);
    const loading = ref(false);
    const error = ref();

    function sendEmail(data) {
        loading.value = true;
        submitted.value = false;
        error.value = undefined;

        fetch(endpointUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((Response) => {
            if (Response.status === 422) {
                throw new Error("Are you a robot?");
            }
            return Response.json;
        })
        .then(() => {
            submitted.value = true;
            loading.value = false;
        });
    }
    return {
        submitted,
        loading,
        error,
        sendEmail
    }
}
export default UseEmail;