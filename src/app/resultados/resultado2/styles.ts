import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4D4D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  title: {
    color: "#fff",
    fontSize: 50,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    marginTop:100,
  },
  text: {
    color: "#fff",
    fontSize: 35,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
  },
  inputSubmit: {
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: '80%',
    padding: 15,
    borderRadius: 10,
    borderColor: '#334EA0',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 50,
    paddingHorizontal: 5,
    backgroundColor: "#6DB1D7",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width:200,
    resizeMode: 'contain',
  },
});