const increment = () => {
    return {
        type: "INCREMENT"
    }
}

const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

const getData = () => {
    return async (dispatch) => {
        try {
            await axios.get('http://dummy.restapiexample.com/api/v1/employees', {

                // method: "GET",
                // type: "text/plain"


            })
                .then(function (response) {
                    let data = response.data
                    dispatch(setPageList(data.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            // const apiReq = await fetch('http://dummy.restapiexample.com/api/v1/employees', {
            //     method: 'GET'
            // });
            // console.log(apiReq, "-------------APIREQ")
            // const data = await apiReq.json();
            // console.log(data, "----------------dataJSON()");
            // const newdata = await data?.data[0];

            // console.log(newdata, "-------------desiredData");
            // await dispatch(setPageList(newdata));
            return [];

        } catch (error) {
            console.error(error);
        }
    };
}

const setPageList = (payloaddata) => {
    return {
        type: "apiData",
        payload: payloaddata
    }
}


export default {
    increment,
    decrement,
    getData,
    setPageList
}