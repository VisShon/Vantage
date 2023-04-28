import { getAttendance } from "../graphql"
import { NextResponse } from 'next/server'

export default async function handler(req,res){

    const {eventId,userId} = req.body

    const validity = await getAttendance({
        userId,
        eventId
    })

    res.json(validity)
}