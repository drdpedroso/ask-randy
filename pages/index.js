import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
            <img style={{borderRadius: '100%',width: 300, marginBottom: 25}}
                src="https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/50827357_2149169931807353_4801843659643289600_n.jpg?_nc_cat=100&_nc_ht=scontent-ams3-1.xx&oh=b83e82dc6ebdefe6f8e8f582ae648ccd&oe=5D6CF27A"/>
            <Link href={`/answer`}>
                <button style={{width: 150, fontSize: 20,borderRadius: 10}}> Ask randy!</button>
            </Link>
        </div>
    )
}

export default Index
