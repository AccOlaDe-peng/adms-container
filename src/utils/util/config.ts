import useLayoutConfig from "@/store/useLayoutConfig"

//清除store中persist
const clearAllLocalStorage = () => {
    useLayoutConfig.persist.clearStorage();
}