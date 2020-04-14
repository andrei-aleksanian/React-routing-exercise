import React, { Component } from 'react';
import './Courses.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import asyncComponent from "../../Components/AsyncComponent/AsyncComponent";

const Course = asyncComponent( () => {
    return import("../Course/Course");
});

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };

    render () {
        return (
            <BrowserRouter>
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">

                        {
                            this.state.courses.map( course => {
                                const title = "?title=" + course.title;
                                return <Link to={{
                                    pathname: "/" + course.id,
                                    search: title
                                }} key={course.id}>
                                    <article  className="Course">
                                        {course.title}
                                    </article>
                                </Link>;
                            })
                        }
                    </section>
                    <Route path="/:id" exact  component={Course}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Courses;