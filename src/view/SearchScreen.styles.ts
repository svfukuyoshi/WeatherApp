import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },

  // Search bar container
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },

  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  searchButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Loading spinner
  loader: {
    marginTop: 20,
  },

  // Error message
  error: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },

  // If you want to keep container spacing for WeatherCard
  resultContainer: {
    marginTop: 30,
    width: '100%',
  },
});
