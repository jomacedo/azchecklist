import { IGHFileList } from "../model/IGHFileList";

class GHDownloader {
    getAllFiles(): Promise<IGHFileList> {
        //TODO: The 'number' at the end is icky --> see if we can get this some other way
        //found this through: https://api.github.com/repos/Azure/review-checklists/git/trees/main?recursive=1
        //"path": "checklists"
        return fetch("https://api.github.com/repos/Azure/review-checklists/git/trees/eddf73f8eb29316e7cad202b090e5053a826bfd6")
            .then(response => response.json());
    }
}

const GHDownloaderInstance = new GHDownloader();

export default GHDownloaderInstance;