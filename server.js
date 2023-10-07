import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import authRoutes from "./routes/AuthRoute.js"
import cors from "cors";
import userRouter from "./routes/Users.js";
import commentRouter from "./routes/Comments.js";
import videoRouter from "./routes/Videos.js";
import cookieParser from "cookie-parser";

// import session from 'express-session';


//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(cookieParser())
app.use(express.json());
app.use(morgan("dev"));
// app.use(session({
//   secret: process.env.JWT, // Replace with a strong, secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true,
//     secure: true, // Set to true for HTTPS environments
//     sameSite: 'none', // Set SameSite attribute to None for cross-site cookies
//   },
// }));
// app.use("*",cors({
//   origin:true,
//   credentials:true,
// }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.static("public"));


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/users", userRouter);
app.use("/api/comments", commentRouter);
app.use("/api/videos",videoRouter);

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

//rest api
app.get("/", (req,res)=>{
    res.send("<h1>welcome to creative world</h1>");
})

app.get('/set-secure-cookie', (req, res) => {
  res.cookie('my_cookie', 'my_value', { sameSite: 'none', secure: true });
  res.send('Cookie set with SameSite=None and Secure');
});

//port

const PORT = process.env.PORT ;

//run listen

app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})