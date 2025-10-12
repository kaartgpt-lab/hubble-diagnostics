export default function Doctors(){
  return (
    <>
      <section style={{background:'var(--brand-bg)', color:'#fff'}}>
        <div className="container" style={{padding:'48px 0'}}>
          <h1 className="h1" style={{color:'#fff'}}>Our Doctors</h1>
          <p className="p" style={{color:'#fff', opacity:.9}}>Experienced, compassionate, research-driven clinicians.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="p" style={{maxWidth:720}}>Our team includes pathologists, radiologists, and experienced technicians with a shared purpose: providing accurate diagnostics on time.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {Array.from({length:6}).map((_,i)=>(
            <div key={i} className="card">
              <img src={`https://picsum.photos/seed/doc${i+1}/800/500`} className="rounded" style={{width:'100%', height:200, objectFit:'cover'}} />
              <div style={{fontWeight:600, marginTop:8}}>Dr. First Last {i+1}</div>
              <div style={{color:'#444', fontSize:14}}>Pathology</div>
              <div style={{color:'#666', fontSize:13, marginTop:6}}>MBBS, MD — 10+ yrs</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--section-blue)'}}>
        <div className="container">
          <h2 className="h2">Our Purpose</h2>
          <p className="p" style={{maxWidth:720}}>Deliver clear reports and transparent communication so patients and doctors can make confident decisions.</p>
        </div>
      </section>
    </>
  )
}
