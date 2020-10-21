import React from 'react'

const Header = ({ courses }) => {
    return courses.map(course => <h1 key={course.id}>{course.name}</h1>)
}

const Total = ({ courses }) => {
    const parts = courses.map(course => course.parts)
    // const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue)
    const sum = parts[0][0].exercises + parts[0][1].exercises + parts[0][2].exercises + parts[0][3].exercises
    const sum2 = parts[1][0].exercises + parts[1][1].exercises
    return <p>total of {sum} exercises {sum2}</p>
}

const Part = (props) => {
    return props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
}

const Content = ({ courses }) => {
    return courses.map(course => <Part key={course.id} parts={course.parts} />)
}

const Course = ({ courses }) => {
    return (
        <div>
            <Header courses={courses} />
            <Content courses={courses} />
            <Total courses={courses} />
        </div>
    )
}

export default Course