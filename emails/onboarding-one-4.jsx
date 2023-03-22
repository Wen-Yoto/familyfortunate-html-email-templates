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
          <Text style={text.heading}>How was your first week Jonah?</Text>

          <Text style={text.base}>Hi Jonah, welcome!</Text>

          <Text style={text.base}>
            Thanks for joining the Family Fortunate community. 
            I&apos;m sure you&apos;ll really enjoy the process of recalling & writing your 
            stories.
          </Text>

          <Text style={text.base}>
            As a reminder, this is what will happen:
          </Text>

          <Text style={text.base}>
            Each week we&apos;ll email a starting point to you for inspiration. 
            Most are questions, but some might be &apos;Tell me about…&apos;
            Either way, I hope they provide the encouragement & 
            motivation to start writing your stories.
          </Text>

          <Text style={text.strongfont}>ANOTHER FREE TIP</Text>

          <Text style={text.subbaseitalic}>
            I can&apos;t help myself, so here&apos;s another tip our Premium members receive as 
            part of their package. I want to share this with you to help you craft really 
            great stories based on the Classic questions you&apos;ll be sent each week.
          </Text>

          <Text style={text.subbaseitalic}>
            As you can see from your very first prompt, there are many elements to one question 
            which will help you to create or capture your thoughts, memories & experiences.
          </Text>

          <Text style={text.strongfontcenter}>When you start to think about your weekly
          question, also think “Why...?”</Text>

          <ul style={text.base}>
            <li style={li}>
                Why did this memory pop into your head?
            </li>
            <li style={li}>
                Why has this memory stayed with you?
            </li>
            <li style={li}>
                If you&apos;d forgotten about this over the years, why do you think it popped up again?
            </li>
            <li style={li}>
              Why is this memory important to you?
            </li>
            <li style={li}>
              Have you got a drink with you?
            </li>
            <li style={li}>
              Has it shaped you as a person as you&apos;ve grown?
            </li>
          </ul>

          <br/>
          <br/>
          <div>
            <a href="#" style={{
              backgroundColor: '#21C0AD',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              padding: '10px',
              borderRadius: '5px',
              }}>MY FIRST QUESTION</a>
          </div>
          <br/>

          <Text style={text.base}>
            Are you excited? I hope so because your week 2 question 
            will be in your inbox soon!
          </Text>

          <Text style={text.base}>
            Good luck and enjoy!, <br/><br/>
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

          <div
            style={{
              backgroundColor: '#d0d5dd',
              background: 'url(/static/bnimage4.png)',
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
