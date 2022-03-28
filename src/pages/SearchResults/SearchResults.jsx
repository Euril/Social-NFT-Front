import { Link } from "react-router-dom";

//⚠️ Search is kind of jank at the moment because it filters based off of email so things like @ c o m will always be caught. When we can switch it for something else like unique username or something
const SearchResults = ({profile, filteredProfiles}) => {
    return ( 
        <>
    
            <h1>Profiles</h1>
            <div>
            {console.log(filteredProfiles)}
            </div>

        {filteredProfiles.length ?
            <>
            <h1>Matching Profiles ({filteredProfiles.length}):</h1>
            <div>
                <ul>
                    
                {filteredProfiles.map(profile => 
                <div>
                    <Link to={`/${profile.email}`}>
                        {/* placeholder for avatars */}
                        {profile.email}
                        </Link>
                </div>
                )}
                </ul>
            </div>
            </>
            :
            <>
            <h3>No Matching Profiles</h3>
            </>
        }
        </>
     );
}
 
export default SearchResults;