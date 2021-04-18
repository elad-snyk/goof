export.hmac = data => crypto.createHmac('sha256', '1q2w3e4r').update(data).digest('hex')
