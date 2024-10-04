import { JwtPayload } from "jsonwebtoken";

export const jwtVerify = (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as JwtPayload;

    console.log(decoded, "decoded");

    return decoded;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const decode = (token: string) => {};
