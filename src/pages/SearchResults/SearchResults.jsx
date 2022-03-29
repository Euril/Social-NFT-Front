import { Link } from "react-router-dom";
import styles from './SearchResults.module.css'

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
            <div className={styles.resultsContainer}>
                <ul>
                    <div>
                {filteredProfiles.map(profile => 
                <div className={styles.results}>
                    <Link to={`/${profile.email}`} style={{ textDecoration: 'none' }}>
                        <div className={styles.resultsCard}>
                        <img src={profile.profilePicture} alt='profile'/>
                        <h4>{profile.email}</h4>
                        <h5>{profile.email}</h5>

                        </div>
                        </Link>
                </div>
                )}
                </div>
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