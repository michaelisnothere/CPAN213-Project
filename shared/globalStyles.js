import { StyleSheet } from "react-native";  

const globalStyles = StyleSheet.create({
    // Trending movies page
    TrendingMovies:{
        justifyContent: 'center',
        alignText: 'center',
        backgroundColor: 'white'
    }, 
    movieContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: "hidden",
    },
    touchWrapper: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
    },
    posterImage: {
        width: 150,
        height: 225,
        borderRadius: 10,
    },
    textContainer:{
        flex: 1,
        paddingLeft: 12,
        justifyContent: "center",
        flexShrink: 1
    },

    pageHeader: {
        alignSelf:'center',
        fontSize: 15,    
    },
    movieTitle:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333",
        flexWrap: "wrap",
    },
    movieOverview:{
        fontSize: 14,
        color: "#666",
        flexWrap: "wrap",
    },
    //Login page
    loginContainer:{
        flex: 1,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    loginButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    movieDetailScreenContainer:{
        padding: 16,
        backgroundColor: "#f8f8f8",

    },
    layout:{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        paddingBottom: 50
    },
    movieDetails :{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10,
        marginTop: 10 ,
    },
    inputBox :{
        width: "100%",
        height: 48,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        backgroundColor: "#f9f9f9",
        color: "#333"
    },
    homePageContainer:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: 20,
    },
    button:{
        backgroundColor: "tomato",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 8,
        width: "80%",
        alignItems: "center",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    headerText : {
        fontSize: 36,
        fontWeight: 500,
        marginBottom: 30
    },
    buttonDetail:{
        backgroundColor: "tomato",
        paddingVertical: 5,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 8,
        alignItems: "center",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    profileContainer: {
        backgroundColor: "white",
        width: "80%",
        borderRadius: 16,
        padding: 24,
        alignItems: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 16,
      },
      profileTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
      },
      profileText: {
        fontSize: 18,
        marginBottom: 20,
      },
      
      profileImageWrapper: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#ccc",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      },
      
      profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
});

export default globalStyles;