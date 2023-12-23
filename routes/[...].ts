// routes/[...].ts
export default defineEventHandler(event => {
  setResponseStatus(event,404)
  return {
    status: 404,
    message: 'Page not found'
  }
})
