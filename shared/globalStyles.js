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
        alignContent: "center"
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
    }
});

export default globalStyles;