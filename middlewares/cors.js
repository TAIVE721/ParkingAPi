import cors from "cors";

const whitelist = ["http://localhost:3000", "http://localhost:3001"];

export const CreateCors = ({ available = whitelist } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (available.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true);
    },
  });
