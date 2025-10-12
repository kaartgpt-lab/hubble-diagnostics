import { Link } from 'react-router-dom'
import services from '../data/services.js'

export default function Services(){
  return (
    <>
      <section style={{background:'var(--brand-bg)', color:'#fff'}}>
        <div className="container" style={{padding:'48px 0'}}>
          <h1 className="h1" style={{color:'#fff'}}>Services</h1>
          <p className="p" style={{color:'#fff', opacity:.9}}>From routine blood tests to advanced imaging.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {services.map(s => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card" style={{textDecoration:'none'}}>
              <img src={s.hero} className="rounded" style={{width:'100%', height:160, objectFit:'cover'}} />
              <div style={{fontWeight:700, marginTop:8}}>{s.title}</div>
              <div style={{color:'#444', fontSize:14, marginTop:6}}>{s.intro}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
