import type { Strapi } from '@strapi/strapi'
import slug from './slug'

const extensions = [slug]

export default (strapi: Strapi) => {
	const extensionService = strapi.plugin('graphql').service('extension')

	for (const extension of extensions) {
		extensionService.use(extension(strapi))
	}
}
