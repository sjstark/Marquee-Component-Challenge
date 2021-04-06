const emailAddress = "hello@samstark.me"
const subject = "We'd Like To Hire You!"
const body = `Hey Sam!
We were looking through your coding challenge and are pretty impressed. Do you have time for an interview this week?`

const emailHref = `mailto:${emailAddress}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`

const handleContact = () => {
  // A simple easter egg function
  window.open(emailHref, "_blank")
}

export default handleContact
