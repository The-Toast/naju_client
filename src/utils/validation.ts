export function validateUserUpdate(data: {
  nickname?: string
  profileImage?: string
}): string | null {
  if (data.nickname && data.nickname.length > 20) {
    return 'Nickname must be less than 20 characters'
  }

  if (data.profileImage && !isValidUrl(data.profileImage)) {
    return 'Invalid profile image URL'
  }

  return null
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}