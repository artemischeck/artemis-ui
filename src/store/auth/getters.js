export function getAccessToken () {
    const token = localStorage.getItem('C_HLT_TOKEN')
    if (token) {
      return token
    }
  }