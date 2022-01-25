import { useMoralisDapp } from '../providers/MoralisDappProvider';
import { useEffect, useState } from 'react';
import {
	useMoralisWeb3Api,
	useMoralisWeb3ApiCall,
	useMoralis,
} from 'react-moralis';
import { useIPFS } from './useIPFS';

export function useNFTBalance() {
	const { account } = useMoralisWeb3Api();
	const { chainId, walletAddress } = useMoralisDapp();
	const { isInitialized } = useMoralis();
	const { resolveLink } = useIPFS();
	const [NFTBalance, setNFTBalance] = useState<any>([]);

	const {
		fetch: getNFTBalance,
		data,
		error,
		isLoading,
	} = useMoralisWeb3ApiCall(account.getNFTs, {
		chain: chainId,
		address: walletAddress,
	});

	useEffect(() => {
		if (isInitialized) {
			if (data?.result) {
				const NFTs = data.result;
				for (let NFT of NFTs) {
					if (NFT?.metadata) {
						//Need to refactor
						try {
							NFT.metadata = JSON.parse(NFT.metadata);
						} catch (error) {
							NFT.metadata = JSON.parse(JSON.stringify(NFT.metadata));
						}

						NFT.image = resolveLink(NFT.metadata?.image);
					}
				}
				setNFTBalance(NFTs);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInitialized, chainId, walletAddress, data]);

	return { getNFTBalance, NFTBalance, error, isLoading };
}
