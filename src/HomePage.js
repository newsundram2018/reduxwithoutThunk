import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from './actions'

const HomePage = () => {

    const counter = useSelector(state => state.counter)
    // 1
    const currentUser = useSelector(state => state.currentUser)
    // {}
    const dispatch = useDispatch()

    const user = { name: "David" }

    useEffect(() => {
        dispatch(allActions.userActions.setUser(user))
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {
                currentUser.loggedIn ?
                    <View style={{ alignItems: "flex-end", justifyContent: "center", alignContent: "flex-end", width: 410, height: 100, borderRadius: 20, backgroundColor: "#fff" }}>
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={{ fontSize: 25 }}>Hello,{currentUser.user.name} </Text>
                            <TouchableOpacity onPress={() => dispatch(allActions.userActions.logOut())}>
                                <View style={{ backgroundColor: "#fff412", borderRadius: 40, width: 150, height: 40, alignItems: "center", }}>
                                    <Text style={{ fontSize: 25 }}>Logout</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    :
                    <View style={{ alignItems: "flex-end", justifyContent: "center", alignContent: "flex-end", width: 410, height: 100, borderRadius: 20, backgroundColor: "#fff" }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                            <TouchableOpacity onPress={() => dispatch(allActions.userActions.setUser(user))}>
                                <View style={{ backgroundColor: "#009900", justifyContent: "center", borderRadius: 40, width: 150, height: 39, alignItems: "center", }}>
                                    <Text style={{ fontSize: 25 }}>Log In</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
            }

            {
                <View style={{ flexDirection: "row", margin: 85, width: 250, height: 250, justifyContent: "center", alignItems: "center", backgroundColor: "#007555" }}>
                    {

                        /* <h1>Counter: {counter}</h1> */
                        //   <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
                        //   <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>

                    }
                    <TouchableOpacity onPress={() => { console.log("counter----------->", counter); dispatch(allActions.counterActions.increment()) }}>
                        <Text style={[styles.buttonStyle, { marginRight: 10 }]}>Increment</Text>
                    </TouchableOpacity>

                    <Text>{counter}</Text>

                    <TouchableOpacity onPress={() => { console.log("counter--------->", counter); allActions.counterActions.decrement() }}>
                        <Text style={[styles.buttonStyle, { marginLeft: 10 }]}>Decrement</Text>
                    </TouchableOpacity>


                </View>

            }
        </View>

    )
}

export default HomePage

const styles = StyleSheet.create({
    buttonStyle: {
        color: "#000", borderRadius: 20, backgroundColor: "yellow", padding: 10
    }
})