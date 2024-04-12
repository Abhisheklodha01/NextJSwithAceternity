import Coursespage from './CoursesPage'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Courses: Music School",
};

function Course() {
  return (
    <Coursespage />
  )
}

export default Course