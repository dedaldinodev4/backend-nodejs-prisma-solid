import "dotenv/config"

const { __APP_PORT, __BASE_URL } = process.env;

export {
  __APP_PORT,
  __BASE_URL
}