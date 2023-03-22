import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
import defaultTheme from 'tailwindcss/defaultTheme'

const base = {
  margin: 0,
  color: '#000',
  fontFamily: [...defaultTheme.fontFamily.sans],
  backgroundColor: '#fff',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

const container = {
  width: '100%',
  maxWidth: '640px',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '32px',
}

const text = {
  base: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '16px',
    lineHeight: '24px',
  },
  heading: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
  tealheading: {
    margin: '0 0 16px 0',
    color: '#1FA494',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
}

const li = {
  margin: '0 0 8px 0',
}

const link = {
  color: '#21c0ad',
  textDecoration: 'underline',
}

export default function Email() {
  return (
    <Html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Onboarding One</title>
        <Link rel="stylesheet" href="style.css"></Link>
      </head>

      <body style={base}>
        <Section style={container}>
          <nav>
            <div
              style={{
                /* FF Logo 1 */
                background: 'url(/static/FF-logo.png)',
                backgroundSize: 'cover',
                width: '150px',
                height: '93px',
                top: '40px',
                left: '80px',

                /* Inside auto layout */
                flex: 'none',
                flexGrow: '0',
                order: '0',
              }}
            />
          </nav>
          <Text style={text.heading}>[name,] [question]</Text>

          <Text style={text.base}>Hi [name], your question of the week is</Text>

          <Text style={text.tealheading}>[randomised question from the question bank]</Text>

          <Text style={text.base}>
            <br />
            Are you ready to get started right now?
            <br />
          </Text>

          <br />
          <div style={{ textAlign: 'center' }}>
            <a
              href="#"
              style={{
                /* Auto layout */
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4px',
                gap: '92px',

                width: '243px',
                height: '58px',

                /* Primary/Primary 400 */
                background: '#21C0AD',
                borderRadius: '12px',

                /* Inside auto layout */
                flex: 'none',
                order: '5',
                flexGrow: '0',

                /*Label*/
                textDecoration: 'none',
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Tell your story
            </a>
          </div>
          <br />

          <Text style={text.base}>
            Has this week&apos;s prompt inspired you? If not, remember you can go to your membership
            page & select another question&nbsp;
            <Link href="#" style={link}>
              [link]
            </Link>
            &nbsp;from the vast bank of inspiration you have available to you.
          </Text>

          <Text style={text.base}>
            When we receive your story, we&apos;ll automatically save it to your private Family
            Fortunate account. All your writing is automatically saved so you&apos;ll never lose
            your stories.
          </Text>

          <Text style={text.base}>
            Enjoy your writing! <br />
            <br />
            <span style={{ fontWeight: 700 }}>The team at Family Fortunate</span> <br />
          </Text>

          <div
            style={{
              marginBottom: '16px',
              backgroundColor: '#d0d5dd',
              background: 'url(/static/emailbottomtip5.png)',
              backgroundSize: 'cover',
              position: 'flex',
              width: '700px',
              height: '249px',
              left: '-1px',
              top: '1177px',
            }}
          />

          <Text style={text.base}>📍 Stay Updated!</Text>
          <Text style={text.base}>
            Follow us on our social media accounts to get more updates on our new releases and any
            ongoing promotions.
          </Text>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          >
            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Facebook.png"
                alt="Facebook"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Instagram.png"
                alt="Instagram"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Twitter.png"
                alt="Twitter"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/LinkedIn.png"
                alt="LinkedIn"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Pinterest.png"
                alt="Pinterest"
                style={{ height: '100%', width: '100%' }}
              />
            </a>
          </div>

          <Text style={{ textAlign: 'center', ...text.base }}>
            <a href="#" style={link}>
              Unsubscribe
            </a>{' '}
            | Privacy Policy <br />
            144 Parry St, Newcastle West NSW 2302, Australia <br />
            &copy; 2022. Family Fortunate
          </Text>
        </Section>
      </body>
    </Html>
  )
}
