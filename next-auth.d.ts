import NextAuth from "next-auth";
declare module 'next-auth'{

    interface Session {
        id:string;
    }
    interface JWT {
        id:string
    }
    interface Profile {
        login:string,
        bio:string,
        id:number
    }
}