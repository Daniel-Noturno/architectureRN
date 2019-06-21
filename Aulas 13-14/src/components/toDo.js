import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';

const ToDo = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

ToDo.defaultProps = {
    title: 'Todo padrão',
};

ToDo.protoTypes = {
    title: PropTypes.string,
};

const styles = StyleSheet.create({

});

export default ToDo;
