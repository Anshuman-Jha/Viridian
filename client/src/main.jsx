import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


   const publishable_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

     if(!publishable_key) {
      throw new Errror("Clerk Publishable Key is missing");
     }

createRoot(document.getElementById('root')).render(
     
  <StrictMode>
<ClerkProvider publishableKey={publishable_key}>
    <App />
    </ClerkProvider>
  </StrictMode>
 
)
