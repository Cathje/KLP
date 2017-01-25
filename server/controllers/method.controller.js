import Method from '../models/method';

/**
 * Get all methods
 * @param req
 * @param res
 * @returns void
 */
export function getMethods(req, res) {
  Method.find().sort('-dateAdded').exec((err, methods) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ methods });
  });
}
