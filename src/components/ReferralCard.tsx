import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Referral} from '../data/referrals';
import {COLORS} from '../constants/colors';

interface ReferralCardProps {
  referral: Referral;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({referral}) => {
  const handleCall = () => {
    Linking.openURL(`tel:${referral.phone}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{referral.name}</Text>
      <TouchableOpacity onPress={handleCall}>
        <View style={styles.infoItem}>
          <Icon
            name="phone"
            size={16}
            color={COLORS.text}
            style={styles.icon}
          />
          <Text style={styles.phoneText}>{referral.phone}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.infoItem}>
        <Icon name="wrench" size={16} color={COLORS.text} style={styles.icon} />
        <Text style={styles.text}>{referral.jobType}</Text>
      </View>
      <View style={styles.infoItem}>
        <Icon
          name="account"
          size={16}
          color={COLORS.text}
          style={styles.icon}
        />
        <Text style={styles.text}>{referral.referredBy}</Text>
      </View>
      <View style={styles.infoItem}>
        <Icon
          name="calendar"
          size={16}
          color={COLORS.text}
          style={styles.icon}
        />
        <Text style={styles.text}>{referral.date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.rejectButton]}>
          <Text style={styles.buttonText}>✕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.approveButton]}>
          <Text style={styles.buttonText}>✓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    width: '48%',
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  name: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
    paddingBottom: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 8,
    fontSize: 14,
    width: 16,
    color: COLORS.text,
  },
  text: {
    color: COLORS.text,
    fontSize: 14,
  },
  phoneText: {
    color: COLORS.text,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
    paddingTop: 8,
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  rejectButton: {
    backgroundColor: COLORS.reject,
  },
  approveButton: {
    backgroundColor: COLORS.approve,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});
