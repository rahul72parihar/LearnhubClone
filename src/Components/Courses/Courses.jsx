import React from 'react';
import './Courses.css';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    category: 'Development',
    categoryColor: '#22bdc5',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    title: 'Web Development Bootcamp',
    instructor: 'Trisha Leo',
    duration: '12 weeks',
    students: '2.4K',
    rating: '4.9',
    price: '$49',
  },
  {
    id: 2,
    category: 'Design',
    categoryColor: '#824cd4',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    title: 'UI/UX Design Masterclass',
    instructor: 'Sarah Johnson',
    duration: '8 weeks',
    students: '1.8K',
    rating: '4.8',
    price: '$79',
  },
  {
    id: 3,
    category: 'Data Science',
    categoryColor: '#c16087',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    title: 'Data Science & Analytics',
    instructor: 'Mike Chen',
    duration: '16 weeks',
    students: '3.2K',
    rating: '4.9',
    price: '$129',
  },
  {
    id: 4,
    category: 'Marketing',
    categoryColor: '#f1eb7f',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    title: 'Digital Marketing Pro',
    instructor: 'Emma Davis',
    duration: '6 weeks',
    students: '1.5K',
    rating: '4.7',
    price: '$69',
  },
];

export default function Courses() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="courses" className="coursesSection">
      <div className="coursesHeader">
        <p className="sectionLabel">COURSE</p>
        <h2>
          Explore Our Popular <span>Courses</span>
        </h2>
        <p className="sectionDescription">
          Choose from hundreds of courses designed by industry experts to help you achieve your goals.
        </p>
      </div>

      <div className="coursesGrid">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <div className="viewAllContainer">
        <button className="viewAllButton" onClick={scrollToTop}>
          View All Courses
        </button>
      </div>
    </section>
  );
}
