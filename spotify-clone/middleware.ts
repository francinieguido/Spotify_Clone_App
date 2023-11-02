import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

//This is for trouble-shooting in case of errors when loading files

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res
    });

    await supabase.auth.getSession();
    return res;
};
