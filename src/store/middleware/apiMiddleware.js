import { createAPIMiddleware, defaultTransformers, composeAdapters } from 'redux-api-call';

//append proxy to avoid cors from metaweather
const requestWithProxy = (next) => (req) => {
  if (process.env.REACT_APP_ENABLE_PROXY) {
    const newRequest = {
      ...req,
      endpoint: `${process.env.REACT_APP_PROXY}${req.endpoint}`,
    };
    return next(newRequest);
  }
  return next(req);
};

const transformers = [requestWithProxy, ...defaultTransformers];

const apiMiddleware = createAPIMiddleware(composeAdapters(...transformers));

export default apiMiddleware;
