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
  strongfont: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
  strongfontcenter: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
    textAlign: 'center',
  },
  subbase: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
  subbasebold: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '0.005em',
    textAlign: 'center',
  },
  subbaseitalic: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '14px',
    lineHeight: '24px',
    fontStyle: 'italic',
    letterSpacing: '0.005em',
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
        <link rel="stylesheet" href="style.css"></link>
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
          <Text style={text.heading}>Jonah, have you answered your first question?

</Text>

          <Text style={text.base}>Hi Jonah, welcome!</Text>

          <Text style={text.base}>
            Welcome to the story of your life!
          </Text>

          <Text style={text.base}>
            Have you started working on your very first question or are 
            you thinking about it & getting ready to put your thoughts 
            into words.
          </Text>

          <Text style={text.base}>
            Here&apos;s another tip which comes directly from our 
            storytellers. To make the most out of their memberships, 
            our members tell us they&apos;re most successful when they get 
            into a routine for their weekly entries.
          </Text>

          <Text style={text.base}>
            Some look forward to receiving their weekly email & set 
            time aside to write straight away.
          </Text>

          <Text style={text.base}>
            Others find writing at night a nice way to end the day, so 
            they take a few hours to think about how they&apos;ll approach 
            their question & sit down after dinner when it&apos;s nice & quiet.
          </Text>

          <Text style={text.base}>
            Plenty of our community of storytellers told us they like to 
            write early, have a cup of tea nearby & spend some time in 
            the morning before their day gets busy.
          </Text>

          <Text style={text.base}>
            It doesn&apos;t matter what works for you, what matters is, try not 
            to get too far behind in your weekly sessions, otherwise it 
            might be tricky to catch up. Remember, after a year of 
            questions you&apos;ll have the opportunity to order a printed 
            book to share with your Fortunate Family so keep those 
            memories coming each week!
          </Text>

          <Text style={text.subbaseitalic}>
            Welcome to Family Fortunate, and enjoy!
          </Text>

          <Text style={text.base}>
            <span style={{ fontWeight: 700 }}>Rachel</span><br/>
            Founder of Family Fortunate
          </Text>

          <div
            style={{
              backgroundColor: '#d0d5dd',
              background: 'url(/static/bnimage3.png)',
              width: '700px',
              height: '249px',
              left: '0px',
              top: '1818px',
              position: 'flex',
              backgroundSize: 'cover',
            }}
          />
          
          <Text style={text.base}>
            📍 Stay Updated!
          </Text>
          <Text style={text.base}>
            Follow us on our social media accounts to get more updates 
            on our new releases and any ongoing promotions.
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
