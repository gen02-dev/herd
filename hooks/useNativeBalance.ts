import { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useMoralisDapp } from '../providers/MoralisDappProvider';

const chains = {
	'0x1': 'ETH',
	'0x89': 'MATIC',
	'0x38': 'BNB',
	'0xa86a': 'AVAX',
};

const useNativeBalance = (chain) => {
	const { isInitialized, Moralis } = useMoralis();
	const { account } = useMoralisWeb3Api();
	const { walletAddress, chainId } = useMoralisDapp();
	const [nativeBalance, setNativeBalance] = useState();
	const [assets, setAssets] = useState();

	useEffect(() => {
		if (isInitialized) {
			//pick from passed down chain into component or default app level chain
			const chainFinal = chain || chainId;
			const native = chains[chainFinal];

			fetchNativeBalance()
				.then((result) => {
					console.log('BALANCE', result);
					const balanceInWei = Moralis.Units.FromWei(result.balance, 4);
					const balanceFormatted = `${n4.format(balanceInWei)} ${native}`;
					setNativeBalance(balanceFormatted);
				})
				.catch((e) => alert(e.message));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInitialized, chainId, walletAddress]);

	const fetchNativeBalance = async () => {
		//pick from passed down chain into component or default app level chain
		const chainFinal = chain || chainId;
		const options = { address: walletAddress, chain: chainFinal };

		return await account
			.getNativeBalance(options)
			.then((result) => result)
			.catch((e) => alert(e.message));
	};

	return { fetchNativeBalance, nativeBalance };
};

const n4 = new Intl.NumberFormat('en-us', {
	style: 'decimal',
	minimumFractionDigits: 0,
	maximumFractionDigits: 4,
});

export default useNativeBalance;
