import React from 'react'

const Header = ({ course }) => {
    return <h2 key={course.id}>{course.name}</h2>
}

const Total = ({ course }) => {
    const sum = course.parts.map(part => part.exercises)
                            .reduce((accumulator, currentValue) => accumulator + currentValue)
    return <p>total of {sum} exercises</p>
}

const Part = (props) => {
    return props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
}

const Content = ({ course }) => {
    return <Part key={course.id} parts={course.parts} />
}

const Course = ({ courses }) => {
    return courses.map(course => {
        return (
            <div>
                <Header course={course} />
                <Content course={course} />
                <Total course={course} />
            </div>
        )
    })
}

export default Course