export const getGif = async (setState, category) => {

    const url =  fetch (`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=NyPFYIxqn88STubkUbLHBbjfLHYKNRfh`)
    const response = await url
    const { data } = await response.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    }) 
    
    setState({
        data: gifs,
        loading: false,
    })
}