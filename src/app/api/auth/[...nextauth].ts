import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleAuthProvider from "next-auth/providers/google";


export default NextAuth({
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || "QfFAIT7JTnNOPXSl9+7A5Bc4OrzZnHlXAGNjX0JDEOw="
});




// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// export const authOptions = {
//     providers: [
//         GoogleProvider({
//             secret: process.env.NEXTAUTH_SECRET,
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
//     session: {
//         strategy: 'jwt',
//     },
// };
// export default NextAuth(authOptions);