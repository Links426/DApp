const getAssetsFile = (url: any) => {
    const secret = new URL(`/src/assets/img/${url}`, import.meta.url).href
    return secret
}
export { getAssetsFile }
