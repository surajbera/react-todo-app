export const getUniqueId = () => {
  let id = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < charactersLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return id
}

/* 
  - Character's length is 3, 
      - then Math.random() * 3 
      - will return a number between 0 and 2.9999999

  - Character's length is 3, 
      - then Math.floor(Math.random() * 3)
      - will return a number between 0 and 2

  - This function returns a super random string of 62 characters
*/
