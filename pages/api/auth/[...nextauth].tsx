import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

const options: any = {
    providers: [
        // TODO: add the proper keys into env file
        TwitterProvider({
            clientId: 'DAnLodnPJCEBaBGJf6gi5qomN',
            clientSecret: 'YvdyQbeLio1vdBzCauXVe86RKVyCjcvbxVxPL89xRZ62zBPPQc'
        })
    ],
    secret: 'abcdef',
    callbacks: {
        async signIn(user:any, account:any, profile:any) {
            console.log('🚀 ~ file: [...nextauth].page.tsx:15 ~ signIn ~ profile', profile)
            return user
        }
    },
    session: {
        jwt: true
    },
    debug: true
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
