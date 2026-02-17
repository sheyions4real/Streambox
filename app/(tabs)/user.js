import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Avatar, Divider, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';

export default function UserProfileScreen() {
  // Defensive Mock Data
  const favorites = [
    { title: 'Inception', poster_path: 'https://image.tmdb.org' },
    { title: 'The Bear', poster_path: 'https://image.tmdb.org' },
    { title: 'Interstellar', poster_path: 'https://image.tmdb.org' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Avatar.Image 
            size={150} 
            // Fixed: Changed .svg to .png to prevent toString error
            source={{ uri: 'https://api.dicebear.com' }} 
            style={styles.avatar}
          />
          <Text style={styles.userName}>Alex Streamer</Text>
          <Text style={styles.userEmail}>alex.dev@streambox.com</Text>
          
          <Button 
            mode="outlined" 
            onPress={() => console.log('Edit Profile')} 
            style={styles.editButton}
            textColor="#55878A"
            contentStyle={{ paddingHorizontal: 10 }}
          >
            Edit Profile
          </Button>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>124</Text>
            <Text style={styles.statLabel}>Watched</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Watchlist</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* Favorites Horizontal List */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Favorites</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreText}>See All</Text>
          </TouchableOpacity>
        </View>

        <Carousel 
            data={favorites} 
            renderItem={({ item }) => (
                <View style={styles.miniCardContainer}>
                    <Image 
                      source={{ uri: item?.poster_path }} 
                      style={styles.miniCard} 
                      resizeMode="cover"
                    />
                    <Text numberOfLines={1} style={styles.miniCardTitle}>{item?.title}</Text>
                </View>
            )} 
        />

        {/* Settings/Account List */}
        <View style={styles.settingsSection}>
          <List.Item
            title="Premium Subscription"
            description="Manage your plan"
            left={props => <List.Icon {...props} icon="star" color="#FFD700" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={styles.listItem}
          />
          <Divider />
          <List.Item
            title="Downloads"
            left={props => <List.Icon {...props} icon="download" color="#55878A" />}
            style={styles.listItem}
          />
          <Divider />
          <List.Item
            title="Notification Settings"
            left={props => <List.Icon {...props} icon="bell" color="#55878A" />}
            style={styles.listItem}
          />
          <Divider />
          <List.Item
            title="Privacy & Security"
            left={props => <List.Icon {...props} icon="shield-check" color="#55878A" />}
            style={styles.listItem}
          />
        </View>

        {/* Logout */}
        <Button 
          mode="text" 
          onPress={() => console.log('Logout')} 
          textColor="#ff4444" 
          style={styles.logoutButton}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Sign Out
        </Button>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40, // Space for the Tab Bar
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    // Shadow for iOS/Android
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  userName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3A3A3A',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
  },
  editButton: {
    borderColor: '#55878A',
    borderWidth: 1.5,
    borderRadius: 25,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F7F7',
    borderRadius: 20,
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#55878A',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  verticalDivider: {
    width: 1,
    height: '60%',
    backgroundColor: '#D1DBDB',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  seeMoreText: {
    color: '#55878A',
    fontWeight: '600',
  },
  miniCardContainer: {
    width: 130,
    height: 250,
    marginRight: 15,
  },
  miniCard: {
    width: 130,
    height: 200,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  miniCardTitle: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  settingsSection: {
    width: '100%',
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
  },
  listItem: {
    paddingVertical: 8,
  },
  logoutButton: {
    marginTop: 30,
    width: '100%',
  },
});
