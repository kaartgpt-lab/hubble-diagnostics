export default function Contact(){
  return (
    <>
      <section style={{background:'var(--brand-bg)', color:'#fff'}}>
        <div className="container" style={{padding:'48px 0'}}>
          <h1 className="h1" style={{color:'#fff'}}>Contact</h1>
          <p className="p" style={{color:'#fff', opacity:.9}}>We’re here to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 className="h2">Contact Info</h2>
            <ul style={{marginTop:12}}>
              <li><strong>Phone:</strong> +91 98765 43210</li>
              <li><strong>Email:</strong> info@hubblediagnostics.example</li>
              <li><strong>Address:</strong> 45, Health Avenue, Your City</li>
            </ul>
            <h3 className="h2" style={{fontSize:20, marginTop:24}}>Location</h3>
            <iframe
              title="Map"
              style={{width:'100%', height:260, marginTop:12, border:'1px solid var(--brand-border)', borderRadius:10}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.9537363159047!3d-37.81627974246686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sau!4v1634554321"
            ></iframe>
          </div>
          <div>
            <h2 className="h2">Send a Message</h2>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent!')}} style={{marginTop:12, display:'grid', gap:10}}>
              <input required type="text" placeholder="Full Name" className="rounded" style={inputStyle} />
              <input required type="email" placeholder="Email" className="rounded" style={inputStyle} />
              <input type="tel" placeholder="Phone" className="rounded" style={inputStyle} />
              <textarea rows="5" placeholder="Your message" className="rounded" style={inputStyle}></textarea>
              <button className="btn" style={{...inputStyle, background:'var(--brand-bg)', color:'#fff', borderColor:'var(--brand-bg)', cursor:'pointer', fontWeight:700}}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

const inputStyle = {
  border: '1px solid var(--brand-border)',
  borderRadius: 10,
  padding: '10px 12px',
  fontFamily: 'inherit',
  fontSize: 14,
  background: '#fff',
  color: 'var(--text)'
}
