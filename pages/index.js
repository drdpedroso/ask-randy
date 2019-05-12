import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <Link href={`/answer`}>
                <button style={{width: 150, fontSize: 20,borderRadius: 10}}> Ask randy!</button>
            </Link>
        </div>
    )
}

export default Index
