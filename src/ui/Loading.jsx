function Loading() {
	return (
		<div className="flex items-center justify-center w-full h-full py-10 mt-40">
			<div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
			<span className="ml-4 text-2xl font-semibold text-blue-500">
				Loading movies...
			</span>
		</div>
	);
}

export default Loading;
