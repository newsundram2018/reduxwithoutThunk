import { StyleSheet, Text, View, FlatList, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import allActions from './actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

const RandomUserGenerator = () => {
    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()

    // const user = { name: "David" }

    useEffect(() => {
        dispatch(allActions.counterActions.getData())
    }, [])

    // const [resp, setResp] = useState(null);
    // useEffect(() => {
    //     getApiData().then(item => {
    //         // console.log(item, "somehtinfr")
    //         if (item) {
    //             dispatch(allActions.counterActions.fetchData(item))
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //     result.movieData ?
    //         setapiData(result.movieData[0]) : null
    // }, [result])

    // const getApiData = async () => {
    //     const data = await axios.get("https://randomuser.me/api/?results=4")
    //     return data.data.results
    // }


    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                data={apiData}
                renderItem={renderItem}
                keyExtractor={(item) => item.login.uuid}
            />
        </ScrollView>
    )

}

export default RandomUserGenerator
const Item = ({ first, last, picture, phone, email, city }) => {
    return (
        <ScrollView style={{ margin: 20, width: "90%", height: "6%", backgroundColor: "red" }}>
            <Text>{first}</Text>
            <Text>{last}</Text>
            <Text>{picture}</Text>
            <Text>{phone}</Text>
            <Text>{email}</Text>
            <Text>{city}</Text>
        </ScrollView>
    )
}
const renderItem = ({ item }) => {
    return (
        <ScrollView >
            <Item
                first={item?.name?.first}
                last={item?.name?.last}
                picture={item?.picture?.medium}
                phone={item?.cell}
                email={item?.email}
                city={item?.location?.city}
            />
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});



// console.log(result?.movieData, "------------------>result")
                // dispatch({
                //     type: "FETCH_DATA",
                //     payload: moviedata
                // })
                // dispatch(allActions.apiAction.fetchData(item))


// if (result.movieData) {

//     console.log("-------------------START", result?.movieData, "END--------------------------------mydaya")
// }

// console.log(resp)

    // if (result.movieData) {

    //     console.log("-------------------START", result?.movieData[0]?.cell, "END--------------------------------mydaya")
    // }







// return data
        //     .then((response) => {
        //         setResp(response.data.results)
        //         return response.data.results

        //     })

        //     .then((error) => {
        //         console.log("Hello Response-------------------------------Error")
        //     }
        //     )