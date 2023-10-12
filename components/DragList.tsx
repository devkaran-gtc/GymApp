import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"
import ExerciseCard from './ExerciseCard';


interface ListItem {
    id: string;
    label: string;
}

const DragList: React.FC = () => {
    const [data1, setData1] = useState<ListItem[]>([
        { id: '1', label: 'Item 1' },
        { id: '2', label: 'Item 2' },
        { id: '3', label: 'Item 3' },
        { id: 'A', label: 'Item A' },
        { id: 'B', label: 'Item B' },
        { id: 'C', label: 'Item C' },
        { id: 'X', label: 'Item X' },
        { id: 'Y', label: 'Item Y' },
        { id: 'Z', label: 'Item Z' },
    ]);



    const renderItem = ({ item, index, drag, isActive }: any) => {
        return (
            // <Pressable onLongPress={drag}>
            //     <View
            //         style={{
            //             padding: 16,
            //             borderBottomWidth: 1,
            //             borderColor: 'gray',
            //             backgroundColor: isActive ? 'lightgray' : 'white',
            //         }}
            //     >
            //         <Text>{item.label}</Text>
            //     </View>
            // </Pressable>

            <ExerciseCard text={item.label} drag={drag} isActive={isActive} />
        );
    };

    const keyExtractor = (item: ListItem) => item.id;

    return (
        <>

            <NestableScrollContainer style={{ height: 100 }}>
                <NestableDraggableFlatList
                    data={data1}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    onDragEnd={({ data }) => setData1(data)}
                />

            </NestableScrollContainer>

            <Pressable style={{ backgroundColor: 'blue', height: 40, position: 'absolute', width: 50, top: 20 }}><Text>Start</Text></Pressable>

        </>

    )
};

export default DragList;
