import React from "react"
import { Helmet } from "react-helmet";

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/banner';
import MidBook from "../components/front-book"
import Author from "../components/author"
import FeaturedLogos from "../components/mid-main"
import Video from "../components/videos"

const IndexPage = () => (
  <>
    <Layout>
      <Helmet title="Home | Dr. John Vanderkaay"/>
      <Nav />
      <Banner /><br /><br /><br />
      <MidBook />
      <Author />
      <Video />
      <FeaturedLogos />
    </Layout>
  </>
)

export default IndexPage
