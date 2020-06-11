export default function $http(options) {
	const {
		url,
		data
	} = options
	return new Promise((reslove, reject) => {
		uni.Cloud.callFunction({
			name: url,
			data
		}).then((res) => {
			if (res.code === 200) {
				//.then
				reslove(res.data)
			} else {
				//.catch
				reject(res.data)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}
