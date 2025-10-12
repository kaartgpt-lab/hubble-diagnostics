import { Link } from 'react-router-dom'
import services from '../data/services.js'

export default function Footer(){
  return (
    <footer className="footer">
      <section className="section" style={{padding:'48px 0'}}>
        <div className="container grid-auto">
          <div>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div style={{width:36, height:36, borderRadius:8, background:'rgba(255,255,255,.15)', display:'grid', placeContent:'center', fontWeight:800}}>HD</div>
              <span style={{fontWeight:700}}>Hubble Diagnostics</span>
            </div>
            <p className="p" style={{color:'#fff', opacity:.9}}>Comprehensive diagnostic and lab testing services.</p>
          </div>

          <div>
            <h2 className="h2" style={{fontSize:16}}>Navigation</h2>
            <ul style={{listStyle:'none', padding:0, marginTop:12}}>
              <li style={{marginTop:8}}><Link to="/" style={{color:'#fff', textDecoration:'none'}}>Home</Link></li>
              <li style={{marginTop:8}}><Link to="/services" style={{color:'#fff', textDecoration:'none'}}>Services</Link></li>
              <li style={{marginTop:8}}><Link to="/gallery" style={{color:'#fff', textDecoration:'none'}}>Gallery</Link></li>
              <li style={{marginTop:8}}><Link to="/contact" style={{color:'#fff', textDecoration:'none'}}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="h2" style={{fontSize:16}}>All Services</h2>
            <ul style={{listStyle:'none', padding:0, marginTop:12}}>
              {services.map(s => (
                <li key={s.slug} style={{marginTop:8}}><Link to={`/services/${s.slug}`} style={{color:'#fff', textDecoration:'none'}}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="h2" style={{fontSize:16}}>Contact</h2>
            <ul style={{listStyle:'none', padding:0, marginTop:12, opacity:.95}}>
              <li>+91 98765 43210</li>
              <li>info@hubblediagnostics.example</li>
              <li>45, Health Avenue, Your City</li>
            </ul>
          </div>
        </div>
      </section>
      <div style={{borderTop:'1px solid rgba(255,255,255,.25)'}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 20px', color:'#fff', opacity:.9}}>
          <div>© {new Date().getFullYear()} Hubble Diagnostics</div>
          <div>Precision. Care. Trust.</div>
        </div>
      </div>
    </footer>
  )
}
