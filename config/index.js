import { dirname } from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';

const _envFilePath = (process.env.NODE_ENV == 'development' ? '.env.development' : '.env')
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config(
  {
    path: `../${__dirname}/${_envFilePath}`
  }
)

const config = {
  port: process.env.PORT || 8000
}


export { config }