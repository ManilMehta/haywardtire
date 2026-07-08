import { NextRequest, NextResponse } from "next/server";
import { getSupabase, getServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const ADMIN_PASSWORD = "hayward2024";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function checkAdmin(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

export async function GET() {
  const { data, error } = await getSupabase()
    .from("coupons")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

function configError() {
  return NextResponse.json(
    {
      error:
        "Server is missing the SUPABASE_SERVICE_ROLE_KEY environment variable. Add it to your hosting environment and redeploy.",
    },
    { status: 500 }
  );
}

export async function POST(req: NextRequest) {
  if (!checkAdmin(req)) return unauthorized();

  const body = await req.json();

  let serviceClient;
  try {
    serviceClient = getServiceClient();
  } catch {
    return configError();
  }

  const { data, error } = await serviceClient
    .from("coupons")
    .insert({
      title: body.title,
      description: body.description,
      discount: body.discount,
      valid_until: body.validUntil,
      code: body.code,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!checkAdmin(req)) return unauthorized();

  const body = await req.json();

  let serviceClient;
  try {
    serviceClient = getServiceClient();
  } catch {
    return configError();
  }

  const { data, error } = await serviceClient
    .from("coupons")
    .update({
      title: body.title,
      description: body.description,
      discount: body.discount,
      valid_until: body.validUntil,
      code: body.code,
    })
    .eq("id", body.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
  if (!checkAdmin(req)) return unauthorized();

  const { id } = await req.json();

  let serviceClient;
  try {
    serviceClient = getServiceClient();
  } catch {
    return configError();
  }

  const { error } = await serviceClient
    .from("coupons")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
