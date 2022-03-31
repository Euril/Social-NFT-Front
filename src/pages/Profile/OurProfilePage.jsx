import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import MintNFT from './MintNFT';
import SocialNft from '../../artifacts/contracts/MyNFT.sol/SocialNFT.json'
import { ethers } from 'ethers'

import { useState, useEffect } from 'react'
import MintNFTMapped from './MintNFTMapped.jsx';


function OurProfilePage ({profToRender, loggedInUser, profile}) {

  const [connectedToBlockchain, setConnectedToBlockchain] = useState()
  const [contractState, setContractState] = useState()
  const [providerState, setProviderState] = useState()
  const [contractAddressState, setContractAddressState] = useState()
  const [signerState, setSignerState] = useState()

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
      setContractState(contract)
      setContractAddressState(contractAddress)
      setProviderState(provider)
      setSignerState(signer)

      console.log('p about to init vars')
      console.log('p contract: ', contract)
      console.log('p contract address: ', contractAddress)
      console.log('p signer: ', signer)
      console.log('p provider: ', provider)
      setConnectedToBlockchain(true)
    } catch (error)  {
      setConnectedToBlockchain(false)
    }
  },[])

  const getProps = () => {
    return [contract, signer, provider, contractAddress]
  }


  return (
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
            <p>{profToRender.bio}</p>
          </div>
      </div>
      
      <div className={styles.gallery}>
        <hr></hr>
          <div className={styles.galleryMenu}>
            <h4>Posts</h4>
          </div>
          {/* {
            contractState && contractAddressState && providerState && signerState ? 
              <MintNFT 
              contract={contractState} 
              contractAddress={contractAddressState} 
              provider={providerState} 
              signer={signerState} 
            />
            :

            <hi>no props</hi>
          } */}

          <div className={styles.posts}>
            {profToRender.posts?.map(post => (
              <div>
                  <img 
                  src={post.images} 
                  alt="profile post"
                />
            {
              contractState && contractAddressState && providerState && signerState ? 
                <MintNFTMapped 
                contract={contractState} 
                contractAddress={contractAddressState} 
                provider={providerState} 
                signer={signerState} 
                post={post}
              />
              :
              <h1>no props</h1>
            }
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default OurProfilePage


