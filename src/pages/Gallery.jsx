export default function Gallery(){
  return (
    <>
      <section style={{background:'var(--brand-bg)', color:'#fff'}}>
        <div className="container" style={{padding:'48px 0'}}>
          <h1 className="h1" style={{color:'#fff'}}>Gallery</h1>
          <p className="p" style={{color:'#fff', opacity:.9}}>Images and videos from our lab & patient journeys.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Images</h2>
          <div className="grid-3" style={{marginTop:12}}>
            {Array.from({length:6}).map((_,i)=>(
              <img key={i} src={`https://picsum.photos/seed/gal${i+1}/1200/800`} className="rounded" style={{width:'100%', height:200, objectFit:'cover'}} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--section-blue)'}}>
        <div className="container">
          <h2 className="h2">YouTube</h2>
          <div className="grid-2" style={{marginTop:12}}>
            <div className="aspect-video">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen style={{border:0}}></iframe>
            </div>
            <div className="aspect-video">
              <iframe src="https://www.youtube.com/embed/oHg5SJYRHA0" title="YouTube video" allowFullScreen style={{border:0}}></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Instagram</h2>
          <p className="p">Embed your feed via a widget or Meta Graph API, or link individual posts.</p>
          <div className="grid-6" style={{marginTop:12}}>
            {Array.from({length:6}).map((_,i)=>(
              <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded" style={{display:'block', aspectRatio:'1/1', border:'1px solid var(--brand-border)', overflow:'hidden'}}>
                <img src={`https://picsum.photos/seed/in${i}/600`} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
