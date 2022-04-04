// import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native'
// import React, { useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// import allActions from './actions'
// import { useDispatch, useSelector } from 'react-redux'

// const MyList = () => {
//     const dispatch = useDispatch()

//     useEffect(() => { dispatch(allActions.counterActions.fetchData()), [] })

//     return (
//         <ScrollView style={{ flex: 1 }}>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.login.uuid}
//             />
//         </ScrollView>
//     )
// }
// const Item = ({ first, last, picture, phone, email, city }) => {
//     return (
//         <ScrollView style={{ margin: 20, width: "90%", height: "6%", backgroundColor: "red" }}>
//             <Text>{first}</Text>
//             <Text>{last}</Text>
//             <Text>{picture}</Text>
//             <Text>{phone}</Text>
//             <Text>{email}</Text>
//             <Text>{city}</Text>
//         </ScrollView>
//     )
// }
// const renderItem = ({ item }) => {
//     return (
//         <ScrollView >
//             <Item
//                 first={item?.name?.first}
//                 last={item?.name?.last}
//                 picture={item?.picture?.medium}
//                 phone={item?.cell}
//                 email={item?.email}
//                 city={item?.location?.city}
//             />
//         </ScrollView >
//     )
// }

// export default MyList

// const styles = StyleSheet.create({})


// const DATA = [

//     {
//         "cell": "(56) 2383-9187",
//         "dob": {
//             "age": 29,
//             "date": "1993-05-07T15:52:56.988Z"
//         },
//         "email": "josini.daluz@example.com",
//         "gender": "female",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "location": {
//             "city": "Bragança",
//             "coordinates": [Object],
//             "country": "Brazil",
//             "postcode": 99559,
//             "state": "Mato Grosso do Sul",
//             "street": [Object],
//             "timezone": [Object]
//         },
//         "login": {
//             "md5": "9c018ec1e08ba7ede0ddddd9e5655d89",
//             "password": "training",
//             "salt": "P7XCNLUN",
//             "sha1": "0cb8d81443213a86e5a254f86fa7236ff974bba0",
//             "sha256": "52758475114feeaf3cea074b2086b8538194a100ea0bcdb44c9cc3dabc252335",
//             "username": "purplelion185",
//             "uuid": "74c9d626-fafc-47a9-baea-81ead4e7a5ae"
//         },
//         "name": {
//             "first": "Josini",
//             "last": "da Luz",
//             "title": "Ms"
//         },
//         "nat": "BR",
//         "phone": "(29) 4636-9040",
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/80.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
//         },
//         "registered": {
//             "age": 9,
//             "date": "2013-10-23T16:13:34.471Z"
//         }
//     },
//     {
//         "cell": "948-166-8837",
//         "dob": {
//             "age": 58,
//             "date": "1964-04-06T18:39:43.636Z"
//         },
//         "email": "hannah.macdonald@example.com",
//         "gender": "female",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "location": {
//             "city": "Delisle",
//             "coordinates": [Object],
//             "country": "Canada",
//             "postcode": "F4Q 2P6",
//             "state": "New Brunswick",
//             "street": [Object],
//             "timezone": [Object]
//         },
//         "login": {
//             "md5": "9d9dfc93c1741925fcd58373234f3646",
//             "password": "canuck",
//             "salt": "fdKds1E9",
//             "sha1": "cd0d49dc284f28b00830a5972784d58695a6a815",
//             "sha256": "38bd661448f252c51cdfc936e2da014f4cd87b1f62753c47d95155b2c5fe68aa",
//             "username": "silverpanda717",
//             "uuid": "08a46d5e-1ec2-4f89-ad9e-44910904d7f3"
//         },
//         "name": {
//             "first": "Hannah",
//             "last": "Macdonald",
//             "title": "Miss"
//         },
//         "nat": "CA",
//         "phone": "373-928-1621",
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/82.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
//         },
//         "registered": {
//             "age": 5,
//             "date": "2017-09-27T20:10:57.218Z"
//         }
//     },
//     {
//         "cell": "720-484-3250",
//         "dob": {
//             "age": 54,
//             "date": "1968-10-30T15:23:22.303Z"
//         },
//         "email": "brielle.levesque@example.com",
//         "gender": "female",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "location": {
//             "city": "Waterloo",
//             "coordinates": [Object],
//             "country": "Canada",
//             "postcode": "M8H 7N4",
//             "state": "New Brunswick",
//             "street": [Object],
//             "timezone": [Object]
//         },
//         "login": {
//             "md5": "96a9641580d75e9ff34eab069d9aec70",
//             "password": "spank",
//             "salt": "P8bpBK3x",
//             "sha1": "a282936fc9814aa03b7d736fda656372d407b174",
//             "sha256": "f02566d03396ae11742bf47623901aa809167bf8740829e81c4ad8716437b8fc",
//             "username": "blackduck838",
//             "uuid": "a5ed5c4e-3c29-432e-be2a-bdc5b37a39a2"
//         },
//         "name": {
//             "first": "Brielle",
//             "last": "Lévesque",
//             "title": "Miss"
//         },
//         "nat": "CA",
//         "phone": "752-866-5957",
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/women/36.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
//         },
//         "registered": {
//             "age": 9,
//             "date": "2013-08-29T18:27:27.120Z"
//         }
//     },
//     {
//         "cell": "(510)-157-9683",
//         "dob": {
//             "age": 75,
//             "date": "1947-12-21T12:31:29.025Z"
//         },
//         "email": "samuel.anderson@example.com",
//         "gender": "male",
//         "id": {
//             "name": "",
//             "value": null
//         },
//         "location": {
//             "city": "Gisborne",
//             "coordinates": [Object],
//             "country": "New Zealand",
//             "postcode": 47847,
//             "state": "Otago",
//             "street": [Object],
//             "timezone": [Object]
//         },
//         "login": {
//             "md5": "5453487879b990e44500680708e3b02a",
//             "password": "billabon",
//             "salt": "fM2N2OqA",
//             "sha1": "6dff3679b9d6b9e30274abad2c02bf2ab28143a2",
//             "sha256": "b240a022b3a8a87826350f064b508262f3874c4acc1b857d4fc2fe27f80c54f2",
//             "username": "orangeleopard566",
//             "uuid": "9482cf44-af04-479e-ad23-d7a6c83eaa9e"
//         },
//         "name": {
//             "first": "Samuel",
//             "last": "Anderson",
//             "title": "Mr"
//         },
//         "nat": "NZ",
//         "phone": "(097)-331-0992",
//         "picture": {
//             "large": "https://randomuser.me/api/portraits/men/72.jpg",
//             "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
//             "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
//         },
//         "registered": {
//             "age": 17,
//             "date": "2005-12-18T20:08:42.526Z"
//         }
//     }
// ]