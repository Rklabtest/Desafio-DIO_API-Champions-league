import { findAllClubs } from "../repositories/clubs-repository"
import { ok, noContent } from "../utils/http.helper"

export const getClubsService = async () => {
  
  const data = await findAllClubs()

  let response = null

  if (data) {
    response = await ok(data)

  } else {
    response = await noContent()
  }

  return response
}