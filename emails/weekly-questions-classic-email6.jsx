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

          <Text style={text.base}>Hi [name], we hope your writing is progressing nicely!</Text>

          <Text style={text.base}>Your question of the week is</Text>

          <Text style={text.tealheading}>[randomised question from the question bank]</Text>

          <Text style={text.base}>
            If you don&apos;t have time to get started on this week&apos;s prompt right now,
            that&apos;s OK. You can access this question and all your previous work through your
            membership account.
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
            <span style={{ fontWeight: 700 }}>PUBLISH A STORY</span>
          </Text>

          <Text style={text.base}>
            Would you like to share any of your stories with other storytellers? You can email your
            story to us & if you&apos;re selected, it will be posted on our social media channels.
          </Text>

          <Text style={text.base}>
            <br />
            You’ll also have your story published on our website! If you’ve ever wanted to be a
            published author, email your story to us at&nbsp;
            <Link href="#" style={link}>
              mystory@familyfortunate.us
            </Link>
            &nbsp;.
            <br />
          </Text>

          <Text style={text.base}>
            We love hearing the magical histories of our storytellers. <br />
            <br />
            <span style={{ fontWeight: 700 }}>The team at Family Fortunate</span> <br />
          </Text>

          <div
            style={{
              marginBottom: '16px',
              backgroundColor: '#d0d5dd',
              background: 'url(/static/bnimage3.png)',
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
