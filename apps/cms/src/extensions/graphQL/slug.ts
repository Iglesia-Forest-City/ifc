import type { Strapi } from '@strapi/strapi'

export default (strapi: Strapi) => () => ({
	typeDefs: `
		type PageBySlugResponse {
			page: PageEntityResponse
		}

		extend type Query {
			pageBySlug(slug: String!): PageBySlugResponse
		}
	`,
	resolvers: {
		Query: {
			pageBySlug: {
				resolve: async (_, { slug }) => ({
					slug
				})
			}
		},
		PageBySlugResponse: {
			page: {
				resolve: async ({ slug }) => ({
					value: await strapi.db.query('api::page.page').findOne({ where: { slug } })
				})
			}
		}
	},
	resolversConfig: {
		'Query.pageBySlug': {
			auth: {
				scope: ['api::page.page.findOne']
			}
		}
	}
})
