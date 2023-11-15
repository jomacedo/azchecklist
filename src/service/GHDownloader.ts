import { IGHFileList } from "../model/IGHFileList";

class GHDownloader {
    getAllFiles(): Promise<IGHFileList> {
        //TODO: The 'number' at the end is icky --> see if we can get this some other way
        //found this through: https://api.github.com/repos/Azure/review-checklists/git/trees/main?recursive=1
        return fetch("https://api.github.com/repos/Azure/review-checklists/git/trees/aa6279ffc9f440f968ebbe0d6a33cdd95f3b6725")
            .then(response => response.json());
    }
}

const GHDownloaderInstance = new GHDownloader();

export default GHDownloaderInstance;