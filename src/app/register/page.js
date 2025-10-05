'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    numbers: '',
    acceptTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const BACKEND_URL = 'https://jackpotbackend-rsbt.onrender.com/api/register'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const numbersArray = formData.numbers
        .split(',')
        .map((num) => num.trim())
        .filter(Boolean)

      if (numbersArray.length !== 6) {
        setError('Bitte geben Sie genau 6 Zahlen ein.')
        setLoading(false)
        return
      }

      const bodyData = {
        FirstName: formData.firstName,
        Surname: formData.surname,
        Email: formData.email,
        Phone: formData.phone,
        Address: formData.address,
        AcceptTerms: formData.acceptTerms,
        B0_1: numbersArray[0],
        B0_2: numbersArray[1],
        B0_3: numbersArray[2],
        B0_4: numbersArray[3],
        B0_5: numbersArray[4],
        B0_6: numbersArray[5],
      }

      // Using fetch with redirect 'follow' to let backend redirect work
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
        redirect: 'follow',
      })

      // Backend redirects on success
      if (res.redirected) {
        window.location.href = res.url
      } else {
        setError('Fehler beim Senden. Bitte versuchen Sie es erneut.')
      }
    } catch (err) {
      setError('Netzwerkfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header 
        title="Registrieren | kostenlose-lotterie.de"
        description="Melden Sie sich kostenlos an und nehmen Sie an der Free Lottery teil."
      />
      <Navbar />

      <div className="container">
        <h1 className="page-title">Registrierung</h1>

        <form onSubmit={handleSubmit} className="register-form">
          <input name="firstName" placeholder="Vorname" value={formData.firstName} onChange={handleChange} required />
          <input name="surname" placeholder="Nachname" value={formData.surname} onChange={handleChange} required />
          <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Telefonnummer" value={formData.phone} onChange={handleChange} required />
          <input name="address" placeholder="Adresse" value={formData.address} onChange={handleChange} required />
          <input name="numbers" placeholder="Ihre Zahlen (z.B. 1,2,3,4,5,6)" value={formData.numbers} onChange={handleChange} required />

          <label>
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
            Ich akzeptiere die AGB
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Wird gesendet...' : 'Registrieren'}
          </button>
        </form>
      </div>

      <Footer />

      <style jsx>{`
        .container { max-width: 600px; margin: 50px auto; padding: 20px; text-align: center; }
        .register-form { display: flex; flex-direction: column; gap: 15px; }
        input { padding: 12px; border: 1px solid #ccc; border-radius: 6px; }
        button { background: #4CAF50; color: white; padding: 12px; border: none; border-radius: 6px; cursor: pointer; }
        .error { color: red; }
        .page-title { margin-bottom: 20px; }
      `}</style>
    </>
  )
}
