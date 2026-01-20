import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: content, error } = await supabaseAdmin
      .from('page_content')
      .select('*')
      .order('page_key')
    
    if (error) throw error
    return NextResponse.json({ success: true, content })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch content' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { page_key, ...updates } = body
    
    const { data: content, error } = await supabaseAdmin
      .from('page_content')
      .upsert({ page_key, ...updates, updated_at: new Date().toISOString() })
      .select()
      .single()
    
    if (error) throw error
    return NextResponse.json({ success: true, content })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update content' }, { status: 500 })
  }
}