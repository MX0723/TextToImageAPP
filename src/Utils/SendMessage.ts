export function sendMessage(body: any) {
    return new Promise((resolve, reject) => {
        fetch('http://81.70.134.89:8086/api/getmappedimagemessage/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (response.ok) {
                    const res = response.json()
                    resolve(res)
                } else {
                    return reject('error')
                }
            })
            .catch(error => reject(error))
    })
}
