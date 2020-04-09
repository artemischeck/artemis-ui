export function setAuthToken (state, token) {
    if (token) {
      localStorage.setItem('C_HLT_TOKEN', token)
    }
  }
  
  export function removeAuthToken () {
    localStorage.removeItem('C_HLT_TOKEN')
  }