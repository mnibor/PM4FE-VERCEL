import type { Metadata } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import { AuthProvider } from '@/contexts/authContext'

const primaryFont = Inter({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-primary',
})

const secondaryFont = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-secondary',
})

export const metadata: Metadata = {
	title: 'TecnoBay',
	description: 'Donde la tecnología, vive',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<AuthProvider>
			<html
				lang='es'
				className={`${primaryFont.variable} ${secondaryFont.variable}`}
			>
				<body className='primaryFont.className'>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	)
}
