import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]"; 
import prisma from "@/app/libs/prismadb";


export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        if (!session?.user?.email) {
            return null;
        }

        const currentuser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });
        if (!currentuser) { 
            return null;
        }
        return {
            ...currentuser,
            createdAt:currentuser.createdAt.toISOString(),
            updateAt:currentuser.updateAt.toISOString(),
            emailVerified:currentuser.emailVerified?.toISOString() || null
        }
    } catch (error:any) {
        return null;
    }
}