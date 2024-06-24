import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {
  const protocol = [
    {
      id:1,
      time:'21:00 PM',
      name:'Recepción',
      icon:'corona',
      color:'#efd1d5',
      textColor:'#ce808f'
    },

    {
      id:2,
      time:'21:30 PM',
      name:'Protocolo',
      icon:'drinking_white',
      color:'#efd1d5',
      textColor:'#ce808f'
    },

    {
      id:4,
      time:'22:30 PM',
      name:'Buen provecho',
      icon:'cutlery_white',
      color:'#efd1d5',
      textColor:'#ce808f'
    },

    {
      id:5,
      time:'23:00',
      name:'Todos a bailar',
      icon:'music_white',
      color:'#efd1d5',
      textColor:'#ce808f'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={'#ce808f'}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${item.color}`, color:`${item.textColor}`, marginRight:'10px' }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}`}}
              date={`${item.time}`}
              dateClassName='custom-date-color'
              iconStyle={{ background: `${item.color}`, fill: '#fff', boxShadow:`0 0 0 4px ${item.color}`}} 
              icon={<img src={`/img/icons/${item.icon}.svg`} alt={`ico-${item.icon}`} className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine