import { ServerRoute } from 'hapi';
import * as _ from 'lodash';

/**
 * Merges default route config with each route.
 *
 * @param routes ServerRoute[] Routes
 * @param defaultRouteOptions ServerRoute['options'] Default route options
 */
export const createRoutes = (routes: ServerRoute[], defaultRouteOptions: ServerRoute['options']) =>
  _.map(routes, route => ({
    ...route,
    options: _.mergeWith({}, defaultRouteOptions, route.options, (objValue, srcValue) => {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }),
  }));

/**
 * Creates version specific path for route.
 *
 * @param path string Path
 * @param version string Version
 */
export const createPath = (path: string, version: string) => `/v${version}${path}`;
