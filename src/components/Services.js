import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends Component {
state = {
        services:[
            {
                    icon: <FaCocktail />,
                    title: "free Cocktails",
                    info: "access free cocktails as a complementry of your service"
            },
            {
                icon: <FaHiking/>,
                title: "Hiking direction",
                info: "access free cocktails as a complementry of your service"
            },
            {
                icon: <FaShuttleVan />,
                title: "shuttle van",
                info: "Use complementry shuttle van with booking for reach our selected destinations"
        },
        {
            icon: <FaBeer/>,
            title: "free beer",
            info: "access free beer as a complementry of your service"
        }
    
        ]
    }

    render() {
        return (
     <section className="services">
<Title title ="services" />
              <div className="services-center">
                  { this.state.services.map((item, index) => { 
                    return (<article key = {index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
    })}
    </div>
    </section>
        )
    }
}

export default Services;