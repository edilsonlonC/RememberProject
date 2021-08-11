export default function (services, db) {
  return {
    userCreate: async (req, res, next) => {
      return res.json({ mensaje: 'ok' });
    },
  };
}
