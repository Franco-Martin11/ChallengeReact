export default function addXContentTypeOptions(req, res, next) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    return next();
  }
  