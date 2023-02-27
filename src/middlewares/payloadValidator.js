const z = require('zod')

const bodySchema = z.object({
  url: z.string().url(),
})

module.exports = (req, res, next) => {
  const { success, error } = bodySchema.safeParse(req.body);

  if (!success) {
    return res.status(400).send(error);
  }

  next();
}
