import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 max-w-7xl ${className}`}>
      {children}
    </div>
  )
}

// Usage example:
// import Container from '@/components/layout/Container'
// <Container className="py-24">
//   <h1>Your content</h1>
// </Container>