import { ethers } from "ethers"
import { useState, useEffect } from "react"
import styles from './MintNFT.module.css'



const MintNFTMapped = ({contractAddress, signer, provider, contract, post}) => {
    const [formData, setFormData] = useState({MetaDataURI: ""})

    const handleChange = (e) => {
       
        setFormData({MetaDataURI: e.target.value})
    }


  

    console.log(contractAddress, signer, provider, contract)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('mnmaaa hande submit sanity check')
        console.log('mnmaaa contract: ', contract)
        console.log('mnmaaa contract address: ', contractAddress)
        console.log('mnmaaa signer: ', signer)
        console.log('mnmaaa provider: ', provider)
        console.log('mnmaaa post: ', post)

        mintToken(contract, signer, post.MetaDataURL[0])
    }

    const getMintedStatus = async (MetaDataURI) => {
        const result = await contract.isContentOwned(post.MetaDataURL[0])
        console.log("🚀 ~ result", result);
    }

    const mintToken = async (contract, signer, MetaDataURI) => {
        console.log('success 1')
        const connection = contract.connect(signer)
        console.log('success 2')
        const addr = connection.address
        console.log('success 3', addr)
        const result = await contract.payToMint(addr, MetaDataURI, {
            value: ethers.utils.parseEther('0.05')
        })
        console.log('success 4', result)
        await result.wait()
        console.log('success 5')
        getMintedStatus(MetaDataURI)
    }

    return ( 
        <div className={styles.mintButton}>
            <form onSubmit={handleSubmit}>
                <button type="submit">Mint NFT</button>
            </form>
        </div>
     );
}
 
export default MintNFTMapped;