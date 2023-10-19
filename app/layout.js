import './globals.css';
import Nav from './components/navbar';
import Footer from './components/footer';


export const metadata = {
    title: "MLCLOUDSTUDIO",
    description: 'xyzn'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout