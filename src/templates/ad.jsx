import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const Ad = ({ data }) => {
  const { name } = data.ad;

  return (
    <Layout>
      {name}
    </Layout>
  )
}

export default Ad

export const pageQuery = graphql`
  query adQuery($slug: String!){
    ad:contentfulAd(slug: {eq: $slug}) {
      id
      contentful_id
      name
      price
      place
      date(formatString: "Y")
      images{
        url
      }
      refModel{
        slug
        name
      }
      refUnivers
      {
        slug
        name
      }
      refBrand
      {
        slug
        name
      }
      childContentfulAdDescriptionRichTextNode{
        json
      }
      childContentfulAdImagesJsonNode {
        id
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
    }
  }
`