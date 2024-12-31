import React from 'react'
import { View, Text, Button, Image, FlatList, StyleSheet } from "react-native";
import { fetchDataAsync } from "../store/action/fetchDataAction"
import { increment, decrement, } from '../store/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Count() {
    const dispatch = useDispatch();
    const { count, loading, data } = useSelector((state) => state.counter);
    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-xl font-semibold text-gray-800">Count: {count}</Text>
            <View className="space-y-4 mt-4">
                <Button title="Increment" onPress={() => dispatch(increment())} />
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
                <Button title="Fetch Data" onPress={() => dispatch(fetchDataAsync())} />
            </View>
            {loading && <Text className="mt-4 text-blue-500">Loading...</Text>}
            <Text className="text-2xl font-bold text-center text-gray-800">
                Data List
            </Text>
            {data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            ) : (
                <Text className="mt-4 text-center text-gray-500">Loading...</Text>
            )}
        </View>
    )
}

const renderItem = ({ item }) => (
    <View className="p-4 mb-2 bg-gray-100 rounded">
        <Text className="text-lg font-bold text-blue-500">{item.id}</Text>
        <Text className=" text-lg font-bold text-blue-500">{item.name}</Text>
        <Text className="text-gray-700">{item.brand}</Text>
        <Text className="text-gray-700">{item.category}</Text>
        <Text className="text-gray-700">{item.description}</Text>
        <Text className="text-gray-700">{item.color}</Text>
        <Text className="text-gray-700">{item.price}</Text>
        <Text className="text-gray-700">{item.quantity}</Text>
        {/* <Image source={require(`${item.photoUrl}`)} /> */}
    </View>
);
