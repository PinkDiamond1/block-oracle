async function main() {
	await network.provider.send("evm_setIntervalMining", [2000]);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})