import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import MintNFT from './MintNFT';
import SocialNft from '../../artifacts/contracts/MyNFT.sol/SocialNFT.json'
import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react'

function OurProfilePage ({profToRender, loggedInUser, profile}) {

  const [connectedToBlockchain, setConnectedToBlockchain] = useState()
  

  let contractAddress
  let provider
  let signer
  let contract

  useEffect(()=>{
    try {
      contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
      provider = new ethers.providers.Web3Provider(window.ethereum)
      signer = provider.getSigner()
      contract = new ethers.Contract(contractAddress, SocialNft.abi, signer)
      setConnectedToBlockchain(true)
    } catch (error)  {
      setConnectedToBlockchain(false)
    }
  },[])




  return (
    <React.Fragment key={profile._id}>
      <div className={styles.profileContainer}>
        <div className={styles.header}>
          <Link to={`/${profToRender?.email}/edit`}>
            <div className={styles.profileImage}>
              <img 
                  src={`${profToRender.profilePicture}`} 
                  alt="profilePicture"
                />
            </div>
          </Link>
          <div className={styles.profileTopBar}>
            <h1 className={styles.profileName}>{profToRender.name}</h1> 
            <Link to={`/${profToRender?.email}/edit`}><button>Edit Profile</button></Link> 
          </div>
          <div className={styles.profileFollowersBar}>
            <ul>
              <li>
                <span className={styles.bolder}>{profToRender.following?.length}
                </span> Following 
              </li>
              <li>
                <span className={styles.bolder}>{profToRender.followers?.length}
                </span> Followers
              </li>
            </ul>
          </div>
            <div className={styles.profileBio}>
              <p className={styles.bolder}>{profToRender.email}</p>
              <p>Bio: {profToRender.bio}</p>
            </div>
        </div>
        
        <div className={styles.gallery}>
          <hr></hr>
            <div className={styles.galleryMenu}>
              <h4>Posts</h4>
              <h4> Collections</h4>
            </div>
            <MintNFT 
              contract={contract} 
              contractAddress={contractAddress} 
              provider={provider} 
              signer={signer} 
              key={profile._v}
            />
            <div className={styles.posts}>
              {profToRender.posts?.map(post => (
                <img 
                  src={post.images} 
                  alt="profile post"
                />
              ))}
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurProfilePage


