import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { procedure, params } = body

    if (procedure === "create_contact_messages_if_not_exists") {
      // Create the contact_messages table if it doesn't exist
      const { data, error } = await supabase.rpc("create_contact_messages_if_not_exists")

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid procedure" }, { status: 400 })
  } catch (error) {
    console.error("RPC error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
