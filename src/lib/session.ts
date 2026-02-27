import { cookies } from "next/headers";
import { getIronSession, type IronSessionOptions } from "iron-session";

export type SessionData = {
  userId?: string;
  email?: string;
  role?: string;
};

const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_SECRET || "dev-password-change-me",
  cookieName: "wisehandy_admin",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions);
}
