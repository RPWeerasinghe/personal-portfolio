import{useState}from'react';

function App(){
  
  const [showContact ,  setShowContact] = useState(false);
    
  
  return(

    <div style = {{fontFamily: 'sans-serif', padding: '20px', textAlign: 'center'}}>
      <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '24px', maxWidth: '400px', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ color: '#333' }}>R.WEERASINGHE</h1>
      <p>Computer Science Undergraduate at NSBM Green University, currently awaiting graduation. Passionate about Frontend Development and building clean, user-friendly web experiences. Constantly learning and turning code into interactive realities.</p><br/>

      <h3 style={{ color: '#333' }}>Education</h3>
      <p style={{ textAlign: 'left', color: '#555' }}>🎓 BSc (Hons) in Computer Science<br/>NSBM Green University (Awaiting Graduation)</p>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
      <span style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>HTML</span>
      <span style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>CSS</span>
      <span style={{ backgroundColor: '#ffc107', color: '#212529', padding: '8px 16px', borderRadius: '20px' }}>JavaScript</span>
      <span style={{ backgroundColor: '#17a2b8', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>React</span>
      </div>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
      <h2 style={{ color: '#333' }}>Featured Projects</h2>
      </div>

      <button style={{backgroundColor: '#0070f3', color: '#fff' , border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer'}} onClick={()=>setShowContact(!showContact)}>Contact info</button>
      {showContact&&(
        <div style={{ marginTop: '20px', background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px dashed #0070f3' }}>
          <p>Email: d4rk444123@gmail.com</p>
          <a href="https://github.com/RPWeerasinghe">GitHub: https://github.com/RPWeerasinghe</a>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;