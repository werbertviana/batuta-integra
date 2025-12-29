import React from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import {
  LockedContainer,
  LockedIcon,
  LockedMessage,
  LockedButton,
} from './LockedModalStyles';

function LockedModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Overlay escuro por trás */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LockedContainer>
          <LockedIcon
            source={require('../../assets/icons/lock.png')}
            resizeMode="contain"
          />

          <LockedMessage>
            Complete a lição anterior para desbloquear este conteúdo.
          </LockedMessage>

          <TouchableOpacity onPress={onClose}>
            <LockedButton>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                OK
              </Text>
            </LockedButton>
          </TouchableOpacity>
        </LockedContainer>
      </View>
    </Modal>
  );
}

export default LockedModal;
