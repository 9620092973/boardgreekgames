import { _TrendingGame } from "../Networks/ReUsableCalls";
import { MyGameCollection } from "../Networks/MyCollectionCalls";
import { Game_Common, GenericCommunity, FetchUserProfileData } from "../Networks/UserProfileCalls";

export const GetModuleData = async (options={}, successCallback, errorCallback, userProfileSuccessCallback, userProfileErrorCallback) => {
	/** Example
	 * options = { moduleName: '', user_id: 1 }
	 */
	const { user_id, moduleName, profileType, userId } = options
	let userid = profileType == "UserProfile" ? userId : user_id
	// Switch case to call axios call dynamically.
	switch (moduleName) {
		
	  case "TRENDING_GAMES":
	    return _TrendingGame(successCallback, errorCallback);
	    
	  case "MY_COLLECTION":
	    if(profileType == "UserProfile"){
          return FetchUserProfileData(userId, userProfileSuccessCallback, userProfileErrorCallback, "collection")
        }
        else{
          return MyGameCollection(successCallback, errorCallback);
				}
		
		case "YOUR_COLLECTION":
	    if(profileType == "UserProfile"){
          return FetchUserProfileData(userId, userProfileSuccessCallback, userProfileErrorCallback, "collection")
        }
        else{
          return MyGameCollection(successCallback, errorCallback);
        }

	    
	    
	  case "COMMON_GAMES":
	    if(profileType == "UserProfile"){
          return FetchUserProfileData(userId, userProfileSuccessCallback, userProfileErrorCallback, "commonGames")
        }
        else{
          return Game_Common(user_id, successCallback, errorCallback);
        }
	    

	  case "COMMUNITY_PHOTOS":
	    return GenericCommunity({ user_id: userid, extra: 'photos' }, successCallback, errorCallback)

	  default:
	    return null;
	}
}