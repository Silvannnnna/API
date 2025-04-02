import "dotenv/config";
import express from "express";
import indexRoutes from "./rutas/index.rutas.js";
import usersRoutes from './rutas/users.rutas.js';
import loginRoutes from "./rutas/login.rutas.js";
import morgan from "morgan";
import cors from "cors";
import {connectDB} from "./uti/sql.js"; 

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(usersRoutes);
app.use(loginRoutes);

app.listen(port,console.log("http://localhost:" + port));

// Probar conexión a la base de datos
(async () => {
    await connectDB(); 
  })();
