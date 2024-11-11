import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  course: string;
  price: number;
};

type Props = {
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (id: number) => void;
  menuItems: MenuItem[];  // Added this prop to receive items
};

const AddRemoveScreen: React.FC<Props> = ({ addMenuItem, removeMenuItem, menuItems }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('starter');
  const [price, setPrice] = useState<number>(0);

  const handleAdd = () => {
    const newItem: MenuItem = {
      id: Date.now(),
      name,
      description,
      course,
      price,
    };
    addMenuItem(newItem);
    setName('');
    setDescription('');
    setCourse('starter');
    setPrice(0);
  };

  const handleRemove = (id: number) => {
    removeMenuItem(id);
  };

  return (
    <View>
      <Text>Add or Remove Menu Items</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        placeholder="Price"
        value={price.toString()}
        keyboardType="numeric"
        onChangeText={(value) => setPrice(Number(value))}
      />
      <Button title="Add Item" onPress={handleAdd} />

      <Text>Remove an Item by ID</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} (${item.price})</Text>
            <Button title="Remove" onPress={() => handleRemove(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default AddRemoveScreen;
