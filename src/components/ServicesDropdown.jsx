import services from '../data/services.js'

export default function ServicesDropdown({ onNavigate }){
  return (
    <ul style={{margin:0, padding:8}}>
      {services.map(s => (
        <li key={s.slug} style={{padding:'10px 12px', cursor:'pointer', borderRadius:6}}
            onClick={()=>onNavigate(`/services/${s.slug}`)}
            onKeyDown={(e)=>{ if(e.key==='Enter') onNavigate(`/services/${s.slug}`) }}
            tabIndex={0}>
          {s.title}
        </li>
      ))}
      <li style={{padding:'10px 12px', borderTop:'1px solid var(--brand-border)', fontWeight:600, cursor:'pointer'}} onClick={()=>onNavigate('/services')}>
        View all services →
      </li>
    </ul>
  )
}
