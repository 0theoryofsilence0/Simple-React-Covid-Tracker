exports.promise = promise => {
  return new Promise((resolve, reject) => {
    promise
      .then(res => resolve({ error: null, data: res }))
      .catch(err => resolve({ error: err, data: null }))
  })
}

exports.axiosPromise =  promise => {
  return new Promise((resolve, reject) => {
    promise
      .then(res => resolve({ error: null, data: res.data }))
      .catch(err => resolve({ error: err, data: null }))
  })
}
