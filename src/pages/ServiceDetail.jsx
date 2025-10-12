import { useParams, Link } from 'react-router-dom'
import services from '../data/services.js'

export default function ServiceDetail(){
  const { slug } = useParams()
  const svc = services.find(s => s.slug === slug)
  if(!svc) return <div className="section"><div className="container">Service not found.</div></div>

  return (
    <>
      <section style={{background:'var(--brand-bg)', color:'#fff'}}>
        <div className="container" style={{padding:'48px 0'}}>
          <h1 className="h1" style={{color:'#fff'}}>{svc.title}</h1>
          <p className="p" style={{color:'#fff', opacity:.9, maxWidth:760}}>{svc.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <img src={svc.hero} className="rounded" style={{width:'100%', height:360, objectFit:'cover'}} />
          <h2 className="h2" style={{marginTop:24}}>About this Service</h2>
          <p className="p" style={{maxWidth:760}}>Each service is delivered with stringent quality controls. We explain preparation, timelines, and what your report means in simple terms.</p>
          <ul style={{marginTop:12, paddingLeft:18, maxWidth:760}}>
            {svc.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
          </ul>
          <div style={{marginTop:12}}><Link to="/services" style={{color:'var(--brand-bg)'}}>← Back to all services</Link></div>
        </div>
      </section>
    </>
  )
}
