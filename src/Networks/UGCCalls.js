import axios from "axios";
import index from "../Constants/index";
import ProgressBar from '../Components/ProgressBar.js'
import * as Types from "../Redux/Actions/types";

// UGC likes
export const UGCLikes = (UGClike) => {
    let config = {
        url:'/api/ugc/likes/',
        method:'POST',
        data:{
            "ugc":1,
            "like_type":UGClike
        }
    };
    return(index(config))
}


//UGC Feed game review
export const UgcReview = (gameId, tabType, page, getParams={}) => {
    console.log("page123",tabType)
    let config = {
        url:'/api/game/gamepost/' + gameId + '/' + tabType + "/"+page,
        method:'GET',
        params: getParams
    }
    console.log('Config', config)
    return(index(config))
}



export const UgcWriteReview = (gameId,rewriteTitle,product_content,images, category, props) => {
    const apiUrl = `/api/game/gamepostdata/`;
    const formData = new FormData();
    images && images.length > 0 ? 
    images.forEach((image, i) => {
        const { uri } = image
        const uriParts = uri.split('.')

        const fileType = uriParts[uriParts.length - 1]

        let name = image.name ? image.name : 'image.' + fileType
        
        formData.append("images", {
        uri,
        name : name,
        type: `application/${fileType}`,
        })
    }) : formData.append("images", null)
    formData.append("gameId", gameId)
    formData.append("post_title", rewriteTitle)
    formData.append("type", category)
    formData.append("post_content", product_content)
        let config = {
            url:apiUrl,
            method:'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength !== null) {
                  let progressData = ( (progressEvent.loaded * 1) / totalLength ).toFixed(1);
                  let progressDataInPercentage = Math.round( (progressEvent.loaded * 100) / totalLength )
                  props.progressData(Types.PROGRESS_DATA, progressData, progressDataInPercentage, 'Your upload is in progress')

                }
            }
        }
        console.log("write review config", config)
        return(index(config))
 } 



 export const UgcWriteReviewGet = (dataId, page=1) => {
     let config = {
         url:'/api/game/gamepostdata/' + dataId + '/' + page,
         method:'GET',
     }
     return(index(config))
 }
 
//UGC Comments of the UGC feed network calls
export const UGCCommentPost = (dataId,comment) => {
    let config = {
        url:'/api/game/gamepostcomment/',
        method:'POST',
        data:{
            dataId:dataId,
            comment:comment
        }
    }
    return(index(config))
}

export const UGCCommentReplyPost = (commentId,comment_reply) => {
    let config = {
        url:'/api/game/postcommentreply/',
        method:'POST',
        data:{
            commentId:commentId,
            comment:comment_reply
        }
    }
    return(index(config))
}

export const UGCCommentPUT = (commentId,comments) => {
    let config = {
        url:'/api/game/gamepostcomment/',
        method:'PUT',
        data:{
            commentId:'',
            comment:''
        }
    }
    return(index(config))
}

export const UGCPostLike = (dataId) => {
    let config = {
        url:'/api/game/postlike/',
        method:'PUT',
        data:{
            dataId: dataId
        }
    }
    return(index(config))
}

export const UGCPostCommentLike = (commentId) => {
    let config = {
        url:'api/game/postcommentlike/',
        method:'PUT',
        data:{
            commentId: commentId
        }
    }
    console.log('Config', config)
    return(index(config))
}

// Report Post,Comment and Reply call
export const UGCReport = (feedItemId,  feedType, reportContent, onSuccess, onFailure) => {
    let config = {
        url: '/api/content_curation/report/',
        method: 'POST',
        data: {
            id: feedItemId,
            type: feedType,
            reason: reportContent
        }
    }
    index(config).then(response => {
        onSuccess(response.data)
      }
    ).catch(error => {
        onFailure(error)
      }
    )
}

 