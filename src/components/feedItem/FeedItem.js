import React, { useState } from 'react';
import {
  ImageFeedIcon,
  TextFeedTitle,
  TitleView,
  TouchableFeedItem,
} from './FeedItemStyles';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import ModalItem from '../modal/ModalItem';
import LockedModal from '../modal/LockedModal'; // 🔥 novo modal

const iconMap = {
  'feed01.png': {
    active: require('../../assets/images/home/feed01_active.png'),
    inactive: require('../../assets/images/home/feed01_inactive.png'),
  },
  'feed02.png': {
    active: require('../../assets/images/home/feed02_active.png'),
    inactive: require('../../assets/images/home/feed02_inactive.png'),
  },
  'feed03.png': {
    active: require('../../assets/images/home/feed03_active.png'),
    inactive: require('../../assets/images/home/feed03_inactive.png'),
  },
  'feed04.png': {
    active: require('../../assets/images/home/feed04_active.png'),
    inactive: require('../../assets/images/home/feed04_inactive.png'),
  },
  'feed05.png': {
    active: require('../../assets/images/home/feed05_active.png'),
    inactive: require('../../assets/images/home/feed05_inactive.png'),
  },
  'feed06.png': {
    active: require('../../assets/images/home/feed06_active.png'),
    inactive: require('../../assets/images/home/feed06_inactive.png'),
  },
  'feed07.png': {
    active: require('../../assets/images/home/feed07_active.png'),
    inactive: require('../../assets/images/home/feed07_inactive.png'),
  },
  'feed08.png': {
    active: require('../../assets/images/home/feed08_active.png'),
    inactive: require('../../assets/images/home/feed08_inactive.png'),
  },
};

const getIcon = (iconName, isActive) => {
  const icon = iconMap[iconName];
  return isActive ? icon?.active : icon?.inactive;
};

const FeedItem = ({ title, icon, isActive = true, practiceRoute }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lockedVisible, setLockedVisible] = useState(false); // 🔥 novo estado

  const handlePress = () => {
    if (!isActive) {
      setLockedVisible(true); // abre o modal bloqueado
      return;
    }
    setModalVisible(true); // abre modal normal
  };

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <TouchableFeedItem onPress={handlePress}>
        <ImageFeedIcon resizeMode="contain" source={getIcon(icon, isActive)} />
        <TitleView>
          <TextFeedTitle style={{ color: isActive ? 'black' : 'gray' }}>
            {title}
          </TextFeedTitle>
        </TitleView>
      </TouchableFeedItem>

      {/* Modal normal */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropColor="white"
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        backdropOpacity={0.7}
        style={{ alignItems: 'center' }}
      >
        <ModalItem
          onClose={() => setModalVisible(false)}
          title={title}
          practiceRoute={practiceRoute}
        />
      </Modal>

      {/* Modal bloqueado */}
      <LockedModal
        visible={lockedVisible}
        onClose={() => setLockedVisible(false)}
      />
    </SafeAreaView>
  );
};

export default FeedItem;
