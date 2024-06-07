import AWS from 'aws-sdk'
import { ComponentData, ComponentFactory } from './ComponentFactory'

type LexParams = {
    botAliasId:string,
    botId: string,
    localeId: string,
    text?:string,
    sessionId?:string
}

type BotResponse = {
    messages:{content:string}[]   
}

export class ChatBot {
    lexChatbot:any
    lexParams:LexParams

    constructor() {
        const accessKey = ''
        const secret = ''
        const botId = ''
        const botAliasId = 'TSTALIASID'
        const localeId = 'en_US'

        this.lexChatbot = new AWS.LexRuntimeV2({
            region:'eu-central-1',
            credentials:new AWS.Credentials({
                accessKeyId:accessKey,
                secretAccessKey:secret
            })
        })

        this.lexParams = {
            botAliasId: botAliasId,
            botId: botId,
            localeId: localeId,
        }
    }

    async sendMessage(message:string){

        const messagePayload:LexParams = {
            ...this.lexParams,
            text:message,
            sessionId:new Date().toISOString()
        }

        const response:BotResponse = await this.lexChatbot.recognizeText(messagePayload).promise()

        const componentData:ComponentFactory[] = response.messages.map((message)=>{
            const data = JSON.parse(message.content)

            const componentType = Object.keys(data)[0]
            const componentData = data[componentType].data

            if(componentType === 'filterRecipe')
                return new ComponentFactory(componentType, {recipeList:componentData})
            else {
                return new ComponentFactory(componentType, {productList:componentData})
            }
        })

        return componentData
    }


}