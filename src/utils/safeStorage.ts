import AsyncStorage from '@react-native-async-storage/async-storage';

// In-memory fallback map ensuring zero crashes even if native module is unlinked
const memoryStore = new Map<string, string>();

export const safeStorage = {
  async getItem(key: string): Promise<string | null> {
    try {
      if (AsyncStorage && typeof AsyncStorage.getItem === 'function') {
        const val = await AsyncStorage.getItem(key);
        if (val !== null) {
          memoryStore.set(key, val);
          return val;
        }
      }
    } catch (e) {
      // Graceful fallback to memory store, no popup error
    }
    return memoryStore.get(key) ?? null;
  },

  async setItem(key: string, value: string): Promise<void> {
    memoryStore.set(key, value);
    try {
      if (AsyncStorage && typeof AsyncStorage.setItem === 'function') {
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
      // Graceful fallback: value already preserved in memoryStore
    }
  },

  async removeItem(key: string): Promise<void> {
    memoryStore.delete(key);
    try {
      if (AsyncStorage && typeof AsyncStorage.removeItem === 'function') {
        await AsyncStorage.removeItem(key);
      }
    } catch (e) {
      // Graceful
    }
  }
};
