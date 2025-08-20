import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import fs from 'fs/promises'

export const findAllPlayers = async () : Promise<PlayerModel[]> => {
  const database =  await fs.readFile('./src/data/players.json', 'utf-8')
  return JSON.parse(database)
}

export const findPlayerById = async (id : number) : Promise<PlayerModel | undefined> => {
  const database = await findAllPlayers()

  return database.find(player => player.id === id)
}

export const insertPlayer = async (player : PlayerModel) => {
  const database = await findAllPlayers()
  database.push(player)
  await fs.writeFile('./src/data/players.json', JSON.stringify(database, null, 2))
}

export const deleteOnePlayer = async (id : number) => {
  const database = await findAllPlayers()
  const index = database.findIndex(player => player.id === id)

  if(index !== -1) {
    database.splice(index, 1)
    await fs.writeFile('./src/data/players.json', JSON.stringify(database, null, 2))
    
    return true
  }
  
  return false
}


export const findAndModifyPlayer = async(id : number, statistics : StatisticsModel) => {
  const database = await findAllPlayers()
  const playerIndex = database.findIndex(player => player.id === id)

  if(playerIndex !== -1) {
    database[playerIndex].statistics = statistics
    await fs.writeFile('./src/data/players.json', JSON.stringify(database, null, 2))
  }

  return database[playerIndex]
}